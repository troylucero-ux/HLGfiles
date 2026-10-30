// Upload date and length of each YouTube video used on the site, read from each video's own YouTube
// page (checked 2026-10-30). They feed the VideoObject structured data, where Google requires uploadDate.
// When adding a youtubeId to a closing or listing, add its entry here too; a video missing from this map
// is published without the two fields.
export const youtubeMeta: Record<string, { uploadDate: string; duration: string }> = {
	'7KAeOrIQmi0': { uploadDate: '2026-08-24T15:34:15-07:00', duration: 'PT0M43S' },
	B5j9GEvR1gA: { uploadDate: '2026-10-16T09:19:40-07:00', duration: 'PT0M44S' },
	Bn8asB9XcNk: { uploadDate: '2026-09-14T11:27:09-07:00', duration: 'PT1M2S' },
	cCs5_Kn4eSQ: { uploadDate: '2026-08-24T15:34:23-07:00', duration: 'PT0M50S' },
	dXbVV9ctKgo: { uploadDate: '2026-08-24T15:36:45-07:00', duration: 'PT1M11S' },
	dYbOzm5dwkU: { uploadDate: '2026-08-24T15:35:07-07:00', duration: 'PT0M47S' },
	fPCjDEiQNFY: { uploadDate: '2026-09-16T10:49:43-07:00', duration: 'PT1M9S' },
	G54jDaJWQWE: { uploadDate: '2026-08-24T15:34:59-07:00', duration: 'PT1M2S' },
	G8gy7LW6edA: { uploadDate: '2026-08-24T15:34:20-07:00', duration: 'PT0M39S' },
	hNlrT8MSd2M: { uploadDate: '2025-07-24T10:12:53-07:00', duration: 'PT1M6S' },
	LHKakwwP6Y4: { uploadDate: '2026-08-24T15:34:34-07:00', duration: 'PT1M20S' },
	NWHQN79ZvbU: { uploadDate: '2025-07-24T10:13:03-07:00', duration: 'PT1M16S' },
	ovUCjwCJC8Y: { uploadDate: '2026-08-24T15:34:27-07:00', duration: 'PT1M3S' },
	rIIxz1zzRjI: { uploadDate: '2026-08-24T15:36:50-07:00', duration: 'PT1M21S' },
};
