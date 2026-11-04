// Spanish versions of selected Insights articles. Each one mirrors an English article in src/data/posts.ts
// (`enSlug`), so edit the two together whenever a fact changes. Text supports [link text](/path/) links, the
// same as the English posts. Links to pages that only exist in English say "(en inglés)" right after the link.
import { ES, BOV } from './esSlugs';
import { postsEsMore } from './postsEsMore';
import { postsEsMore2 } from './postsEsMore2';
import { postsEsMore3 } from './postsEsMore3';
import { postsEsMore4 } from './postsEsMore4';
import { postsEsMore5 } from './postsEsMore5';

export type PostEs = {
	slug: string;
	enSlug?: string; // the English article this one mirrors; left out for articles written in Spanish first
	title: string;
	seoTitle?: string; // shorter <title> tag (60 characters or fewer)
	description: string; // also the meta description, ~155 characters
	date: string; // ISO date
	image?: { src: string; alt: string; width: number; height: number }; // Spanish graphic, shown under the date and used for social sharing
	sections: { heading: string; paragraphs: string[]; visual?: string }[]; // `visual` is an id from src/data/esVisuals.ts, drawn after the section text
	faqs: { q: string; a: string }[];
	related: string[]; // Spanish slugs
};

const postsEsCore: PostEs[] = [
	{
		slug: ES.paso,
		enSlug: 'how-to-sell-an-apartment-building-in-los-angeles-step-by-step',
		title: 'Cómo vender un edificio de apartamentos en Los Ángeles: el proceso paso a paso',
		seoTitle: 'Cómo Vender un Edificio de Apartamentos en Los Ángeles',
		description: 'Los pasos para vender un edificio de apartamentos en Los Ángeles, del precio y los documentos a las ofertas, el escrow y el cierre, con los tiempos típicos.',
		date: '2026-11-03',
		image: { src: '/images/insights/es/como-vender-paso-a-paso.webp', alt: 'Gráfica: ocho pasos para vender un edificio, de la decisión al cierre. Prepárese con sus metas, el valor, el corredor y los documentos. Promueva el edificio y revise las ofertas. Cierre con el escrow (el proceso en que un tercero neutral guarda el dinero y los documentos hasta cerrar la venta) y la revisión del comprador.', width: 1200, height: 900 },
		related: [ES.impuestos, ES.inquilinos, ES.ula],
		sections: [
			{
				heading: '¿Cuánto tiempo toma?',
				visual: 'pasos8',
				paragraphs: [
					'Una venta típica de un edificio de apartamentos en Los Ángeles toma de 60 a 90 días desde que se anuncia hasta el cierre: unas semanas de mercadeo y luego de 30 a 45 días de escrow (el período en que un tercero neutral maneja el dinero y los documentos hasta cerrar la venta). La preparación antes de anunciar el edificio se suma a ese tiempo, y vale la pena. Cada venta es diferente, pero los pasos siguientes son los mismos en casi todas.',
				],
			},
			{
				heading: 'Paso 1: Decida qué quiere de la venta',
				paragraphs: [
					`Empiece por su meta: el precio más alto, una fecha de cierre específica, un intercambio 1031 sin problemas, una venta discreta o una salida limpia. Su meta determina el precio, el mercadeo y el calendario. Si todavía está decidiendo si vender o no, nuestro artículo con [siete preguntas para hacerse primero](/es/insights/${ES.vender}/) es un buen punto de partida.`,
				],
			},
			{
				heading: 'Paso 2: Averigüe cuánto vale el edificio',
				paragraphs: [
					`Consiga un número realista antes de comprometerse con nada. Empiece con nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés) para obtener un rango rápido, y luego pida una opinión de valor (Broker Opinion of Value), que toma en cuenta sus rentas reales, el estado del edificio y las ventas comparables. Explicamos en qué se diferencia de un avalúo formal en nuestro artículo sobre la [opinión de valor frente al avalúo](/es/insights/${ES.bov}/). Un precio acorde al mercado atrae más ofertas, y mejores, que uno demasiado alto que después hay que bajar.`,
				],
			},
			{
				heading: 'Paso 3: Elija un corredor y firme el contrato de listado',
				paragraphs: [
					`El corredor que contrate dirige todo el proceso, así que elíjalo con cuidado. Nuestra guía sobre [cómo elegir un corredor de edificios multifamiliares](/es/insights/${ES.corredor}/) explica qué revisar. El contrato de listado establece cuánto tiempo dura, la comisión y qué pasa si el edificio se vende a un comprador que usted ya conocía. Léalo con calma y negocie los términos antes de firmar.`,
				],
			},
			{
				heading: 'Paso 4: Reúna sus documentos',
				paragraphs: [
					'Los compradores piden lo mismo desde el primer día, y tenerlo listo mantiene el impulso. Normalmente son una lista de rentas actualizada (rent roll), los contratos de renta, y los ingresos y gastos de los últimos dos o tres años, junto con sus recibos de servicios (agua, luz y gas), la factura de impuestos a la propiedad, el seguro, los permisos, los informes de inspección y el registro de las reparaciones grandes. En Los Ángeles, tenga también listos su registro de la Ordenanza de Estabilización de Rentas (RSO) y los comprobantes de pago de sus cuotas.',
					`Los números exactos importan más que los números bonitos, porque los compradores lo verifican todo contra sus registros y los contratos. Los recibos de servicios merecen atención especial, como explicamos en nuestro artículo sobre [por qué los dueños cuidadosos los revisan cada mes](/es/insights/${ES.servicios}/).`,
				],
			},
			{
				heading: 'Paso 5: Promueva el edificio',
				paragraphs: [
					'Su corredor prepara un memorando de oferta (offering memorandum) que presenta los ingresos del edificio, los gastos, la lista de rentas, la mezcla de unidades, las fotos y las razones para comprarlo, y luego lo pone frente a los compradores. Un buen mercadeo significa llamar directamente a inversionistas y a otros corredores, no solo publicar un anuncio y esperar. También incluye fotos profesionales, muchas veces un video de la propiedad, y respuestas claras a las preguntas que los compradores siempre hacen.',
				],
			},
			{
				heading: 'Paso 6: Revise las ofertas y negocie',
				paragraphs: [
					'Las ofertas suelen llegar a lo largo de unas semanas. El precio importa, pero también el financiamiento del comprador, la duración del período de revisión (due diligence), el tamaño del depósito y qué tan probable es que el comprador cierre. La oferta más alta no siempre es la mejor. Su corredor debe ayudarle a comparar las ofertas por lo que usted recibiría neto y por qué tan seguras son, y a negociar los términos del contrato de compraventa antes de que usted acepte.',
				],
			},
			{
				heading: 'Paso 7: Abra el escrow y pase por el período de revisión',
				paragraphs: [
					'Después de aceptar una oferta, se abre el escrow y el comprador empieza su período de revisión (due diligence): revisa los contratos de renta, las finanzas y el estado físico del edificio, muchas veces con inspecciones y con estoppels de los inquilinos (confirmaciones por escrito de los términos de cada renta). En esta etapa es cuando más se piden rebajas de precio, y por eso los documentos exactos del Paso 4 rinden frutos. El prestamista del comprador normalmente pedirá un avalúo durante este período, otra razón para fijar el precio con base en ventas comparables reales.',
				],
			},
			{
				heading: 'Paso 8: El cierre',
				paragraphs: [
					`En las últimas semanas, el comprador elimina sus condiciones y paga la compra, y el escrow registra la escritura y le envía su dinero neto. Planee los costos de la venta, que incluyen la comisión del corredor, los impuestos de transferencia y, para edificios dentro de la Ciudad de Los Ángeles con un precio superior a $5.4 millones, la [Medida ULA](/es/insights/${ES.ula}/). Si va a hacer un intercambio 1031, recuerde el reloj: tiene [45 días para identificar y 180 días para cerrar](/es/intercambios-1031/) la propiedad de reemplazo, así que tenga ese plan listo antes de anunciar el edificio. El calendario también puede afectar sus impuestos, como explicamos en nuestro artículo sobre [vender antes de fin de año](/es/insights/${ES.findeano}/).`,
				],
			},
			{
				heading: 'Dónde se complican las ventas',
				paragraphs: [
					'Tres problemas se repiten una y otra vez: fijar un precio demasiado alto al principio, números de rentas o gastos que no resisten la revisión del comprador, y un comprador cuyo financiamiento se cae. Los tres son más fáciles de prevenir que de arreglar, y por eso los primeros pasos son los más importantes.',
				],
			},
			{
				heading: '¿Listo para empezar?',
				paragraphs: [
					`Guiamos a dueños de edificios de apartamentos en Los Ángeles en cada uno de estos pasos, y Troy Lucero se los explica en español. Para saber dónde está su edificio, pida una [opinión de valor](${BOV}) gratis o empiece con la [calculadora](/property-value/) (en inglés). Este artículo es información general, no asesoría legal ni de impuestos. Hable con su abogado y su contador sobre su situación.`,
				],
			},
		],
		faqs: [
			{
				q: '¿Cuánto tarda en venderse un edificio de apartamentos en Los Ángeles?',
				a: 'Una venta típica toma de 60 a 90 días desde que se anuncia hasta el cierre: unas semanas de mercadeo y luego de 30 a 45 días de escrow. La preparación antes de anunciar el edificio se suma a ese tiempo. Cada venta es diferente, pero los pasos son los mismos en casi todas.',
			},
			{
				q: '¿Cuáles son los pasos para vender un edificio de apartamentos, de principio a fin?',
				a: 'Son ocho: decidir qué quiere de la venta, averiguar cuánto vale el edificio, elegir un corredor y firmar el contrato de listado, reunir los documentos, promover el edificio, revisar las ofertas y negociar, abrir el escrow y pasar por el período de revisión, y cerrar.',
			},
			{
				q: '¿Qué documentos necesito para vender mi edificio de apartamentos?',
				a: 'Normalmente una lista de rentas actualizada, los contratos de renta, y los ingresos y gastos de los últimos dos o tres años, junto con sus recibos de servicios, la factura de impuestos a la propiedad, el seguro, los permisos, los informes de inspección y el registro de las reparaciones grandes. En Los Ángeles, tenga también listos su registro de la Ordenanza de Estabilización de Rentas (RSO) y los comprobantes de pago de sus cuotas.',
			},
			{
				q: '¿Debo aceptar siempre la oferta más alta por mi edificio?',
				a: 'No. El precio importa, pero también el financiamiento del comprador, la duración del período de revisión, el tamaño del depósito y qué tan probable es que el comprador cierre. Su corredor debe ayudarle a comparar las ofertas por lo que usted recibiría neto y por qué tan seguras son.',
			},
			{
				q: '¿Qué cuotas e impuestos salen del dinero cuando vendo mi edificio de apartamentos?',
				a: 'Planee la comisión del corredor, los impuestos de transferencia y, para edificios dentro de la Ciudad de Los Ángeles con un precio superior a $5.4 millones, la Medida ULA. Si va a hacer un intercambio 1031, tiene 45 días para identificar y 180 días para cerrar la propiedad de reemplazo.',
			},
			{
				q: '¿Qué puede salir mal al vender un edificio de apartamentos?',
				a: 'Tres problemas se repiten una y otra vez: fijar un precio demasiado alto al principio, números de rentas o gastos que no resisten la revisión del comprador, y un comprador cuyo financiamiento se cae. Los tres son más fáciles de prevenir que de arreglar, y por eso los primeros pasos son los más importantes.',
			},
		],
	},
	{
		slug: ES.inquilinos,
		enSlug: 'selling-la-apartment-building-with-tenants-rent-control',
		title: 'Vender un edificio de apartamentos en Los Ángeles con inquilinos bajo control de rentas',
		seoTitle: 'Vender un Edificio con Control de Rentas en Los Ángeles',
		description: 'Cómo el control de rentas y los inquilinos de muchos años afectan el precio, los compradores y el calendario al vender un edificio en Los Ángeles.',
		date: '2026-11-03',
		image: { src: '/images/insights/es/vender-con-inquilinos.webp', alt: 'Gráfica: sí se puede vender un edificio con inquilinos bajo control de rentas. Los contratos pasan al nuevo dueño, el control de rentas sigue vigente y los compradores valoran la brecha entre la renta actual y la de mercado.', width: 1200, height: 900 },
		related: [ES.paso, ES.impuestos, ES.ula],
		sections: [
			{
				heading: '¿Se puede vender un edificio con inquilinos adentro?',
				paragraphs: [
					'Sí. La mayoría de los edificios de apartamentos en Los Ángeles se venden con los inquilinos en su lugar, y muchos compradores buscan específicamente edificios ocupados con ingresos estables. Una venta no termina por sí sola el contrato de ningún inquilino. Los contratos de renta y las reglas de renta que aplican al edificio se quedan con el edificio, así que el nuevo dueño ocupa la posición del dueño actual.',
					'Por eso el control de rentas importa tanto para el valor. El comprador no está pagando por lo que el edificio podría ganar con las rentas de mercado de hoy. Está pagando por lo que gana bajo las reglas que aplican a sus inquilinos.',
				],
			},
			{
				heading: 'Qué reglas de renta aplican a su edificio',
				paragraphs: [
					`En Los Ángeles, los edificios de apartamentos con certificado de ocupación emitido antes del 1 de octubre de 1978 generalmente están cubiertos por la Ordenanza de Estabilización de Rentas (RSO) de la Ciudad, que limita los aumentos anuales y agrega protecciones contra el desalojo. Los edificios más nuevos normalmente caen bajo el límite estatal de la AB 1482. Nuestro artículo sobre el [límite de rentas de la AB 1482 en 2026](/es/insights/${ES.ab1482}/) explica las cifras actuales.`,
					'Las reglas que aplican a su propiedad afectan sus ingresos, sus gastos y la forma en que los compradores calculan la operación, así que es lo primero que confirmamos.',
				],
			},
			{
				heading: 'Cómo afectan al precio las rentas por debajo del mercado',
				paragraphs: [
					'Los inquilinos de muchos años en unidades con control de rentas muchas veces pagan bastante menos de lo que rentaría hoy una unidad vacía. Los compradores llaman a esa diferencia loss to lease (la brecha entre la renta actual y la renta de mercado), y la valoran con cuidado. Normalmente fijan el precio del edificio según las rentas actuales y luego suman algo de valor por el potencial que podrán aprovechar cuando las unidades se vayan desocupando de forma natural. Un edificio con todos los inquilinos de muchos años se vende diferente a uno con varias unidades vacías.',
					'Dos ejemplos de nuestro propio trabajo muestran cómo funciona. En 453 S Gramercy Pl, la mayoría de los inquilinos eran residentes de muchos años que pagaban bastante menos que el mercado, y encontramos a un comprador fuera del mercado abierto (off-market) con experiencia en ese tipo de propiedad, como describimos en nuestro [caso de estudio](/case-studies/453-s-gramercy-pl-koreatown-apartments/) (en inglés). En 1513 Arlington Ave, las unidades vacías dieron a los compradores una forma clara de ver la oportunidad, lo que cubrimos en ese [caso de estudio](/case-studies/1513-arlington-ave-arlington-heights-apartments/) (en inglés).',
				],
			},
			{
				heading: 'Unidades vacías',
				paragraphs: [
					'Bajo la ley de California, una unidad que queda vacía generalmente puede volver a rentarse a la renta de mercado, y por eso las unidades entregadas vacías son atractivas para los compradores. Si usted tiene unidades vacías, muchas veces vale la pena destacarlas. Cualquier acuerdo para que un inquilino se mude voluntariamente tiene que seguir las reglas del estado y de la Ciudad, así que hable con un abogado especializado en leyes de propietarios e inquilinos antes de ofrecer o firmar uno.',
				],
			},
			{
				heading: 'Cómo prepararse para vender con inquilinos en el lugar',
				visual: 'checklistInquilinos',
				paragraphs: [
					'Unos cuantos pasos hacen el proceso más fácil y protegen su precio.',
					'Prepare una lista de rentas exacta. Los compradores revisarán cada renta, cada fecha de inicio de contrato y cada unidad contra sus registros y los contratos, y los errores le restan credibilidad.',
					'Reúna los expedientes de los contratos. Tenga listo el contrato de cada inquilino, cualquier anexo y los avisos, junto con un registro claro de los depósitos de seguridad, ya que los depósitos pasan al comprador.',
					'Confirme que cumple con la Ciudad. Asegúrese de que su registro de la RSO y sus cuotas estén al día, porque el abogado del comprador lo preguntará.',
					'Espere solicitudes de estoppel. Los compradores muchas veces piden a los inquilinos que confirmen por escrito los términos de su renta durante el escrow (el proceso en que un tercero neutral guarda el dinero y los documentos hasta cerrar la venta), y los expedientes en orden hacen que esto sea rápido.',
					'Mantenga sus prácticas de renta normales. Siga cumpliendo las reglas habituales para las reparaciones y para dar a los inquilinos un aviso por escrito adecuado antes de entrar a una unidad, incluso para las visitas de los compradores.',
				],
			},
			{
				heading: 'Cómo hablar con sus inquilinos',
				paragraphs: [
					'Informe a los inquilinos de la venta con honestidad y no prometa nada en nombre del comprador. La mayoría de los inquilinos solo quieren saber que su contrato y su renta seguirán igual, y en la venta de un edificio ocupado, por lo general así es. Las visitas, las inspecciones y los estoppels requieren cierto acceso a las unidades, así que planéelos con el aviso correspondiente.',
				],
			},
			{
				heading: 'La Medida ULA y otros costos de vender',
				paragraphs: [
					`Las reglas de renta son solo una parte del panorama. Para edificios con un precio cercano a $5.4 millones o $10.9 millones dentro de la Ciudad de Los Ángeles, el impuesto de transferencia de la Medida ULA puede cambiar lo que usted recibe neto, como explicamos en nuestra [guía de la Medida ULA](/es/insights/${ES.ula}/). Y si todavía está decidiendo si vender, empiece con nuestra lista de [siete preguntas para hacerse primero](/es/insights/${ES.vender}/).`,
				],
			},
			{
				heading: 'Cómo elegir un corredor para vender un edificio con control de rentas',
				paragraphs: [
					'Un edificio con control de rentas se valora según sus rentas actuales, su loss to lease y sus inquilinos, así que el corredor que contrate necesita experiencia real con esos detalles. Pregunte si ha vendido recientemente edificios similares con rentas estabilizadas en su vecindario, cómo presentaría su lista de rentas y el potencial a los compradores, y a qué compradores acudiría, ya que algunos inversionistas se especializan en edificios con inquilinos de muchos años y rentas por debajo del mercado.',
					`Nuestra guía sobre [cómo elegir un corredor multifamiliar](/es/insights/${ES.corredor}/) enumera siete cosas que revisar antes de firmar, y nuestra [guía paso a paso para vender](/es/insights/${ES.paso}/) muestra cómo corre el proceso, del precio al cierre.`,
				],
			},
			{
				heading: 'Empiece con un número',
				paragraphs: [
					`Cada año ayudamos a dueños a vender edificios ocupados y con control de rentas en todo Los Ángeles. Empiece con nuestra [calculadora gratuita de valor](/property-value/) (en inglés) y luego pida una [opinión de valor](${BOV}) gratis, y le explicaremos cómo su lista de rentas, sus inquilinos y su calendario afectan su precio.`,
					'Este artículo es información general, no asesoría legal. Las leyes de control de rentas y de inquilinos son detalladas y cambian, así que confirme con un abogado especializado en leyes de propietarios e inquilinos cómo aplican a su edificio.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: ['[Departamento de Vivienda de Los Ángeles: Dueños de propiedades de renta](https://housing.lacity.gov/rental-property-owners) (en inglés)'],
			},
		],
		faqs: [
			{
				q: '¿Puedo vender mi edificio de apartamentos con inquilinos viviendo adentro?',
				a: 'Sí. La mayoría de los edificios de apartamentos en Los Ángeles se venden con los inquilinos en su lugar, y muchos compradores buscan edificios ocupados con ingresos estables. Una venta no termina por sí sola el contrato de ningún inquilino. Los contratos de renta y las reglas de renta que aplican al edificio se quedan con el edificio, así que el nuevo dueño ocupa la posición del dueño actual.',
			},
			{
				q: '¿Cómo sé si mi edificio tiene control de rentas en Los Ángeles?',
				a: `Los edificios de apartamentos en Los Ángeles con certificado de ocupación emitido antes del 1 de octubre de 1978 generalmente están cubiertos por la Ordenanza de Estabilización de Rentas (RSO) de la Ciudad, que limita los aumentos anuales y agrega protecciones contra el desalojo. Los edificios más nuevos normalmente caen bajo el límite estatal de la AB 1482. Vea nuestro artículo sobre el [límite de rentas de la AB 1482 en 2026](/es/insights/${ES.ab1482}/).`,
			},
			{
				q: 'Mis inquilinos pagan poca renta. ¿Cómo afecta eso el precio por el que puedo vender mi edificio?',
				a: 'Los compradores llaman a la diferencia entre las rentas actuales y las de mercado loss to lease, y la valoran con cuidado. Normalmente fijan el precio del edificio según las rentas actuales y luego suman algo de valor por el potencial que podrán aprovechar cuando las unidades se vayan desocupando de forma natural. Un edificio con todos los inquilinos de muchos años se vende diferente a uno con varias unidades vacías.',
			},
			{
				q: '¿Puedo subir la renta al precio de mercado cuando un inquilino se muda de una unidad con control de rentas?',
				a: 'Bajo la ley de California, una unidad que queda vacía generalmente puede volver a rentarse a la renta de mercado, y por eso las unidades entregadas vacías son atractivas para los compradores. Cualquier acuerdo para que un inquilino se mude voluntariamente tiene que seguir las reglas del estado y de la Ciudad, así que hable con un abogado especializado en leyes de propietarios e inquilinos antes de ofrecer o firmar uno.',
			},
			{
				q: '¿Qué necesito tener listo antes de vender un edificio con inquilinos?',
				a: 'Prepare una lista de rentas exacta, reúna el contrato de cada inquilino y un registro claro de los depósitos de seguridad (que pasan al comprador), confirme que su registro de la RSO y sus cuotas estén al día, y espere que los compradores pidan estoppels, en los que los inquilinos confirman por escrito los términos de su renta durante el escrow.',
			},
			{
				q: '¿Qué debo decirles a mis inquilinos cuando voy a vender el edificio?',
				a: 'Dígales la verdad y no prometa nada en nombre del comprador. La mayoría de los inquilinos solo quieren saber que su contrato y su renta seguirán igual, y en la venta de un edificio ocupado, por lo general así es. Las visitas, las inspecciones y los estoppels requieren cierto acceso a las unidades, así que planéelos con el aviso por escrito correspondiente.',
			},
		],
	},
	{
		slug: ES.impuestos,
		enSlug: 'capital-gains-depreciation-recapture-selling-la-apartment-building',
		title: 'Ganancias de capital y recuperación de la depreciación al vender un edificio de apartamentos en Los Ángeles',
		seoTitle: 'Ganancias de Capital al Vender un Edificio en Los Ángeles',
		description: 'Cómo funcionan los impuestos federales y de California sobre ganancias de capital y recuperación de la depreciación, y cómo un intercambio 1031 los difiere.',
		date: '2026-11-03',
		image: { src: '/images/insights/es/ganancias-de-capital.webp', alt: 'Gráfica: el impuesto federal sobre las ganancias de capital es de 0%, 15% o 20%, la recuperación de la depreciación se grava hasta con 25%, y California grava la ganancia como ingreso ordinario.', width: 1200, height: 900 },
		related: [ES.ula, ES.paso, ES.inquilinos],
		sections: [
			{
				heading: 'Por qué la factura de impuestos sorprende a muchos dueños',
				paragraphs: [
					'Para muchos dueños de apartamentos, el mayor costo de vender no es la comisión. Es el impuesto. Los dueños que compraron hace años, y que han deducido la depreciación cada año desde entonces, muchas veces se sorprenden de cuánto del precio de venta está sujeto a impuestos. Entender las piezas antes de anunciar el edificio le permite planear con anticipación, en lugar de descubrirlas en el cierre.',
				],
			},
			{
				heading: 'Cómo se calcula su ganancia',
				paragraphs: [
					'Su ganancia sujeta a impuestos generalmente es la cantidad que usted obtiene de la venta, después de los costos de venta, menos su base ajustada (adjusted basis). Su base ajustada empieza con lo que pagó por la propiedad, suma el costo de las mejoras de capital y resta la depreciación que usted dedujo o que tenía derecho a deducir. Como la depreciación reduce su base cada año, un edificio que se ha depreciado por décadas puede tener una base muy inferior a lo que usted pagó.',
				],
			},
			{
				heading: 'Impuesto federal sobre las ganancias de capital',
				paragraphs: [
					'Si usted fue dueño de la propiedad por más de un año, la ganancia generalmente es una ganancia de capital a largo plazo, con un impuesto federal de 0%, 15% o 20% según su ingreso sujeto a impuestos. Según el IRS, la tasa de 20% aplica cuando el ingreso supera el umbral de la tasa de 15%, y esos umbrales se ajustan cada año. Los vendedores con una ganancia grande muchas veces caen en el tramo de 15% o 20%, porque la ganancia misma cuenta como parte del ingreso sujeto a impuestos.',
					'Los vendedores de ingresos altos también pueden deber el impuesto de 3.8% sobre los ingresos netos de inversión, que aplica a las ganancias netas de la venta de bienes raíces cuando el ingreso supera ciertos niveles, por ejemplo $200,000 para una persona soltera y $250,000 para un matrimonio que presenta su declaración en conjunto.',
				],
			},
			{
				heading: 'Recuperación de la depreciación (depreciation recapture)',
				visual: 'recuperacion',
				paragraphs: [
					'La propiedad residencial de renta generalmente se deprecia a lo largo de 27.5 años, lo que le da al dueño una deducción cada año que la conserva. Cuando vende, la parte de su ganancia que proviene de esa depreciación no se grava con las tasas normales de ganancias de capital. El IRS la trata como ganancia no recuperada de la sección 1250 (unrecaptured section 1250 gain), con una tasa federal máxima de 25%. El IRS generalmente la calcula con la depreciación que usted tenía derecho a deducir, la haya reclamado o no, así que un dueño no puede evitarla dejando de tomar las deducciones.',
					'En palabras sencillas: las deducciones por depreciación redujeron sus impuestos mientras fue dueño del edificio, y cuando vende, el IRS recupera parte de ese beneficio. La cantidad de depreciación que usted dedujo se convierte en la primera porción de su ganancia y se grava hasta con 25%; cualquier aumento de precio más allá de eso se grava con las tasas normales de ganancias de capital.',
				],
			},
			{
				heading: 'California también grava la ganancia',
				paragraphs: [
					'California no tiene una tasa más baja para las ganancias de capital. Según la Junta de Impuestos sobre Franquicias (Franchise Tax Board), todas las ganancias de capital se gravan como ingreso ordinario. Para un vendedor con una ganancia grande, eso significa que el impuesto estatal puede ser considerable, además del impuesto federal.',
				],
			},
			{
				heading: 'Formas en que los dueños manejan el impuesto',
				visual: 'formasImpuesto',
				paragraphs: [
					'Hay maneras legítimas de reducir, diferir o programar el impuesto, y la correcta depende de su situación. Algunas de las más comunes son las siguientes.',
					`Un intercambio 1031. Si reinvierte el dinero en una propiedad de inversión del mismo tipo (like-kind), puede diferir tanto el impuesto sobre las ganancias de capital como la recuperación de la depreciación. Las reglas son estrictas, e incluyen 45 días para identificar una propiedad de reemplazo y 180 días para cerrar. Lea nuestra [guía de intercambios 1031](/es/intercambios-1031/) y nuestro artículo sobre [intercambiar hacia propiedades triple net](/es/insights/${ES.intercambio}/).`,
					`El momento de la venta. Cerrar en diciembre o enero pone la ganancia en un año fiscal distinto, lo que puede importar para su ingreso total. Vea nuestro artículo sobre [el momento de la venta antes de fin de año](/es/insights/${ES.findeano}/).`,
					'Planeación patrimonial. La propiedad heredada al fallecer generalmente recibe una nueva base ajustada al valor de ese momento (stepped-up basis), lo que puede eliminar gran parte de la ganancia para los herederos. Si usted está manejando un edificio después del fallecimiento de un dueño, vea nuestra página de [ventas de fideicomisos y herencias](/es/ventas-de-fideicomisos-y-herencias/).',
					'Registros. Conserve la documentación de las mejoras de capital que ha hecho a lo largo de los años, porque se suman a su base y reducen su ganancia.',
				],
			},
			{
				heading: 'No olvide los demás costos de vender',
				paragraphs: [
					`El impuesto sobre la renta es solo una parte de lo que sale de una venta. Si su edificio tiene un precio cercano a $5.4 millones o $10.9 millones dentro de la Ciudad de Los Ángeles, el impuesto de transferencia de la Medida ULA puede importar igual de mucho, como explicamos en nuestra [guía de la Medida ULA](/es/insights/${ES.ula}/). Y si todavía está decidiendo si vender tiene sentido, nuestras [siete preguntas para hacerse primero](/es/insights/${ES.vender}/) son un buen punto de partida.`,
				],
			},
			{
				heading: 'Planee antes de anunciar',
				paragraphs: [
					`El mejor momento para hablar de impuestos es antes de anunciar el edificio, no después de firmar un contrato. Involucre a su contador desde temprano, y nosotros le ayudaremos con la parte de bienes raíces: por cuánto es probable que se venda su edificio, cuánto pagará un comprador y cómo el calendario y la estructura afectan sus opciones. Empiece con nuestra [calculadora gratuita de valor](/property-value/) (en inglés) o pida una [opinión de valor](${BOV}) gratis.`,
					'Este artículo es información general, no asesoría legal ni de impuestos. Las reglas de impuestos y los umbrales de ingreso cambian, así que confirme todo con su contador o abogado de impuestos.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[IRS, Tema No. 409: Ganancias y pérdidas de capital](https://www.irs.gov/taxtopics/tc409) (en inglés)',
					'[IRS, Tema No. 559: Impuesto sobre los ingresos netos de inversión](https://www.irs.gov/taxtopics/tc559) (en inglés)',
					'[IRS, Publicación 527: Propiedad residencial de renta](https://www.irs.gov/publications/p527) (en inglés)',
					'[IRS, Publicación 544: Ventas y otras disposiciones de activos](https://www.irs.gov/publications/p544) (en inglés)',
					'[Junta de Impuestos sobre Franquicias de California: Ganancias y pérdidas de capital](https://www.ftb.ca.gov/file/personal/income-types/capital-gains-and-losses.html) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Cuánto impuesto pagaré si vendo mi propiedad de renta en California?',
				a: 'Si fue dueño de la propiedad por más de un año, la ganancia generalmente es una ganancia de capital a largo plazo, con un impuesto federal de 0%, 15% o 20% según su ingreso sujeto a impuestos. La recuperación de la depreciación se grava hasta con 25%, los vendedores de ingresos altos pueden deber el impuesto de 3.8% sobre los ingresos netos de inversión, y California grava la ganancia como ingreso ordinario.',
			},
			{
				q: '¿Qué es la recuperación de la depreciación y por qué me cobran impuestos por ella cuando vendo?',
				a: 'La propiedad residencial de renta generalmente se deprecia a lo largo de 27.5 años. Cuando vende, la parte de su ganancia que proviene de esa depreciación es tratada por el IRS como ganancia no recuperada de la sección 1250, con una tasa federal máxima de 25%. El IRS generalmente la calcula con la depreciación que usted tenía derecho a deducir, la haya reclamado o no.',
			},
			{
				q: '¿Cómo calculo mi ganancia sujeta a impuestos cuando vendo mi propiedad de renta?',
				a: 'Su ganancia sujeta a impuestos generalmente es la cantidad que usted obtiene de la venta, después de los costos de venta, menos su base ajustada. Su base ajustada empieza con lo que pagó por la propiedad, suma el costo de las mejoras de capital y resta la depreciación que usted dedujo o que tenía derecho a deducir.',
			},
			{
				q: '¿California tiene una tasa más baja de impuestos sobre las ganancias de capital de bienes raíces?',
				a: 'No. Según la Junta de Impuestos sobre Franquicias de California, todas las ganancias de capital se gravan como ingreso ordinario, así que para un vendedor con una ganancia grande el impuesto estatal puede ser considerable, además del impuesto federal.',
			},
			{
				q: '¿Cómo puedo diferir el impuesto sobre las ganancias de capital al vender mi propiedad de renta? ¿Sirve un intercambio 1031?',
				a: 'Sí. Si reinvierte el dinero en una propiedad de inversión del mismo tipo, puede diferir tanto el impuesto sobre las ganancias de capital como la recuperación de la depreciación. Las reglas son estrictas, e incluyen 45 días para identificar una propiedad de reemplazo y 180 días para cerrar. Vea nuestra [guía de intercambios 1031](/es/intercambios-1031/).',
			},
			{
				q: '¿Debo impuestos sobre las ganancias de capital si heredo un edificio de apartamentos y lo vendo?',
				a: 'La propiedad heredada al fallecer generalmente recibe una nueva base ajustada al valor de ese momento (stepped-up basis), lo que puede eliminar gran parte de la ganancia para los herederos. Si usted está manejando un edificio después del fallecimiento de un dueño, vea nuestra página de [ventas de fideicomisos y herencias](/es/ventas-de-fideicomisos-y-herencias/) y confirme los detalles con su contador o abogado de impuestos.',
			},
		],
	},
	{
		slug: ES.ula,
		enSlug: 'measure-ula-2026-thresholds-selling-la-apartment-building',
		title: '¿Vende cerca de un umbral de la Medida ULA? Por qué importan el precio y el momento',
		seoTitle: 'Medida ULA 2026: Umbrales y lo que Pagan los Vendedores',
		description: 'Los umbrales de la Medida ULA subieron a $5.4M y $10.9M. Vea cómo un precio apenas arriba de la línea reduce lo que usted recibe, y qué puede hacer.',
		date: '2026-11-03',
		image: { src: '/images/insights/es/medida-ula-umbrales.webp', alt: 'Gráfica: un edificio que se vende en $5,400,000 no paga el impuesto de la Medida ULA, pero a $5,400,001 se aplica el 4% a todo el precio, unos $216,000.', width: 1200, height: 900 },
		related: [ES.impuestos, ES.paso, ES.inquilinos],
		sections: [
			{
				heading: 'Qué cambió el 1 de julio de 2026',
				paragraphs: [
					'La Medida ULA es el impuesto de transferencia de la Ciudad de Los Ángeles, conocido como el “impuesto a las mansiones”, sobre las ventas de propiedades por encima de cierto precio. Sus umbrales de precio se ajustan por inflación cada año, y el ajuste más reciente aplica a las ventas que cierren después del 30 de junio de 2026. Los umbrales ahora son $5.4 millones y $10.9 millones, frente a $5.3 millones y $10.6 millones un año antes.',
					'Las ventas por encima de $5.4 millones pero por debajo de $10.9 millones pagan un impuesto ULA de 4%. Las ventas de $10.9 millones o más pagan 5.5%. El impuesto aplica solo a propiedades dentro de la Ciudad de Los Ángeles, y se suma al impuesto de transferencia regular de la Ciudad, de 0.45%.',
				],
			},
			{
				heading: 'Por qué un precio apenas arriba de la línea cuesta tanto',
				visual: 'ulaTabla',
				paragraphs: [
					'El detalle clave es que el impuesto no es marginal. El impuesto ULA se aplica a todo el precio de venta, no solo a la parte que pasa del umbral. Un edificio que se vende en $5,400,000 no debe impuesto ULA. Un edificio que se vende en $5,400,001 debe 4% del precio completo, unos $216,000.',
				],
			},
			{
				heading: 'La zona muerta arriba de cada umbral',
				paragraphs: [
					'Eso crea un tramo de precios donde un número más alto deja menos dinero en su bolsillo. Con $5.5 millones, el vendedor se queda con $120,000 menos después de ULA que con $5.4 millones, y hace falta un precio de aproximadamente $5.625 millones para recibir lo mismo. El patrón se repite en el umbral superior: una venta en $10.9 millones deja unos $67,500 menos que una venta en $10.8 millones, y el precio tiene que llegar a unos $10.97 millones para igualarla.',
					'Las cifras anteriores son antes de comisiones, del impuesto de transferencia regular y de otros costos de cierre, así que sus números reales serán distintos, pero la forma del problema es la misma. Tenga en cuenta también que el impuesto se calcula sobre el valor bruto de la venta, incluido cualquier préstamo que el comprador asuma, así que asumir deuda no reduce la cantidad sujeta al impuesto.',
				],
			},
			{
				heading: 'Qué pueden hacer los vendedores cerca de un umbral',
				paragraphs: [
					'Si el precio de su edificio está cerca de cualquiera de los dos números, vale la pena considerar varias cosas antes de anunciarlo.',
					'Fije el precio teniendo en cuenta el umbral. A veces un ajuste modesto del precio le deja más dinero que un precio más alto que cruza la línea. Calculamos lo que usted recibiría neto con varios precios antes de anunciar el edificio, no después de estar en contrato.',
					'Observe el calendario. Los umbrales se ajustan cada año por inflación, así que un edificio con un precio apenas arriba de una línea hoy podría quedar por debajo después del siguiente ajuste. Si está cerca, pregúntenos cómo interactúa su fecha de cierre con el ajuste.',
					'No cuente con un intercambio 1031 para reducir el impuesto. Un intercambio 1031 puede diferir su impuesto sobre las ganancias de capital, pero no exime una venta de la Medida ULA, y los intercambios no están entre las exenciones que enumera la Ciudad. El impuesto se calcula sobre la venta de su edificio de cualquier manera. Un intercambio sigue siendo una herramienta poderosa para la ganancia, y puede leer más en nuestra guía de [intercambios 1031](/es/intercambios-1031/), pero resuelve un problema distinto.',
					'Sepa quién es el comprador. En casos limitados, el comprador importa. Las ventas a ciertas organizaciones sin fines de lucro de vivienda asequible que califiquen, y a agencias de gobierno, están exentas de ULA, y la exención para las organizaciones de vivienda asequible calificadas hay que solicitarla por medio del Departamento de Vivienda de Los Ángeles. En la mayoría de las ventas privadas no aplicará, pero vale la pena preguntar.',
				],
			},
			{
				heading: '¿Tiene un edificio en West Hollywood o Santa Mónica?',
				paragraphs: [
					'La Medida ULA termina en el límite de la Ciudad de Los Ángeles. West Hollywood es una ciudad aparte, así que ULA no aplica ahí, y West Hollywood no tiene un impuesto de transferencia propio de la ciudad. Vea nuestra [página de edificios multifamiliares en West Hollywood](/submarkets/west-hollywood/) (en inglés) para un ejemplo comparativo. Santa Mónica también está exenta de ULA pero tiene su propia versión, la Medida GS, que cobra 5.6% del precio completo a partir de $8 millones. Nuestra [página de Santa Mónica](/submarkets/santa-monica/) (en inglés) muestra cómo funciona esa línea.',
				],
			},
			{
				heading: 'Dónde están las cosas hoy',
				paragraphs: [
					'Se ha hablado mucho de cambiar la Medida ULA, pero al momento de escribir esto, en octubre de 2026, las tasas y los umbrales anteriores son las reglas vigentes. En julio, el Concejo Municipal de Los Ángeles dejó de lado una propuesta para poner en la boleta de noviembre una exención para la construcción nueva de edificios multifamiliares, así que esa medida no irá a votación este otoño. Reglas como esta pueden cambiar, por lo que confirmamos los umbrales y las exenciones vigentes con la Oficina de Finanzas de la Ciudad antes de fijar el precio de cualquier edificio cercano a una línea.',
				],
			},
			{
				heading: 'Haga los números antes de anunciar',
				paragraphs: [
					'Si su edificio podría quedar cerca de $5.4 millones o $10.9 millones, el momento de revisar las cuentas es antes de fijar un precio. Pruebe nuestra [calculadora de la Medida ULA](/measure-ula-calculator/) (en inglés) para ver sus impuestos de transferencia y lo que recibiría neto a cualquier precio, empiece con nuestra [calculadora gratuita de valor](/property-value/) (en inglés) para obtener un rango rápido, y luego pida una [opinión de valor](' +
						BOV +
						`) gratis, y le mostraremos lo que recibiría con distintos precios y fechas de cierre. Si está decidiendo si vender o no, lea nuestra guía sobre [conservar o vender bajo la Medida ULA](/es/insights/${ES.ulaConservar}/).`,
					`¿Planea para fin de año? Nuestro artículo sobre [el momento de vender antes del 31 de diciembre](/es/insights/${ES.findeano}/) cubre cómo las fechas de cierre afectan sus impuestos.`,
					'Este artículo es información general, no asesoría legal ni de impuestos. Confirme con su contador o abogado de impuestos cómo aplica la Medida ULA a su venta.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[Oficina de Finanzas de la Ciudad de Los Ángeles: Impuesto de transferencia de bienes raíces y preguntas frecuentes sobre la Medida ULA](https://finance.lacity.gov/faq/measure-ula) (en inglés)',
					'[Apartment Association of Greater Los Angeles: Actualización de la Medida ULA sobre los umbrales de julio de 2025](https://members.aagla.org/news/city-of-la-measure-ula-update--increased-thresholds-eff-july-1st-) (en inglés)',
					'[Bisnow: El Concejo de Los Ángeles descarta la medida electoral para la exención de ULA en multifamiliares](https://www.bisnow.com/los-angeles/news/construction-development/ballot-measure-to-exempt-new-housing-construction-from-ula-dead-after-council-vote-135271) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Qué es el impuesto a las mansiones de Los Ángeles (Medida ULA) en 2026 y a partir de qué precio empieza?',
				a: 'Los umbrales son $5.4 millones y $10.9 millones para las ventas que cierren después del 30 de junio de 2026, frente a $5.3 millones y $10.6 millones un año antes. Las ventas por encima de $5.4 millones pero por debajo de $10.9 millones pagan un impuesto ULA de 4%, y las ventas de $10.9 millones o más pagan 5.5%, además del impuesto de transferencia regular de la Ciudad, de 0.45%.',
			},
			{
				q: '¿El impuesto a las mansiones de Los Ángeles se aplica a todo el precio de venta o solo a la parte que pasa de $5.4 millones?',
				a: 'A todo el precio. El impuesto no es marginal. Un edificio que se vende en $5,400,000 no debe impuesto ULA, pero uno que se vende en $5,400,001 debe 4% del precio completo, unos $216,000.',
			},
			{
				q: '¿Puedo evitar el impuesto a las mansiones de Los Ángeles (Medida ULA) con un intercambio 1031?',
				a: 'No. Un intercambio 1031 puede diferir su impuesto sobre las ganancias de capital, pero no exime una venta de la Medida ULA, y los intercambios no están entre las exenciones que enumera la Ciudad. El impuesto se calcula sobre la venta de su edificio de cualquier manera. Vea nuestra [guía de intercambios 1031](/es/intercambios-1031/) para saber qué cubre un intercambio.',
			},
			{
				q: '¿Pago la Medida ULA si mi edificio está en West Hollywood o Santa Mónica?',
				a: 'No. La Medida ULA aplica solo dentro de la Ciudad de Los Ángeles. West Hollywood es una ciudad aparte, así que ULA no aplica ahí, y West Hollywood no tiene un impuesto de transferencia propio de la ciudad. Santa Mónica también está exenta de ULA pero tiene su propia versión, la Medida GS, que cobra 5.6% del precio completo a partir de $8 millones. Vea nuestras páginas de [West Hollywood](/submarkets/west-hollywood/) y [Santa Mónica](/submarkets/santa-monica/) (en inglés).',
			},
			{
				q: '¿Hay alguien exento del impuesto a las mansiones de Los Ángeles (Medida ULA)?',
				a: 'En casos limitados. Las ventas a ciertas organizaciones sin fines de lucro de vivienda asequible que califiquen, y a agencias de gobierno, están exentas, y la exención para las organizaciones de vivienda asequible calificadas hay que solicitarla por medio del Departamento de Vivienda de Los Ángeles. En la mayoría de las ventas privadas no aplicará.',
			},
			{
				q: '¿Qué debo hacer si el precio de mi edificio está justo alrededor de $5.4 millones?',
				a: `Fije el precio teniendo en cuenta el umbral, porque un ajuste modesto del precio puede dejarle más dinero que un precio más alto que cruza la línea. Observe el calendario, porque los umbrales se ajustan cada año por inflación, y haga los números antes de anunciar el edificio. Una [opinión de valor](${BOV}) gratis puede mostrarle lo que recibiría con distintos precios y fechas de cierre.`,
			},
		],
	},
];

export const postsEs: PostEs[] = [...postsEsCore, ...postsEsMore, ...postsEsMore2, ...postsEsMore3, ...postsEsMore4, ...postsEsMore5];

// English slug -> Spanish slug, so an English article can point to its Spanish version.
export const esSlugFor: Record<string, string> = Object.fromEntries(postsEs.filter((p) => p.enSlug).map((p) => [p.enSlug as string, p.slug]));

// 'YYYY-MM-DD' -> 'T4 2026' (trimestre), parsed by hand so the date never shifts with the build machine's timezone.
export function formatTrimestre(iso: string): string {
	const [y, m] = iso.split('-').map(Number);
	return `T${Math.ceil(m / 3)} ${y}`;
}
