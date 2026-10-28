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

// 'YYYY-MM-DD' -> 'August 11, 2017', 'YYYY-MM' -> 'January 2017', 'YYYY' -> '2020' (parsed by hand so the date never shifts with the build machine's timezone)
export function formatSoldDate(iso: string): string {
	const [y, m, d] = iso.split('-').map(Number);
	if (!m) return String(y);
	if (!d) return `${MONTHS[m - 1]} ${y}`;
	return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// 'on August 11, 2017' for a full date, 'in January 2017' or 'in 2020' when only the month or year is known
export function soldWhen(iso: string): string {
	return `${iso.split('-').length === 3 ? 'on' : 'in'} ${formatSoldDate(iso)}`;
}

// 'YYYY-MM-DD' -> 'Q4 2026'. Insights show the quarter instead of the month, parsed by hand so the date never shifts with the build machine's timezone.
export function formatQuarter(iso: string): string {
	const [y, m] = iso.split('-').map(Number);
	return `Q${Math.ceil(m / 3)} ${y}`;
}
