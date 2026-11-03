// Slugs of the Spanish Insights articles, shared by every postsEs*.ts file so articles can link to each other.
export const ES = {
	paso: 'como-vender-un-edificio-de-apartamentos-en-los-angeles-paso-a-paso',
	impuestos: 'ganancias-de-capital-recuperacion-de-depreciacion-vender-edificio-los-angeles',
	inquilinos: 'vender-edificio-con-inquilinos-control-de-rentas-los-angeles',
	ula: 'medida-ula-2026-umbrales-vender-edificio-de-apartamentos-los-angeles',
	vender: 'debo-vender-mi-edificio-de-apartamentos-en-los-angeles',
	corredor: 'como-elegir-un-corredor-de-edificios-multifamiliares-en-los-angeles',
	valorar: 'como-valorar-un-edificio-de-apartamentos-en-los-angeles',
	bov: 'opinion-de-valor-vs-avaluo-edificio-de-apartamentos',
	ab1482: 'limite-de-rentas-ab-1482-2026-edificios-los-angeles',
	rso: 'aumentos-de-renta-rso-los-angeles-2026',
	intercambio: 'intercambio-1031-hacia-propiedades-triple-net',
	heredado: 'heredo-un-edificio-de-apartamentos-en-los-angeles-que-hacer',
	findeano: 'vender-edificio-de-apartamentos-antes-de-fin-de-ano',
	fourplex: 'vender-un-fourplex-o-edificio-pequeno-en-los-angeles',
};

// Link target for the Spanish valuation form.
export const BOV = '/es/vender-edificio-de-apartamentos-los-angeles/#formulario';

export const esUrl = (key: keyof typeof ES) => `/es/insights/${ES[key]}/`;
