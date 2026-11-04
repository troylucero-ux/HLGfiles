// Explanatory graphics for the Spanish Insights articles. An article section points to one of these by id
// (`visual: 'ulaTabla'` in postsEs*.ts), and src/components/ArticleVisual.astro draws it. Figures here restate
// facts in the matching article, so edit them together.
export type Tone = 'navy' | 'gold' | 'light';

export type Visual =
	| { type: 'table'; title: string; headers: string[]; rows: { cells: string[]; sub?: string; highlight?: boolean }[]; note?: string }
	| { type: 'steps'; title: string; steps: { label: string; desc?: string; badge?: string }[]; numbered?: boolean; note?: string }
	| { type: 'formula'; title: string; parts: { value: string; label: string; accent?: boolean }[]; ops: string[]; note?: string }
	| {
			type: 'bars';
			title: string;
			max: number;
			rows: { label: string; total: string; segments: { label: string; pct: number; tone: Tone }[] }[];
			legend: { label: string; tone: Tone }[];
			note?: string;
	  }
	| { type: 'columns'; title: string; columns: { heading: string; tone: Tone; items: string[] }[]; note?: string }
	| { type: 'split'; title: string; intro?: string; segments: { label: string; amount: string; pct: number; tone: Tone; desc: string }[]; note?: string }
	| { type: 'timeline1031' };

