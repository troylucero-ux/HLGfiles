import Anthropic from '@anthropic-ai/sdk';
import { site, team } from '../src/data/site';
import { submarkets } from '../src/data/submarkets';
import { corsHeaders, type Env } from './env';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

// Best-effort abuse guard: at most RATE_LIMIT replies per visitor (by IP) per hour. The counts live in this Worker
// instance's memory, so a restart or a second data center resets them; the monthly spending cap set in the Anthropic
// console is the hard backstop.
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, number[]>();

function overLimit(ip: string): boolean {
	const now = Date.now();
	const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
	if (recent.length >= RATE_LIMIT) {
		hits.set(ip, recent);
		return true;
	}
	recent.push(now);
	hits.set(ip, recent);
	if (hits.size > 5000) {
		for (const [key, times] of hits) if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
	}
	return false;
}

function buildSystemPrompt(): string {
	const submarketList = submarkets.map((s) => `- ${s.name} (${s.region}): ${s.blurb}`).join('\n');
	const teamList = team.map((t) => `- ${t.name}, ${t.title} — ${t.phone}, ${t.email}`).join('\n');

	return `You are the website assistant for ${site.name}, a boutique multifamily investment sales team (part of ${site.brokerage}) serving apartment building owners across the Los Angeles Metro Area. Principals are Josh Kaplan (DRE #01934177) and Troy Lucero (DRE #02015705).

Track record: 1,390+ units closed, $345,000,000+ in sale value, 135,000 SF of land for development closed.

Services:
- Multifamily apartment building sales (seller and buyer representation)
- 1031 exchange strategy and execution
- Trust & estate / probate sales, handled with a calmer, more empathetic approach
- Land for development sales (zoning evaluation, highest-and-best-use analysis)
- Free, no-obligation Broker Opinion of Value (BOV)

Submarkets we specialize in:
${submarketList}

Team:
${teamList}
Office: ${site.brokerage}, ${site.officeAddress}, Office DRE #${site.officeDRE}

Your role:
- Answer natural-language questions about our services, submarkets, and the selling process in a warm, professional, non-fluffy tone — no em dashes, no hype, just straightforward answers grounded in the facts above.
- If asked about specific closed sales, case studies, or current listings, point the visitor to the relevant page (/closed-sales/, /case-studies/, /listings/, /submarkets/) rather than inventing numbers you don't have.
- If someone seems ready to sell, is asking about pricing/valuation, or asks to talk to a person, proactively invite them to request a free Broker Opinion of Value at /contact/?intent=bov, or to contact Josh or Troy directly using the phone/email above.
- For trust, estate, or probate situations, use a calmer, more patient tone and acknowledge the emotional weight before getting into process details.
- Do not provide legal, tax, or financial advice. For 1031 exchange or tax questions, give general process information and recommend they confirm specifics with their CPA, attorney, or qualified intermediary.
- Useful pages to point to: /property-value/ (free value calculator), /measure-ula-calculator/ (transfer taxes and net proceeds), /market-report/ (LA prices and cap rates), /1031-exchanges/, /broker-opinion-of-value/, /faqs/.
- Measure ULA facts (state them plainly, then tell the visitor to confirm with their escrow officer, attorney or CPA): it is a City of Los Angeles transfer tax only, not other cities. No ULA tax at or below a $5.4 million sale price. Above $5.4 million it is 4% of the full price, and at about $10.9 million and up it is 5.5% of the full price. The ordinary City of LA transfer tax is 0.45% and the county tax is $1.10 per $1,000. Our calculator at /measure-ula-calculator/ also covers Santa Monica, Culver City, Pomona and Redondo Beach.
- If the visitor writes in Spanish, answer in Spanish, and mention that Troy Lucero speaks Spanish and has a Spanish page at /es/.
- Keep answers concise (2-4 short paragraphs max) and conversational, suitable for a chat widget.
- If you don't know something specific about this business, say so plainly and offer to connect them with Josh or Troy rather than guessing.`;
}

export async function handleChat(request: Request, env: Env): Promise<Response> {
	if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders() });
	if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });

	if (!env.ANTHROPIC_API_KEY) {
		return new Response(JSON.stringify({ error: 'Chat is not configured.' }), { status: 500, headers: corsHeaders() });
	}

	if (overLimit(request.headers.get('CF-Connecting-IP') ?? 'unknown')) {
		return new Response(
			JSON.stringify({ error: `You've reached the chat limit for now. Please call us at ${site.phone} or request a free valuation on this site.` }),
			{ status: 429, headers: corsHeaders() },
		);
	}

	let body: { messages?: ChatMessage[] };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers: corsHeaders() });
	}

	const incoming = Array.isArray(body.messages) ? body.messages : [];

	if (incoming.length === 0 || incoming.length > MAX_MESSAGES) {
		return new Response(JSON.stringify({ error: 'Invalid message count.' }), { status: 400, headers: corsHeaders() });
	}

	const messages: ChatMessage[] = [];
	for (const m of incoming) {
		if ((m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string' || m.content.length === 0) {
			return new Response(JSON.stringify({ error: 'Invalid message format.' }), { status: 400, headers: corsHeaders() });
		}
		messages.push({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) });
	}

	const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

	try {
		const response = await client.messages.create({
			model: 'claude-sonnet-5-5',
			max_tokens: 1024,
			system: buildSystemPrompt(),
			output_config: { effort: 'low' },
			messages,
		});

		const textBlock = response.content.find((b): b is Anthropic.TextBlock => b.type === 'text');
		const reply = textBlock?.text ?? "Sorry, I wasn't able to put together a response. Please try again or contact us directly.";

		return new Response(JSON.stringify({ reply }), { headers: corsHeaders() });
	} catch (err) {
		return new Response(JSON.stringify({ error: 'The chat assistant is temporarily unavailable. Please contact us directly.' }), {
			status: 502,
			headers: corsHeaders(),
		});
	}
}
