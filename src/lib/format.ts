export function formatPrice(price: number): string {
	if (price >= 1000000) {
		const millions = price / 1000000;
		return `$${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(2)}M`;
	}
	return `$${price.toLocaleString('en-US')}`;
}

export function formatPriceFull(price: number): string {
	return `$${price.toLocaleString('en-US')}`;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// 'YYYY-MM-DD' -> 'August 11, 2017' (parsed by hand so the date never shifts with the build machine's timezone)
export function formatSoldDate(iso: string): string {
	const [y, m, d] = iso.split('-').map(Number);
	return `${MONTHS[m - 1]} ${d}, ${y}`;
}
