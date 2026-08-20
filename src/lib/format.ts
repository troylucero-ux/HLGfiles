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
