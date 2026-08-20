import Anthropic from '@anthropic-ai/sdk';
import { site, team } from '../../src/data/site';
import { submarkets } from '../../src/data/submarkets';

interface Env {
	ANTHROPIC_API_KEY: string;
}

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

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
- If asked about specific closed sales, case studies, or current listings, point the visitor to the relevant page (/closings/, /case-studies/, /listings/, /submarkets/) rather than inventing numbers you don't have.
- If someone seems ready to sell, is asking about pricing/valuation, or asks to talk to a person, proactively invite them to request a free Broker Opinion of Value at /contact/?intent=bov, or to contact Josh or Troy directly using the phone/email above.
- For trust, estate, or probate situations, use a calmer, more patient tone and acknowledge the emotional weight before getting into process details.
- Do not provide legal, tax, or financial advice. For 1031 exchange or tax questions, give general process information and recommend they confirm specifics with their CPA, attorney, or qualified intermediary.
- Keep answers concise (2-4 short paragraphs max) and conversational, suitable for a chat widget.
- If you don't know something specific about this business, say so plainly and offer to connect them with Josh or Troy rather than guessing.`;
}

function corsHeaders(): HeadersInit {
	return {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
	};
}

export async function onRequestOptions(): Promise<Response> {
	return new Response(null, { headers: corsHeaders() });
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
	const { request, env } = context;

	if (!env.ANTHROPIC_API_KEY) {
		return new Response(JSON.stringify({ error: 'Chat is not configured.' }), { status: 500, headers: corsHeaders() });
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
			model: 'claude-opus-5',
			max_tokens: 1024,
			system: buildSystemPrompt(),
			output_config: { effort: 'medium' },
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
