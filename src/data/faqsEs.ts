// Spanish version of the site FAQ (src/pages/faqs/index.astro). Each answer restates facts published in an Insights
// article or on the page it links to, so when one of those changes, edit the English and Spanish answers together.
// Answers can use [link text](/path/) links. Links to pages that only exist in English say "(en inglés)" after the link.
import { ES, BOV } from './esSlugs';

const p = (key: keyof typeof ES) => `/es/insights/${ES[key]}/`;

export type FaqCategoryEs = { category: string; items: { q: string; a: string }[] };

export const faqCategoriesEs: FaqCategoryEs[] = [
	{
		category: 'Valor y precio',
		items: [
			{
				q: '¿Cuánto vale mi edificio de apartamentos?',
				a: `Para un rango rápido, use nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés), que calcula un valor a partir de su renta mensual, la edad del edificio y su vecindario, con ventas reales de 2026 del condado de Los Ángeles. Para un número con el que pueda planear, pida una [opinión de valor](${BOV}) gratis, preparada con su lista de rentas, sus gastos y el estado del edificio.`,
			},
			{
				q: '¿Qué es la tasa de capitalización (cap rate) y cómo fija el precio de mi edificio?',
				a: `La tasa de capitalización es el ingreso operativo neto (NOI) del edificio dividido entre su precio, así que el valor es el NOI dividido entre la tasa. Un edificio con $100,000 de NOI que los compradores valoran con una tasa de 5.5% vale unos $1.8 millones. Una tasa más baja significa que los compradores pagan más por cada dólar de ingreso. Vea [cómo valoran los compradores un edificio de apartamentos](${p('valorar')}).`,
			},
			{
				q: '¿Qué es una opinión de valor (Broker Opinion of Value, o BOV)?',
				a: 'Es el cálculo que hace un corredor de lo que su edificio probablemente se vendería, con base en sus rentas y gastos reales, el estado del edificio y su mezcla de unidades, y las ventas comparables recientes. Es una opinión profesional basada en el mercado, no un avalúo formal ni una garantía de lo que pagará un comprador.',
			},
			{
				q: '¿Necesito un avalúo para vender mi edificio de apartamentos?',
				a: `No. Si está decidiendo si vender o fijando un precio, lo que necesita es una opinión de valor, y no necesita un avalúo para anunciar el edificio. Si necesita una valuación formal por otra razón, como una herencia o una disputa legal, pregunte a su abogado o a su contador. Vea [opinión de valor frente a avalúo](${p('bov')}).`,
			},
			{
				q: '¿El control de rentas reduce el valor de mi edificio?',
				a: `Limita qué tan rápido puede crecer el ingreso, así que afecta el valor. Los compradores valoran un edificio con control de rentas según las rentas actuales y dan crédito parcial por el potencial, porque no pueden aprovecharlo hasta que las unidades se desocupen. Vea nuestra guía sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}).`,
			},
		],
	},
	{
		category: 'Calendario de la venta',
		items: [
			{
				q: '¿Cuánto tarda vender un edificio de apartamentos en Los Ángeles?',
				a: 'La mayoría de nuestros listados entran en contrato dentro de 1 a 4 semanas de mercadeo, y el escrow cierra de 30 a 60 días después, según el financiamiento y la revisión del comprador. Las ventas fuera del mercado abierto (off-market) pueden ser más rápidas.',
			},
			{
				q: '¿Necesito arreglar la propiedad antes de vender?',
				a: 'Por lo general no. Muchos de los edificios que vendemos tienen mantenimiento pendiente o rentas por debajo del mercado. Los presentamos con honestidad como oportunidades de valor agregado, en lugar de pedir a los dueños que inviertan en reparaciones antes de una venta.',
			},
			{
				q: '¿Cuáles son los pasos para vender un edificio de apartamentos?',
				a: `Son ocho: decidir qué quiere de la venta, averiguar cuánto vale el edificio, elegir un corredor y firmar el contrato de listado, reunir los documentos, promover el edificio, revisar las ofertas y negociar, abrir el escrow y pasar por el período de revisión, y cerrar. Nuestra [guía paso a paso](${p('paso')}) cubre cada uno.`,
			},
			{
				q: '¿Qué documentos necesito para vender mi edificio de apartamentos?',
				a: 'Normalmente una lista de rentas actualizada, los contratos de renta, y los ingresos y gastos de los últimos dos o tres años, junto con sus recibos de servicios, la factura de impuestos a la propiedad, el seguro, los permisos, los informes de inspección y el registro de las reparaciones grandes. En Los Ángeles, tenga también listos su registro de la Ordenanza de Estabilización de Rentas (RSO) y los comprobantes de pago de sus cuotas.',
			},
			{
				q: '¿Debo vender fuera del mercado abierto o anunciar mi edificio públicamente?',
				a: `Un anuncio amplio normalmente ofrece la mejor oportunidad de lograr el precio más alto, porque más compradores significan más competencia. Una venta fuera del mercado abierto (off-market) ofrece privacidad, pero puede dejarle la duda de cuánto dejó sobre la mesa. Un punto medio es contactar a una lista seleccionada de compradores activos sin un anuncio público. Vea [vender fuera del mercado abierto o anunciar el edificio](/es/insights/${ES.fueraDelMercado}/).`,
			},
			{
				q: '¿Debo aceptar siempre la oferta más alta?',
				a: 'No. El precio importa, pero también el financiamiento del comprador, la duración del período de revisión, el tamaño del depósito y qué tan probable es que el comprador cierre. Su corredor debe ayudarle a comparar las ofertas por lo que usted recibiría neto y por qué tan seguras son.',
			},
		],
	},
	{
		category: 'Costos y proceso',
		items: [
			{
				q: '¿Cuánto cuesta una opinión de valor?',
				a: 'Nada. Nuestra opinión de valor es gratis y confidencial, sin ninguna obligación de anunciar el edificio.',
			},
			{
				q: '¿Cómo se estructura su comisión?',
				a: 'La comisión se negocia en cada listado y solo se gana cuando se cierra una venta. Revisaremos los detalles en su consulta de la opinión de valor.',
			},
			{
				q: '¿Qué sale del precio de venta antes de que me paguen?',
				a: `Planee la comisión del corredor, los impuestos de transferencia y, para edificios en la Ciudad de Los Ángeles con un precio superior a $5.4 millones, la [Medida ULA](${p('ula')}). El impuesto federal y el de California sobre las ganancias de capital y la recuperación de la depreciación salen de su declaración de impuestos, no del escrow. Nuestra [calculadora de ingresos netos](/measure-ula-calculator/) (en inglés) muestra la parte del impuesto de transferencia a su precio.`,
			},
		],
	},
	{
		category: 'Control de rentas e inquilinos',
		items: [
			{
				q: '¿Mi edificio tiene control de rentas?',
				a: 'En la Ciudad de Los Ángeles, los edificios con certificado de ocupación emitido antes del 1 de octubre de 1978 generalmente están cubiertos por la Ordenanza de Estabilización de Rentas (RSO). Los edificios más nuevos normalmente caen bajo el límite estatal de la AB 1482. Otras ciudades, como Santa Mónica, West Hollywood y Beverly Hills, tienen sus propias reglas.',
			},
			{
				q: '¿Cuánto puedo subir la renta en Los Ángeles en 2026?',
				a: `Para los edificios bajo la AB 1482, el máximo para los aumentos que entren en vigor a partir del 1 de agosto de 2026 es 8.7%: el cambio del CPI regional de 3.7% más 5%. Para las unidades RSO, la Ciudad publica una cifra más baja, 3% al momento de escribir esto, y desde el 2 de febrero de 2026 los propietarios ya no pueden agregar un porcentaje extra por servicios. Confirme la cifra vigente con el Departamento de Vivienda de Los Ángeles antes de enviar un aviso. Vea [el límite de rentas de la AB 1482 en 2026](${p('ab1482')}) y [los cambios de la RSO de la Ciudad](${p('rso')}).`,
			},
			{
				q: '¿Puedo vender mi edificio de apartamentos con inquilinos viviendo adentro?',
				a: 'Sí. La mayoría de los edificios de apartamentos en Los Ángeles se venden con los inquilinos en su lugar, y muchos compradores buscan edificios ocupados con ingresos estables. Una venta no termina por sí sola el contrato de ningún inquilino. Los contratos de renta y las reglas de renta se quedan con el edificio, así que el nuevo dueño ocupa la posición del dueño actual.',
			},
			{
				q: '¿Qué es un estoppel y tendrán que firmar uno mis inquilinos?',
				a: 'Un estoppel es una declaración breve en la que un inquilino confirma los términos de su renta, como el monto, el depósito y las fechas del contrato. Los compradores suelen pedirlos durante el escrow para comparar su lista de rentas con lo que dicen los inquilinos. Planee el acceso y el aviso por escrito que requieren las visitas, las inspecciones y los estoppels.',
			},
			{
				q: '¿Qué debo decirles a mis inquilinos cuando voy a vender?',
				a: 'Dígales la verdad y no prometa nada en nombre del comprador. La mayoría de los inquilinos solo quieren saber que su contrato y su renta seguirán igual, y en la venta de un edificio ocupado, por lo general así es.',
			},
		],
	},
	{
		category: 'Impuestos y Medida ULA',
		items: [
			{
				q: '¿Cuánto impuesto pagaré si vendo mi propiedad de renta en California?',
				a: `Si fue dueño de la propiedad por más de un año, la ganancia generalmente es una ganancia de capital a largo plazo, con un impuesto federal de 0%, 15% o 20% según su ingreso. La recuperación de la depreciación se grava hasta con 25%, los vendedores de ingresos altos pueden deber el impuesto de 3.8% sobre los ingresos netos de inversión, y California grava la ganancia como ingreso ordinario. Vea [ganancias de capital y recuperación de la depreciación](${p('impuestos')}), y pida a su contador que calcule sus números.`,
			},
			{
				q: '¿Qué es la recuperación de la depreciación (depreciation recapture)?',
				a: 'La propiedad residencial de renta generalmente se deprecia a lo largo de 27.5 años. Cuando vende, la parte de su ganancia que proviene de esa depreciación se grava con una tasa federal máxima de 25%. El IRS generalmente la calcula con la depreciación que usted tenía derecho a deducir, la haya reclamado o no.',
			},
			{
				q: '¿Qué es la Medida ULA y cuándo aplica?',
				a: `La Medida ULA es el impuesto de transferencia de la Ciudad de Los Ángeles, conocido como el “impuesto a las mansiones”. Para los cierres después del 30 de junio de 2026, una venta de $5.4 millones o menos no debe impuesto ULA, una venta de más de $5.4 millones y menos de $10.9 millones debe 4%, y una venta de $10.9 millones o más debe 5.5%. Aplica solo dentro de la Ciudad de Los Ángeles. Vea nuestra [guía de la Medida ULA](${p('ula')}).`,
			},
			{
				q: '¿La Medida ULA grava todo el precio o solo la parte que pasa del umbral?',
				a: 'Todo el precio. Un edificio que se vende en $5,400,000 no debe impuesto ULA, pero uno que se vende en $5,400,001 debe 4% del precio completo, unos $216,000. Eso puede hacer que un precio más alto le deje menos dinero. Pruébelo en nuestra [calculadora de la Medida ULA](/measure-ula-calculator/) (en inglés).',
			},
			{
				q: '¿Puedo evitar la Medida ULA con un intercambio 1031?',
				a: `No. Un intercambio 1031 puede diferir su impuesto sobre las ganancias de capital, pero no exime una venta de la Medida ULA, y los intercambios no están entre las exenciones que enumera la Ciudad. Si está evaluando si vender o no, vea [conservar o vender bajo la Medida ULA](/es/insights/${ES.ulaConservar}/).`,
			},
			{
				q: '¿La Medida ULA aplica en West Hollywood, Santa Mónica o Beverly Hills?',
				a: 'No. La Medida ULA aplica solo dentro de la Ciudad de Los Ángeles. West Hollywood y Beverly Hills no tienen un impuesto de transferencia propio de la ciudad. Santa Mónica tiene su propia versión, la Medida GS, que cobra 5.6% del precio completo a partir de $8 millones. Vea nuestras páginas de [West Hollywood](/submarkets/west-hollywood/), [Beverly Hills](/submarkets/beverly-hills/) y [Santa Mónica](/submarkets/santa-monica/) (en inglés).',
			},
			{
				q: '¿Debo cerrar mi venta en diciembre o en enero?',
				a: `Ninguno es mejor automáticamente. Una venta se reporta en el año en que cierra, así que un cierre en diciembre pone la ganancia en su declaración de 2026, y uno en enero aplaza la factura de impuestos un año completo. Cuál le conviene depende de sus ingresos de este año y del próximo, así que hable con su contador antes de anunciar el edificio. Vea [vender antes de fin de año](${p('findeano')}).`,
			},
		],
	},
	{
		category: 'Intercambios 1031',
		items: [
			{
				q: '¿Qué es un intercambio 1031?',
				a: 'Llamado así por la Sección 1031 del Código de Impuestos Internos, le permite vender una propiedad de inversión y diferir el impuesto sobre las ganancias de capital que de otra forma pagaría, siempre que reinvierta el dinero en otra propiedad de inversión de igual o mayor valor. El impuesto se difiere, no se elimina. Lea nuestra [guía de intercambios 1031](/1031-exchanges/) (en inglés).',
			},
			{
				q: '¿Cómo funcionan los plazos de un intercambio 1031?',
				a: 'Cuando cierra la propiedad que usted vende, tiene 45 días para identificar propiedades de reemplazo y 180 días en total para cerrar el intercambio. Empezamos a buscar opciones de reemplazo antes de que cierre su venta para proteger ese plazo.',
			},
			{
				q: '¿Puedo hacer un intercambio hacia una propiedad fuera de California?',
				a: 'Sí. Hemos ayudado a clientes a hacer intercambios hacia propiedades multifamiliares en Texas y otros estados como parte de una estrategia 1031, coordinándonos directamente con corredores de esos mercados.',
			},
			{
				q: '¿Puedo vender mi edificio de apartamentos y comprar una propiedad triple net (NNN)?',
				a: `Sí. Según el código fiscal actual, las propiedades multifamiliares y las comerciales califican entre sí como de tipo similar, y eso es lo que hace posible un intercambio de apartamentos a NNN. En un contrato triple net, el inquilino paga los impuestos a la propiedad, el seguro y el mantenimiento. Vea [intercambios 1031 hacia propiedades triple net](${p('intercambio')}) y nuestra [página de triple net y DST](/triple-net-dst/) (en inglés).`,
			},
			{
				q: '¿Toco el dinero en un intercambio 1031?',
				a: 'No. Un Intermediario Calificado guarda los fondos de su venta y los usa para comprar su propiedad de reemplazo en su nombre. Si usted toma el dinero, el intercambio falla y el impuesto vence.',
			},
		],
	},
	{
		category: 'Fideicomisos, herencias y edificios heredados',
		items: [
			{
				q: '¿Trabajan directamente con fideicomisarios y abogados de sucesiones?',
				a: 'Sí, con regularidad. Nos coordinamos con fideicomisarios, albaceas, abogados y contadores para asegurar que una venta cumpla con los requisitos fiduciarios y, cuando aplique, los de la corte.',
			},
			{
				q: '¿Qué pasa si la propiedad no se ha tocado en décadas?',
				a: 'Es común en las ventas de fideicomisos y herencias. Promovemos estas propiedades con claridad a compradores de valor agregado que entienden lo que están asumiendo, para que a las familias no se les pida modernizar un edificio antes de venderlo.',
			},
			{
				q: 'Heredé un edificio de apartamentos. ¿Qué debo hacer primero?',
				a: `Proteja primero el edificio y a los inquilinos: confirme que el seguro esté vigente, mantenga las rentas en una cuenta de la herencia o del fideicomiso, diga a los inquilinos a quién pagar y reúna los documentos. Luego hable con un abogado de sucesiones o fideicomisos y con un contador antes de decidir si conserva o vende. Vea nuestra guía sobre [edificios de apartamentos heredados](${p('heredado')}).`,
			},
			{
				q: '¿Tengo que pasar por probate para vender un edificio heredado?',
				a: 'Depende de cómo era propietario del edificio. Si estaba en un fideicomiso en vida, el fideicomisario sucesor generalmente puede vender según los términos del fideicomiso, sin probate. Si no, generalmente pasa por probate, porque un edificio de apartamentos vale mucho más que el límite de California para herencias pequeñas.',
			},
			{
				q: '¿Pago impuesto sobre las ganancias de capital si vendo un edificio que heredé?',
				a: 'Muchas veces muy poco. La base de un heredero en una propiedad heredada generalmente es su valor justo de mercado en la fecha del fallecimiento, así que una venta poco después normalmente produce poca o ninguna ganancia sujeta a impuestos. Confirme con su contador y conserve la documentación del valor en la fecha del fallecimiento.',
			},
			{
				q: '¿Subirán los impuestos a la propiedad si conservo un edificio de apartamentos heredado?',
				a: 'Por lo general, sí. Un cambio de propiedad provoca una reevaluación a valor de mercado, y la exclusión entre padres e hijos de la Proposición 19 no aplica a una propiedad de renta. Espere que el edificio se reevalúe.',
			},
		],
	},
	{
		category: 'Reglas y cumplimiento del edificio',
		items: [
			{
				q: '¿Qué es la SB 721 y aplica a mi edificio?',
				a: `La SB 721 exige que los dueños de edificios con tres o más unidades multifamiliares hagan inspeccionar los elementos exteriores elevados (balcones, terrazas, porches, escaleras y pasillos) por un profesional con licencia. Aplica si esos elementos están a más de seis pies del suelo y dependen sobre todo de la madera para su soporte. La primera inspección vencía el 1 de enero de 2026. Vea nuestra [guía de la SB 721](/es/insights/${ES.sb721}/).`,
			},
			{
				q: '¿Qué exige la AB 628 de California sobre estufas y refrigeradores?',
				a: `Para los contratos de renta firmados, modificados o prorrogados a partir del 1 de enero de 2026, una unidad de renta debe tener una estufa y un refrigerador en buen estado de funcionamiento. Un inquilino puede acordar en el contrato poner su propio refrigerador, pero no como condición del arrendamiento. Algunos tipos de vivienda, como las unidades de ocupación de una sola habitación, están exentos. Vea nuestra [guía de la AB 628](/es/insights/${ES.ab628}/).`,
			},
			{
				q: '¿Tengo que dar aire acondicionado en mis apartamentos?',
				a: 'No encontramos ninguna ley de California ni de la Ciudad de Los Ángeles que exija a un dueño instalar aire acondicionado en todas las unidades. El condado de Los Ángeles tiene una regla de temperatura interior máxima de 82°F para las rentas en áreas no incorporadas, y el Concejo Municipal ha pedido a la Ciudad considerar una norma similar. Vea nuestra [guía sobre aire acondicionado](/insights/air-conditioning-law-los-angeles-apartment-owners-electrical-panel/) (en inglés).',
			},
			{
				q: '¿Puedo subir las rentas después de una emergencia declarada?',
				a: 'Generalmente no más de 10%. La ley de California contra el abuso de precios limita los aumentos de renta a 10% durante 30 días después de que se declara una emergencia, o más tiempo si se prorroga, salvo que aplique una excepción. La SB 1365, firmada el 30 de septiembre de 2026, extiende esto a contratos de cualquier duración a partir de 2027. Vea [la guía de la SB 1365](/insights/sb-1365-emergency-rent-cap-la-apartment-owners/) (en inglés).',
			},
			{
				q: '¿El mantenimiento pendiente o una fuga de servicios afectan el precio de venta?',
				a: `Sí. Los compradores valoran un edificio según su ingreso operativo neto, así que un gasto extra baja el precio: con una tasa de capitalización de 7%, $8,000 al año de gasto evitable de agua reducen el valor en unos $114,000. Vigile sus recibos de servicios como porcentaje de los gastos para detectar fugas a tiempo. Vea [cómo revisar los recibos de servicios](/es/insights/${ES.servicios}/).`,
			},
		],
	},
	{
		category: 'Comprar un edificio de apartamentos',
		items: [
			{
				q: '¿Cómo se financia un edificio de apartamentos en Los Ángeles?',
				a: 'Los edificios de hasta cuatro unidades generalmente pueden financiarse con hipotecas residenciales, y los de cinco unidades o más necesitan préstamos comerciales que examinan con cuidado el ingreso del edificio. Los programas de agencias, los bancos, las cooperativas de crédito y los prestamistas de corto plazo son las fuentes principales. Vea [cómo financiar un edificio de apartamentos en Los Ángeles](/insights/financing-an-apartment-building-in-los-angeles/) (en inglés).',
			},
			{
				q: '¿Cómo analizo un edificio de apartamentos antes de hacer una oferta?',
				a: 'Empiece con el ingreso operativo neto, y luego la tasa de capitalización, el multiplicador de renta bruta, la cobertura del servicio de la deuda y el rendimiento sobre el efectivo invertido (cash-on-cash). En un edificio con control de rentas, calcule el precio con las rentas actuales, no con lo que las rentas podrían ser. Vea [tasa de capitalización, cash-on-cash y GRM](/insights/how-to-analyze-an-la-apartment-building-cap-rate-cash-on-cash-grm/) (en inglés).',
			},
			{
				q: '¿Qué debo revisar durante la revisión del comprador (due diligence)?',
				a: 'La lista de rentas contra los contratos, los estoppels y los depósitos bancarios; el estado de control de rentas del edificio y su registro; los sistemas físicos, incluidos los informes de balcones de la SB 721 y las mejoras sísmicas; los permisos y el número de unidades; la reevaluación del impuesto a la propiedad; y el título. Vea nuestra [lista de verificación de due diligence](/insights/la-apartment-building-due-diligence-checklist-for-buyers/) (en inglés).',
			},
			{
				q: '¿Cuáles son los errores más comunes de los compradores?',
				a: 'Calcular con rentas que un edificio con control de rentas no puede cobrar, confiar en los números del vendedor, subestimar el mantenimiento pendiente y el cumplimiento de las reglas, olvidar la reevaluación del impuesto a la propiedad y pedir prestado a una tasa superior a la tasa de capitalización. Vea [nueve errores de los compradores](/insights/mistakes-buying-an-apartment-building-in-los-angeles/) (en inglés).',
			},
		],
	},
	{
		category: 'Mercado y vecindarios',
		items: [
			{
				q: '¿A cómo se están vendiendo los edificios de apartamentos en Los Ángeles?',
				a: 'Varía mucho según el vecindario, la edad y el tamaño, y por eso un solo número para toda la ciudad no es muy útil. Nuestros artículos sobre [tasas de capitalización y precios por vecindario](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/) y la [actualización del mercado del tercer trimestre de 2026](/insights/la-apartment-market-update-q3-2026/) (en inglés) muestran ventas reales de 2026 en el condado de Los Ángeles, y cada [página de vecindario](/submarkets/) (en inglés) enumera las ventas detrás de sus números.',
			},
			{
				q: '¿Qué vecindarios cubren?',
				a: 'Koreatown, Mid-Wilshire, Westlake, Pico-Union, Hollywood, East Hollywood, Silver Lake, South LA, North Hollywood, Van Nuys, West LA, Brentwood, Santa Mónica, West Hollywood y Beverly Hills tienen cada uno su propia [página de vecindario](/submarkets/) (en inglés). También vendemos edificios en otras partes del condado de Los Ángeles.',
			},
			{
				q: '¿Puedo ver los edificios que realmente han vendido?',
				a: 'Sí. Nuestra página de [ventas cerradas](/closed-sales/) (en inglés) enumera cada venta con su dirección, número de unidades, tamaño y precio, y detrás hay más de 1,390 unidades y $345 millones en ventas cerradas. Nuestros [casos de estudio](/case-studies/) (en inglés) explican cómo manejamos algunas de las más complejas.',
			},
		],
	},
	{
		category: 'Trabajar con nosotros',
		items: [
			{
				q: '¿Hay un corredor que hable español y venda edificios de apartamentos en Los Ángeles?',
				a: 'Sí. Troy Lucero, de Highlight Multifamily Group, creció en un hogar de habla hispana y habla español con fluidez. Representa a dueños de edificios de apartamentos en Los Ángeles y explica la venta en español o en inglés, como usted prefiera. Josh Kaplan, su socio, también entiende español y participa en la conversación.',
			},
			{
				q: '¿Los documentos de la venta están en español?',
				a: 'Los contratos de listado y de compraventa están escritos en inglés, y Troy los revisa con usted línea por línea en español. Si necesita una versión en español de algún documento en particular, avísenos al comienzo y revisaremos las opciones con usted, su abogado y el oficial de escrow.',
			},
			{
				q: '¿Quién es Highlight Multifamily Group?',
				a: 'Somos un equipo de corredores multifamiliares en Equity Union Commercial. Los cofundadores Josh Kaplan y Troy Lucero trabajan personalmente cada listado, llaman a inversionistas y a otros corredores y negocian directamente con los compradores. Conozca al [equipo](/about/) (en inglés).',
			},
			{
				q: '¿Representan a compradores además de vendedores?',
				a: 'Sí. Hemos representado a compradores y a vendedores, y en algunas operaciones a ambas partes. La página de cada [venta cerrada](/closed-sales/) (en inglés) indica qué parte representamos.',
			},
			{
				q: '¿Cuál es la mejor forma de empezar?',
				a: `Obtenga un rango rápido con nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés), y luego [pida una opinión de valor](${BOV}) gratis. Le explicaremos nuestro enfoque, nuestras ventas recientes y sus opciones, sin ninguna obligación de anunciar el edificio.`,
			},
		],
	},
];