export const visuals: Record<string, Visual> = {
	// ---- Cómo vender, paso a paso
	pasos8: {
		type: 'steps',
		title: 'Las ocho etapas de una venta',
		steps: [
			{ label: 'Decida su meta', desc: 'Precio, fecha, intercambio 1031 o venta discreta' },
			{ label: 'Averigüe el valor', desc: 'Calculadora y opinión de valor' },
			{ label: 'Elija un corredor', desc: 'Y firme el contrato de listado' },
			{ label: 'Reúna documentos', desc: 'Rentas, contratos, ingresos y gastos' },
			{ label: 'Promueva el edificio', desc: 'Memorando de oferta y compradores' },
			{ label: 'Revise las ofertas', desc: 'Compare por lo que recibe neto y por su seguridad' },
			{ label: 'Escrow y revisión', desc: 'Inspecciones y estoppels' },
			{ label: 'El cierre', desc: 'La escritura y su dinero neto' },
		],
		note: 'Del anuncio al cierre: de 60 a 90 días, con unas semanas de mercadeo y de 30 a 45 días de escrow. La preparación antes de anunciar se suma a ese tiempo.',
	},

	// ---- Vender con inquilinos bajo control de rentas
	checklistInquilinos: {
		type: 'steps',
		title: 'Cinco pasos antes de vender con inquilinos',
		steps: [
			{ label: 'Lista de rentas exacta', desc: 'Cada renta, fecha de inicio y unidad' },
			{ label: 'Expedientes de contratos', desc: 'Contratos, anexos, avisos y depósitos' },
			{ label: 'Cumplimiento con la Ciudad', desc: 'Registro de la RSO y cuotas al día' },
			{ label: 'Estoppels', desc: 'Confirmaciones por escrito de los inquilinos' },
			{ label: 'Prácticas normales', desc: 'Reparaciones y avisos por escrito' },
		],
	},

	// ---- Ganancias de capital
	recuperacion: {
		type: 'split',
		title: 'Ejemplo: un edificio comprado en $1,000,000 y vendido en $2,000,000',
		intro: 'Con los años, usted dedujo $400,000 de depreciación, así que su base ajustada es de $600,000. Así divide el IRS el precio de venta de $2,000,000 (después de los costos de venta):',
		segments: [
			{ label: 'Su base de regreso', amount: '$600,000', pct: 30, tone: 'light', desc: 'No paga impuesto. Es la parte de su inversión que todavía no ha deducido.' },
			{ label: 'Recuperación de la depreciación', amount: '$400,000', pct: 20, tone: 'gold', desc: 'Las deducciones que tomó regresan como ganancia, con un impuesto federal de hasta 25% (máximo $100,000).' },
			{ label: 'Aumento del precio', amount: '$1,000,000', pct: 50, tone: 'navy', desc: 'Ganancia de capital a largo plazo, con un impuesto federal de 0%, 15% o 20% (máximo $200,000).' },
		],
		note: 'Ganancia total sujeta a impuestos: $1,400,000. Solo cifras federales: puede aplicar también el impuesto de 3.8% sobre los ingresos netos de inversión, y California grava toda la ganancia como ingreso ordinario. Ilustración simplificada, no es asesoría de impuestos.',
	},
	formasImpuesto: {
		type: 'columns',
		title: 'Cuatro formas de manejar el impuesto',
		columns: [
			{ heading: 'Intercambio 1031', tone: 'navy', items: ['Difiere el impuesto y la recuperación de la depreciación', '45 días para identificar, 180 para cerrar'] },
			{ heading: 'El momento de la venta', tone: 'gold', items: ['Cerrar en diciembre o enero cambia el año fiscal', 'Hable con su contador antes de anunciar'] },
			{ heading: 'Planeación patrimonial', tone: 'navy', items: ['La herencia recibe una base actualizada', 'Puede eliminar gran parte de la ganancia'] },
			{ heading: 'Registros', tone: 'gold', items: ['Guarde las mejoras de capital', 'Aumentan su base y reducen la ganancia'] },
		],
	},

	// ---- Medida ULA
	ulaTabla: {
		type: 'table',
		title: 'Impuesto de la Medida ULA en cada umbral (cierres después del 30 de junio de 2026)',
		headers: ['Precio de venta', 'Tasa ULA', 'Impuesto ULA', 'Le queda después de ULA'],
		rows: [
			{ cells: ['$5,400,000', 'Ninguna', '$0', '$5,400,000'], sub: 'En el primer umbral' },
			{ cells: ['$5,500,000', '4%', '$220,000', '$5,280,000'], sub: 'Apenas arriba', highlight: true },
			{ cells: ['$5,625,000', '4%', '$225,000', '$5,400,000'], sub: 'Equilibrio con $5.4 millones' },
			{ cells: ['$10,800,000', '4%', '$432,000', '$10,368,000'], sub: 'Apenas debajo del segundo umbral' },
			{ cells: ['$10,900,000', '5.5%', '$599,500', '$10,300,500'], sub: 'En el segundo umbral', highlight: true },
			{ cells: ['$10,975,000', '5.5%', '$603,625', '$10,371,375'], sub: 'Casi equilibrio con $10.8 millones' },
		],
		note: 'Ilustración. Muestra solo el impuesto ULA, antes del impuesto de transferencia regular de la Ciudad, las comisiones y otros costos de cierre. Tasas y umbrales de la Oficina de Finanzas de la Ciudad de Los Ángeles.',
	},
	ulaPrecios: {
		type: 'bars',
		title: 'Impuestos de transferencia a tres precios (Ciudad de Los Ángeles)',
		max: 6.06,
		rows: [
			{
				label: '$5,400,000',
				total: '0.56% · $30,240',
				segments: [
					{ label: 'Condado', pct: 0.11, tone: 'light' },
					{ label: 'Ciudad', pct: 0.45, tone: 'gold' },
				],
			},
			{
				label: '$6,000,000',
				total: '4.56% · $273,600',
				segments: [
					{ label: 'Condado', pct: 0.11, tone: 'light' },
					{ label: 'Ciudad', pct: 0.45, tone: 'gold' },
					{ label: 'ULA', pct: 4, tone: 'navy' },
				],
			},
			{
				label: '$12,000,000',
				total: '6.06% · $727,200',
				segments: [
					{ label: 'Condado', pct: 0.11, tone: 'light' },
					{ label: 'Ciudad', pct: 0.45, tone: 'gold' },
					{ label: 'ULA', pct: 5.5, tone: 'navy' },
				],
			},
		],
		legend: [
			{ label: 'Condado ($1.10 por cada $1,000)', tone: 'light' },
			{ label: 'Ciudad (0.45%)', tone: 'gold' },
			{ label: 'Medida ULA (4% o 5.5%)', tone: 'navy' },
		],
		note: 'Son cifras antes de la comisión, otros costos de cierre e impuestos sobre la renta.',
	},
	ula87: {
		type: 'formula',
		title: 'El impuesto en términos de ingreso',
		parts: [
			{ value: '$240,000', label: 'Impuesto ULA en una venta de $6,000,000' },
			{ value: '$27,500 al mes', label: 'Ingreso del edificio ($330,000 al año, con una tasa de 5.5%)' },
			{ value: '≈ 8.7 meses', label: 'De ingreso del edificio, pagados una sola vez el día que vende', accent: true },
		],
		ops: ['÷', '='],
	},

	// ---- ¿Debo vender? 7 preguntas
	sieteQ: {
		type: 'steps',
		title: 'Las siete preguntas',
		steps: [
			{ label: 'Sus metas', desc: '¿Qué quiere que haga el edificio por usted?' },
			{ label: 'Valor hoy', desc: 'Un número realista' },
			{ label: 'Neto después de impuestos', desc: 'Y de costos' },
			{ label: 'Costos futuros', desc: 'Los próximos cinco años' },
			{ label: 'Rentas frente al mercado', desc: 'El efecto del control de rentas' },
			{ label: 'Sus opciones', desc: 'Además de vender' },
			{ label: 'Su calendario', desc: 'Año fiscal y plazos del 1031' },
		],
	},

	// ---- Cómo elegir un corredor
	sieteCosas: {
		type: 'steps',
		title: 'Siete cosas que revisar antes de contratar',
		steps: [
			{ label: 'Una trayectoria verificable', desc: 'Direcciones, unidades y precios' },
			{ label: 'Su vecindario', desc: 'Ventas recientes cerca de su edificio' },
			{ label: 'Un precio honesto', desc: 'Con comparables y su neto' },
			{ label: 'Plan para compradores', desc: 'Inversionistas, corredores y más' },
			{ label: 'Reglas e impuestos', desc: 'Rentas, ULA, 1031, herencias' },
			{ label: 'Quién hace el trabajo', desc: 'Y con qué frecuencia lo llamarán' },
			{ label: 'Referencias', desc: 'Antiguos vendedores a quienes llamar' },
		],
	},
	alertas: {
		type: 'columns',
		title: 'Señales de confianza y señales de alerta',
		columns: [
			{
				heading: 'Señales de confianza',
				tone: 'navy',
				items: [
					'Ventas recientes que usted puede verificar',
					'Ventas comparables cerca de su edificio',
					'Un precio explicado con comparables y su neto',
					'Un plan claro para llegar a compradores',
					'Referencias de antiguos vendedores',
				],
			},
			{
				heading: 'Señales de alerta',
				tone: 'gold',
				items: [
					'Un precio muy por encima de todas las demás opiniones',
					'Presión para firmar rápido',
					'Respuestas vagas sobre su trayectoria',
					'Un contrato de listado largo y sin salida',
					'Resistencia a dar referencias',
				],
			},
		],
	},

	// ---- Cómo valorar un edificio
	formulaValor: {
		type: 'formula',
		title: 'Cómo se calcula el valor de un edificio',
		parts: [
			{ value: '$100,000', label: 'Ingreso operativo neto (NOI)' },
			{ value: '5.5%', label: 'Tasa de capitalización de mercado' },
			{ value: '≈ $1.8 millones', label: 'Valor del edificio', accent: true },
		],
		ops: ['÷', '='],
		note: 'Una tasa de capitalización más baja significa que los compradores pagan más por cada dólar de ingreso.',
	},
	pfTabla: {
		type: 'table',
		title: 'Ejemplo real: 3815 Don Tomaso Dr, rentas actuales frente a rentas de mercado',
		headers: ['', 'Con las rentas actuales', 'Con rentas de mercado'],
		rows: [
			{ cells: ['Ingreso operativo neto (NOI)', '$79,148', '$129,826'] },
			{ cells: ['Tasa de capitalización', '6.33%', '10.39%'], highlight: true },
			{ cells: ['Diferencia de renta (loss to lease)', '47% por debajo del mercado', '$4,904 al mes'] },
		],
		note: 'Los compradores pagan por ese potencial, pero solo en parte, porque con control de rentas no pueden aprovecharlo hasta que las unidades se desocupen.',
	},

	// ---- Opinión de valor frente a avalúo
	bovTabla: {
		type: 'table',
		title: 'Opinión de valor frente a avalúo',
		headers: ['', 'Opinión de valor (BOV)', 'Avalúo'],
		rows: [
			{ cells: ['Quién lo prepara', 'Un corredor', 'Un valuador con licencia'] },
			{ cells: ['Para qué existe', 'Fijar el precio y promover la venta', 'Respaldar un préstamo u otra necesidad formal'] },
			{ cells: ['Cuánto cuesta', 'Normalmente sin cargo con un corredor', 'Se paga, por lo general quien lo necesita'] },
			{ cells: ['Cómo se usa', 'Herramienta de planeación, sin validez formal', 'El documento en que se apoyan los prestamistas'] },
			{ cells: ['Cuándo lo necesita', 'Antes de vender', 'Lo pide el prestamista del comprador'] },
		],
	},

	// ---- AB 1482
	ab1482Tabla: {
		type: 'table',
		title: 'Aumento anual máximo de la AB 1482 por región, vigente desde el 1 de agosto de 2026',
		headers: ['Región', 'Cambio del CPI', 'Máximo (5% + CPI)'],
		rows: [
			{ cells: ['Región Oeste (Western)', '3.5%', '8.5%'] },
			{ cells: ['California', '3.6%', '8.6%'] },
			{ cells: ['Los Ángeles-Long Beach-Anaheim', '3.7%', '8.7%'], highlight: true },
			{ cells: ['San Francisco-Oakland-Hayward', '3.8%', '8.8%'] },
			{ cells: ['San Diego-Carlsbad', '3.2%', '8.2%'] },
			{ cells: ['Riverside-San Bernardino-Ontario', '3.1%', '8.1%'] },
		],
		note: 'Fuente: Apartment Association of Greater Los Angeles (AAGLA), que cita a la Oficina de Estadísticas Laborales de Estados Unidos y al Departamento de Relaciones Industriales de California. El máximo es 5% más el cambio del CPI, con un techo general de 10%.',
	},

	// ---- RSO
	rentaComparacion: {
		type: 'table',
		title: 'Ejemplo: una renta de $2,000 al mes',
		headers: ['', 'Edificio RSO (3%)', 'Edificio AB 1482 (8.7%)'],
		rows: [
			{ cells: ['Aumento por mes', '$60', '$174'] },
			{ cells: ['Aumento por año, por unidad', '$720', '$2,088'], highlight: true },
		],
		note: 'Por esta diferencia, los dos tipos de edificios se valoran de forma distinta.',
	},
	formulaRso: {
		type: 'formula',
		title: 'Qué vale un aumento permitido que todavía no se ha usado',
		parts: [
			{ value: '$7,200 al año', label: 'Aumento de 3% en 10 unidades de $2,000' },
			{ value: '6%', label: 'Tasa de capitalización' },
			{ value: '≈ $120,000', label: 'Valor para un comprador', accent: true },
		],
		ops: ['÷', '='],
		note: 'Es un ejemplo, no una cotización para su edificio.',
	},

	// ---- Intercambio 1031
	timeline1031: { type: 'timeline1031' },

	// ---- Heredado
	primeros30: {
		type: 'steps',
		title: 'Sus primeros 30 días',
		steps: [
			{ label: 'Confirme el seguro', desc: 'Y avise a la aseguradora' },
			{ label: 'Separe el dinero', desc: 'Las rentas van a una cuenta de la herencia o del fideicomiso' },
			{ label: 'Avise a los inquilinos', desc: 'A quién pagar y a quién llamar' },
			{ label: 'Reúna los documentos', desc: 'Acta, fideicomiso, contratos, lista de rentas' },
			{ label: 'Llame a un abogado y a un contador', desc: 'Antes de anunciar el edificio' },
		],
	},
	fideicomisoProbate: {
		type: 'columns',
		title: 'Quién puede vender un edificio heredado',
		columns: [
			{
				heading: 'Estaba en un fideicomiso en vida',
				tone: 'navy',
				items: [
					'El fideicomisario sucesor generalmente puede vender',
					'Sigue los términos del fideicomiso',
					'Normalmente no necesita la aprobación de la corte',
				],
			},
			{
				heading: 'No estaba en un fideicomiso (sucesión o probate)',
				tone: 'gold',
				items: [
					'La corte nombra a un albacea o administrador',
					'Esa persona maneja la venta, no los herederos directamente',
					'Con autoridad plena: avisa a los herederos y la corte interviene solo si alguien se opone',
					'Con autoridad limitada: la venta va a la corte para su confirmación',
				],
			},
		],
	},

	// ---- Fin de año
	findeanoPasos: {
		type: 'steps',
		title: 'El calendario de una venta de fin de año',
		steps: [
			{ label: 'Octubre', desc: 'Anunciar el edificio' },
			{ label: 'Noviembre', desc: 'Escrow y revisión del comprador' },
			{ label: 'Diciembre', desc: 'Cierre antes del 31' },
		],
		note: 'Si anuncia ahora, un cierre el 31 de diciembre es realista. Si espera hasta noviembre, es probable que cierre en 2027.',
	},
	findeanoCols: {
		type: 'columns',
		title: 'Cierre en diciembre o cierre en enero',
		columns: [
			{ heading: 'Cierre en diciembre', tone: 'navy', items: ['La ganancia va a su declaración de 2026', 'En un intercambio 1031, los 180 días pasarían de abril: pregunte por una prórroga'] },
			{ heading: 'Cierre en enero', tone: 'gold', items: ['El impuesto se aplaza un año completo', 'Depende de sus ingresos de este año y del próximo'] },
		],
	},

	// ---- Fourplex
	fourplexTabla: {
		type: 'table',
		title: 'Un edificio pequeño frente a uno grande',
		headers: ['', 'De 2 a 4 unidades', 'De 5 unidades o más'],
		rows: [
			{ cells: ['Compradores típicos', 'Quienes vivirán en una unidad e inversionistas pequeños', 'Inversionistas'] },
			{ cells: ['Financiamiento', 'Muchas veces hipoteca residencial', 'Préstamo comercial'] },
			{ cells: ['Qué mira el prestamista', 'Ingresos y crédito del comprador', 'El ingreso operativo neto del edificio'] },
			{ cells: ['Cómo se fija el precio', 'Ventas cercanas, precio por unidad y por pie cuadrado, GRM', 'Sobre todo ingreso operativo neto y tasa de capitalización'] },
		],
	},

	// ---- SB 721
	sb721Pasos: {
		type: 'steps',
		title: 'Los plazos después de la inspección de la SB 721',
		steps: [
			{ label: 'Informe escrito', desc: 'Dentro de 45 días de terminar la inspección' },
			{ label: 'Permiso de reparación', desc: 'Solicítelo dentro de 120 días de recibir el informe' },
			{ label: 'Terminar el trabajo', desc: '120 días después de aprobado el permiso' },
			{ label: 'Si pasan 180 días', desc: 'El inspector avisa a usted y a la agencia local' },
			{ label: '30 días después', desc: 'Multa de $100 a $500 por día hasta terminar' },
		],
		note: 'Si el inspector dice que un elemento es una amenaza inmediata, actúe de inmediato: mantener a las personas fuera del balcón o de la escalera hasta terminar las reparaciones cuenta como cumplimiento.',
	},

	// ---- Off-market
	opcionesTabla: {
		type: 'table',
		title: 'Tres formas de vender',
		headers: ['', 'Fuera del mercado', 'Anuncio público', 'Mercadeo dirigido'],
		rows: [
			{ cells: ['Quién ve el edificio', 'Un grupo pequeño de compradores', 'Todo el grupo de compradores', 'Una lista selecta de compradores activos'] },
			{ cells: ['Privacidad', 'Alta', 'Baja', 'Alta'] },
			{ cells: ['Competencia entre compradores', 'Poca', 'Mucha', 'Alguna'] },
			{ cells: ['Cuándo conviene', 'Si la privacidad es lo más importante', 'Si quiere el precio más alto', 'Si quiere confidencialidad y algo de competencia'], highlight: true },
		],
	},

	// ---- Recibos de servicios
	fugaFormula: {
		type: 'formula',
		title: 'Cómo un gasto extra reduce el valor del edificio',
		parts: [
			{ value: '$8,000 al año', label: 'Gasto extra por una fuga sin detectar' },
			{ value: '7%', label: 'Tasa de capitalización' },
			{ value: '≈ $114,000', label: 'Valor perdido del edificio', accent: true },
		],
		ops: ['÷', '='],
		note: 'Con el mismo cálculo, $4,000 al año equivalen a unos $57,000.',
	},

	// ---- AB 628
	ab628Pasos: {
		type: 'steps',
		title: 'Antes de anunciar: revise sus aparatos',
		steps: [
			{ label: 'Recorra las unidades', desc: 'Anote cada estufa y cada refrigerador' },
			{ label: 'Anote de quién es', desc: 'Y su antigüedad' },
			{ label: 'Revise retiros del mercado', desc: 'Compare marca y modelo' },
			{ label: 'Reemplace lo descompuesto', desc: 'Antes de que lo descuente un comprador' },
			{ label: 'Documente los refrigeradores de inquilinos', desc: 'Con el lenguaje del contrato que exige la ley' },
		],
	},

	// ---- SB 1365
	sb1365Tabla: {
		type: 'table',
		title: 'Qué cambia la SB 1365',
		headers: ['', 'Antes', 'Con la SB 1365'],
		rows: [
			{ cells: ['Contratos cubiertos', 'Solo viviendas con un contrato inicial de un año o menos', 'Viviendas de renta con un contrato de cualquier duración'], highlight: true },
			{ cells: ['Las excepciones', 'Eximían ciertos aumentos', 'Son defensas afirmativas: usted tiene que probarlas'] },
			{ cells: ['Defensas', 'No eran defensas', 'Acuerdo del inquilino antes de la emergencia, o costos de reparaciones del año anterior'] },
			{ cells: ['Sanciones', 'Delito menor y práctica comercial ilegal', 'Sin cambios'] },
			{ cells: ['Vigencia', 'Ya vigente', '1 de enero de 2027'] },
		],
	},

	// ---- Aire acondicionado
	aireTabla: {
		type: 'table',
		title: 'Tres cosas que se mezclan, y ninguna es una orden de instalar aire acondicionado',
		headers: ['', 'SB 655 (estatal)', 'Condado de Los Ángeles', 'Ciudad de Los Ángeles'],
		rows: [
			{ cells: ['Qué es', 'Política estatal: las viviendas deben poder mantener una temperatura máxima segura', 'Ordenanza: máximo de 82°F en unidades de renta', 'Moción del Concejo para adoptar una norma de 82°F'] },
			{ cells: ['¿Obliga a un dueño?', 'No', 'Sí, donde aplica', 'Todavía no'] },
			{ cells: ['Dónde aplica', 'Orienta a las agencias estatales desde 2027', 'Áreas no incorporadas del condado', 'Dentro de la Ciudad, cuando se adopte'] },
			{ cells: ['Estado', 'Firmada en 2025', 'Aplicación desde el 1 de enero de 2027', 'Moción aprobada el 17 de febrero de 2026'], highlight: true },
		],
		note: 'Ninguna dice “instale aire acondicionado”: dicen que la unidad tiene que mantenerse lo bastante fresca.',
	},

	// ---- Sin corredor
	sinCorredorTabla: {
		type: 'table',
		title: 'Quién hace cada tarea en la venta de un edificio',
		headers: ['Tarea', 'Con un corredor', 'Si vende solo'],
		rows: [
			{ cells: ['Calcular el valor con ventas comparables', 'El corredor', 'Usted'] },
			{ cells: ['Memorando de oferta, fotos y video', 'El corredor', 'Usted o personas que contrate'] },
			{ cells: ['Llamar a inversionistas y a otros corredores', 'El corredor', 'Usted'] },
			{ cells: ['Comparar ofertas por lo que recibiría neto', 'El corredor, con usted', 'Usted'] },
			{ cells: ['Negociar el contrato', 'El corredor, con su abogado', 'Usted y su abogado'] },
			{ cells: ['Escrow y revisión del comprador', 'El corredor lo acompaña', 'Usted'] },
			{ cells: ['Coordinar un intercambio 1031', 'El corredor, con su intermediario', 'Usted'] },
		],
	},

	// ---- Cuánto cuesta vender
	costosPasos: {
		type: 'steps',
		title: 'Del precio de venta a lo que usted recibe',
		steps: [
			{ label: 'Precio de venta', badge: '+' },
			{ label: 'Pago de su préstamo', badge: '−' },
			{ label: 'Comisión del corredor', badge: '−' },
			{ label: 'Impuestos de transferencia', desc: 'Y la Medida ULA, si aplica', badge: '−' },
			{ label: 'Escrow, título y otros costos', badge: '−' },
			{ label: 'Lo que llega del escrow', badge: '=' },
			{ label: 'Aparte: impuestos sobre la renta', desc: 'Salen de su declaración, no del escrow', badge: '*' },
		],
		numbered: false,
	},

	// ---- Hijos o vender
	hijosTabla: {
		type: 'table',
		title: 'Heredarlo, regalarlo o venderlo: las diferencias de impuestos',
		headers: ['', 'Heredarlo', 'Regalarlo en vida', 'Venderlo usted'],
		rows: [
			{ cells: ['Base fiscal', 'Se actualiza al valor al fallecer', 'Generalmente la suya', 'Se usa para calcular su ganancia'], highlight: true },
			{ cells: ['Depreciación tomada', 'Generalmente no se transmite', 'Acompaña a sus hijos', 'Regresa como ganancia (hasta 25%)'] },
			{ cells: ['Impuesto a la propiedad', 'Se reevalúa a valor de mercado', 'Se reevalúa a valor de mercado', 'Se reevalúa para el comprador'] },
			{ cells: ['Proposición 19', 'No protege una propiedad de renta', 'No protege una propiedad de renta', 'No aplica'] },
			{ cells: ['Si se vende poco después', 'Poca o ninguna ganancia', 'Ganancia calculada con su base', 'Un 1031 puede diferir el impuesto'] },
		],
		note: 'Resumen general. Hable con un abogado de herencias y con un contador antes de decidir.',
	},

	// ---- Inquilinos si vendo
	inquilinosColumnas: {
		type: 'columns',
		title: 'Qué cambia y qué sigue igual cuando se vende un edificio ocupado',
		columns: [
			{
				heading: 'Lo que sigue igual',
				tone: 'navy',
				items: [
					'Los contratos de renta',
					'La renta de cada inquilino',
					'Las reglas de control de rentas (RSO o AB 1482)',
					'Los depósitos de seguridad, que pasan al comprador',
				],
			},
			{
				heading: 'Lo que cambia',
				tone: 'gold',
				items: [
					'A quién se le paga la renta',
					'Las visitas, las inspecciones y los estoppels durante la venta',
					'El dueño del edificio',
				],
			},
		],
	},
};
