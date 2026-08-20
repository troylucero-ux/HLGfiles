// Insights / blog posts. Empty at launch — add entries here as content is written.
// Good starting topics per the project brief: RSO updates, Measure ULA, long-tail submarket + process keywords.

export type Post = {
	slug: string;
	title: string;
	description: string;
	date: string; // ISO date
	body: string; // markdown or plain paragraphs, rendered as-is
};

export const posts: Post[] = [];
