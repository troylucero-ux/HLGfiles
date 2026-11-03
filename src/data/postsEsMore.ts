// Spanish Insights articles, part 2 (see postsEs.ts for the format). Each mirrors an English post in posts.ts.
import type { PostEs } from './postsEs';
import { ES, BOV } from './esSlugs';
import { SALES_STATS } from './valuationAssumptions';
import { listings } from './listings';

const p = (key: keyof typeof ES) => `/es/insights/${ES[key]}/`;

// Same neighborhood figures the English valuation article uses, written in Spanish.
const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const hoodRso = (slug: string) => SALES_STATS[slug].rso;
const hoodPpu = (slug: string) => money(hoodRso(slug).pricePerUnit!.median);
const hoodPsf = (slug: string) => `$${hoodRso(slug).pricePerSf!.median}`;
const hoodCap = (slug: string) => `${(hoodRso(slug).capRate!.low * 100).toFixed(2)}% a ${(hoodRso(slug).capRate!.high * 100).toFixed(2)}%`;
const donTomaso = listings.find((l) => l.slug === '3815-don-tomaso-dr-los-angeles-ca-90008')!;

export const postsEsMore: PostEs[] = [
	{
		slug: ES.vender,
		enSlug: 'should-i-sell-my-la-apartment-building',
		title: '¿Debo vender mi edificio de apartamentos? 7 preguntas para hacerse primero',
		seoTitle: '¿Debo Vender mi Edificio de Apartamentos? 7 Preguntas',
		description: '¿Piensa vender su edificio de apartamentos en Los Ángeles? Siete preguntas sobre metas, valor, impuestos, costos y calendario antes de decidir.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/debo-vender-7-preguntas.webp',
			alt: 'Gráfica: 7 preguntas para hacerse antes de decidir vender su edificio de apartamentos, de sus metas a su calendario.',
			width: 1200,
			height: 900,
		},
		related: [ES.paso, ES.corredor, ES.impuestos],
		sections: [
			{
				heading: 'No hay una sola respuesta correcta',
				paragraphs: [
					'Decidir si se vende un edificio de apartamentos es una de las decisiones financieras más grandes que toma un dueño, y la respuesta correcta depende tanto de sus metas como del mercado. A algunos dueños les conviene más conservar el edificio. A otros les conviene vender ahora, o vender con un intercambio 1031. Las siete preguntas siguientes son las que repasamos con los dueños antes de anunciar cualquier propiedad.',
				],
			},
			{
				heading: '1. ¿Qué quiere que haga el edificio por usted?',
				paragraphs: [
					'Empiece con la meta, no con el precio. ¿Quiere ingresos estables, menos trabajo, una herencia más sencilla para su familia, dinero para otro negocio, o una forma de dejar atrás la administración de inquilinos? Un edificio que encajaba con sus metas hace diez años puede no encajar hoy.',
				],
			},
			{
				heading: '2. ¿Cuánto vale hoy?',
				paragraphs: [
					`No se puede comparar vender con conservar sin un número realista. Nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés) le da un rango rápido basado en ventas recientes y reales del condado de Los Ángeles, y una [opinión de valor](${BOV}) gratis llega más lejos, porque revisa sus rentas reales, el estado del edificio y la mezcla de unidades.`,
				],
			},
			{
				heading: '3. ¿Cuánto recibiría realmente después de impuestos y costos?',
				paragraphs: [
					`El precio de venta no es lo que llega a su cuenta. Primero salen el impuesto federal y el de California sobre las ganancias de capital, la recuperación de la depreciación, las comisiones y los costos de cierre, y en los edificios de la parte alta del mercado el impuesto de transferencia de la Ciudad de Los Ángeles puede pesar mucho. Lea nuestras guías sobre las [ganancias de capital y la recuperación de la depreciación](${p('impuestos')}) y sobre los [umbrales de precio de la Medida ULA](${p('ula')}) antes de decidir, y pida a su contador que calcule su impuesto en una venta.`,
				],
			},
			{
				heading: '4. ¿Cuánto le va a costar el edificio en los próximos cinco años?',
				paragraphs: [
					`Mire hacia adelante además de hacia atrás. Los techos, la plomería y los sistemas eléctricos que envejecen, el aumento de las primas de seguro y el costo de cumplir con las reglas nuevas afectan lo que el edificio realmente producirá. Una fuga de agua que nadie nota puede costarle en silencio decenas de miles de dólares en valor, como explicamos en nuestro artículo sobre [cómo revisar los recibos de servicios](/es/insights/${ES.servicios}/).`,
					'El mantenimiento pendiente también suele reflejarse en el precio de venta, porque los compradores lo descuentan. Arreglar lo correcto antes de anunciar el edificio, o decidir no hacerlo, es una decisión que vale la pena tomar con cuidado.',
				],
			},
			{
				heading: '5. ¿Cómo están sus rentas frente al mercado?',
				paragraphs: [
					`En Los Ángeles, las reglas de renta determinan lo que un edificio puede producir y lo que un comprador pagará. Los edificios construidos antes del 1 de octubre de 1978 están cubiertos por la Ordenanza de Estabilización de Rentas (RSO) de la Ciudad, y los más nuevos generalmente caen bajo el límite estatal que explicamos en nuestro artículo sobre el [límite de rentas de la AB 1482 en 2026](${p('ab1482')}). Si sus inquilinos llevan mucho tiempo en el edificio y pagan rentas por debajo del mercado, un comprador tomará en cuenta esa diferencia. Nuestra guía sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}) explica cómo.`,
				],
			},
			{
				heading: '6. ¿Qué opciones tiene además de vender?',
				paragraphs: [
					`Vender no es todo o nada. Según su situación, podría conservar el edificio y contratar una mejor administración, refinanciar, o vender y diferir su impuesto sobre las ganancias de capital con un [intercambio 1031](/1031-exchanges/) (en inglés). Los dueños que quieren dejar de administrar propiedades pero conservar el ingreso muchas veces consideran las inversiones [triple net (NNN) y DST](/triple-net-dst/) (en inglés), que cubrimos en nuestro artículo sobre [cómo intercambiar hacia propiedades triple net](${p('intercambio')}). Si usted está manejando un edificio después del fallecimiento de un dueño, nuestra página de [ventas de fideicomisos y herencias](/trust-and-estate-sales/) (en inglés) explica ese proceso.`,
				],
			},
			{
				heading: '7. ¿Cuál es su calendario?',
				paragraphs: [
					`Una venta típica de un edificio de apartamentos en Los Ángeles toma de 60 a 90 días desde que se anuncia hasta el cierre, aunque cada venta es diferente. Si quiere que la venta caiga en un año fiscal en particular, o si trabaja contra el plazo de un intercambio 1031, el calendario importa. Nuestro artículo sobre [el momento de vender antes de fin de año](${p('findeano')}) explica cómo.`,
				],
			},
			{
				heading: 'Conversemos con calma',
				paragraphs: [
					'Si está considerando vender, con gusto conversamos con usted sin ningún compromiso. Puede ver cómo hemos ayudado a otros dueños en nuestros [casos de estudio](/case-studies/) (en inglés) y [ventas cerradas](/closed-sales/) (en inglés), o comunicarse con Troy Lucero, de Highlight Multifamily Group, que le atiende en español, para una conversación gratuita y confidencial.',
					'Este artículo es información general, no asesoría legal, de impuestos ni financiera. Hable con su contador, su abogado y su asesor financiero sobre su situación.',
				],
			},
		],
		faqs: [
			{
				q: '¿Debo vender mi edificio de apartamentos o conservarlo?',
				a: 'No hay una sola respuesta correcta. Depende tanto de sus metas como del mercado. A algunos dueños les conviene conservar el edificio, y a otros vender ahora o vender con un intercambio 1031. Empiece con sus metas, el valor actual, lo que recibiría después de impuestos y costos, y lo que el edificio le costará en los próximos años.',
			},
			{
				q: '¿Cómo sé cuánto vale mi edificio de apartamentos?',
				a: `Una calculadora le da un rango rápido basado en ventas recientes y reales, y una [opinión de valor](${BOV}) gratis llega más lejos, porque revisa sus rentas reales, el estado del edificio y la mezcla de unidades.`,
			},
			{
				q: '¿Cuánto dinero recibiría realmente si vendo mi edificio?',
				a: 'El precio de venta no es lo que llega a su cuenta. Primero salen el impuesto federal y el de California sobre las ganancias de capital, la recuperación de la depreciación, las comisiones y los costos de cierre, y en los edificios de la parte alta del mercado también puede pesar el impuesto de transferencia de la Ciudad de Los Ángeles (Medida ULA). Pida a su contador que calcule su impuesto.',
			},
			{
				q: '¿Qué opciones tengo además de vender el edificio?',
				a: 'Puede conservarlo y contratar una mejor administración, refinanciar, o vender y diferir el impuesto sobre las ganancias de capital con un intercambio 1031. Quienes quieren dejar de administrar pero conservar el ingreso muchas veces consideran inversiones triple net (NNN) y DST.',
			},
			{
				q: '¿Cómo afectan las rentas bajas o el control de rentas mi decisión de vender?',
				a: 'Las reglas de renta determinan lo que el edificio puede producir y lo que un comprador pagará. Si sus inquilinos llevan mucho tiempo y pagan rentas por debajo del mercado, un comprador tomará en cuenta esa diferencia en el precio.',
			},
			{
				q: '¿Cuánto tarda vender un edificio de apartamentos en Los Ángeles?',
				a: 'Una venta típica toma de 60 a 90 días desde que se anuncia hasta el cierre, aunque cada venta es diferente. Si quiere que la venta caiga en un año fiscal en particular, o si trabaja contra el plazo de un intercambio 1031, el calendario importa.',
			},
		],
	},
	{
		slug: ES.corredor,
		enSlug: 'how-to-choose-a-multifamily-broker-in-los-angeles',
		title: '¿Cómo elegir al mejor corredor de edificios multifamiliares en Los Ángeles?',
		seoTitle: 'Cómo Elegir un Corredor de Edificios en Los Ángeles',
		description: '¿Va a contratar un corredor para vender su edificio en Los Ángeles? Siete cosas que revisar, preguntas que hacer y señales de alerta antes de firmar.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/como-elegir-corredor.webp',
			alt: 'Gráfica: siete cosas que revisar antes de contratar a un corredor multifamiliar. Verifique su trayectoria, pida ventas locales recientes y llame a las referencias.',
			width: 1200,
			height: 900,
		},
		related: [ES.paso, ES.vender, ES.valorar],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'El corredor que contrate afecta su precio de venta, sus impuestos y lo tranquilo que será el proceso. Vale la pena entrevistar a más de uno.',
					'Busque a un especialista en edificios de apartamentos, con ventas cerradas que usted pueda verificar, experiencia reciente en su vecindario y un plan claro para encontrar compradores.',
					'Tenga cuidado con el corredor que ofrece el precio más alto. Una opinión de precio solo sirve si está respaldada por ventas comparables y por un cálculo realista de lo que usted recibiría neto.',
					'Pida referencias y verifique la licencia del corredor antes de firmar cualquier documento.',
				],
			},
			{
				heading: 'Por qué los edificios de apartamentos necesitan un especialista',
				paragraphs: [
					'Vender un edificio de apartamentos es un trabajo distinto a vender una casa o un centro comercial. El comprador es un inversionista, así que el precio depende del ingreso, los gastos y el riesgo. En Los Ángeles, el control de rentas, la edad del edificio y los impuestos locales pueden mover el número por cientos de miles de dólares. Un corredor que trabaja sobre todo con otros tipos de propiedad estaría aprendiendo esas reglas con la venta de usted.',
					'También afecta quién ve su edificio. Los compradores de apartamentos trabajan con corredores que ya conocen, y las mejores ofertas muchas veces vienen de inversionistas que siguen el mercado de cerca.',
				],
			},
			{
				heading: '1. Una trayectoria que usted pueda verificar',
				paragraphs: [
					'Pida una lista de ventas recientes de apartamentos, con direcciones, número de unidades y precios, y concéntrese en edificios parecidos al suyo en tamaño, edad y vecindario. Luego verifíquela. Los precios de venta de las transacciones registradas son públicos, y un corredor orgulloso de su trayectoria recibirá bien la verificación.',
					'Fíjese en cómo participó el corredor. Algunos pueden contar ventas en las que solo ayudaron, o ventas de una empresa anterior. Es justo preguntar cuáles representaron directamente y cuándo.',
					'Como ejemplo de lo que es un historial verificable, nuestra página de [ventas cerradas](/closed-sales/) (en inglés) enumera cada venta con su dirección, número de unidades, tamaño y precio, y detrás hay más de 1,390 unidades y $345 millones en ventas cerradas.',
				],
			},
			{
				heading: '2. Conocimiento de su vecindario',
				paragraphs: [
					'Los Ángeles es un conjunto de mercados muy distintos. Un edificio en Koreatown se vende con números diferentes a los de uno en Santa Mónica o en North Hollywood, y las ventas comparables correctas están en su propia zona, no en el otro extremo del condado. Pida al corredor las tres ventas recientes más relevantes cerca de su edificio y por qué aplican.',
					'Un corredor que conoce la zona también puede decirle qué le importa a los compradores locales, desde la facilidad para caminar y el transporte hasta el estado de los edificios del vecindario. Publicamos cifras reales de ventas de cada uno de nuestros [vecindarios](/submarkets/) (en inglés), incluidos el precio mediano por unidad y las tasas de capitalización típicas, para que vea lo que un corredor local ya debería saber.',
				],
			},
			{
				heading: '3. Una opinión de precio honesta',
				paragraphs: [
					'Algunos corredores consiguen listados prometiendo un precio alto. Eso puede dejarle un edificio que se queda sin vender en el mercado y que después se vende por menos tras una rebaja, habiendo perdido semanas y credibilidad frente a los compradores.',
					`Una opinión de valor confiable muestra cómo se llegó al número. Debe incluir las ventas comparables, la tasa de capitalización y el multiplicador de renta bruta que supone, sus ingresos y gastos, y un cálculo de lo que usted recibiría neto después de impuestos y costos. Si un corredor no puede explicar cómo llegó al número, trátelo como un discurso de ventas. Nuestra guía sobre [cómo se valoran los edificios de apartamentos](${p('valorar')}) explica qué buscar, y nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés) le da un rango rápido para comparar.`,
				],
			},
			{
				heading: '4. Un plan para llegar a los compradores',
				paragraphs: [
					'Pregunte al corredor cómo encontrará compradores, y no solo si anunciará el edificio. Una buena respuesta incluye una base de datos de inversionistas activos, relaciones con otros corredores, un memorando de oferta exacto, una jornada de puertas abiertas y, en algunos casos, una estrategia fuera del mercado abierto (off-market).',
					'Dos ejemplos de nuestro propio trabajo muestran cómo planes distintos le quedan a edificios distintos. En 1513 Arlington Ave, una jornada de puertas abiertas para corredores y compradores atrajo ofertas de 12 compradores, como describimos en el [caso de estudio](/case-studies/1513-arlington-ave-arlington-heights-apartments/) (en inglés). En 236 S Bonnie Brae St, una venta confidencial fuera del mercado a un comprador recurrente de confianza funcionó mejor para un edificio grande que se promovió con discreción, como se describe en ese [caso de estudio](/case-studies/236-s-bonnie-brae-st-westlake-apartments/) (en inglés).',
				],
			},
			{
				heading: '5. Conocimiento de las reglas y del lado de los impuestos',
				paragraphs: [
					`En Los Ángeles, un buen corredor tiene que entender más que los bienes raíces. La estabilización de rentas y los límites estatales de renta determinan su ingreso y cómo los compradores calculan el valor de su edificio, como explicamos en nuestras guías sobre el [límite de rentas de la AB 1482 en 2026](${p('ab1482')}) y sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}). El impuesto de transferencia de la Medida ULA de la Ciudad puede cambiar lo que usted recibe neto en una venta más grande, como cubrimos en nuestra [guía de la Medida ULA](${p('ula')}).`,
					`Si planea diferir sus impuestos con un intercambio 1031, pregunte si el corredor puede ayudarle a encontrar la propiedad de reemplazo y trabajar con su asesor del intercambio. Si va a vender un edificio de una herencia o de un fideicomiso, pregunte por su experiencia con ese proceso, que tiene sus propios plazos y trámites. Los corredores no somos asesores de impuestos, así que un buen corredor también trabajará con su contador. Vea nuestras guías sobre [intercambios 1031](/1031-exchanges/) (en inglés), [ventas de fideicomisos y herencias](/trust-and-estate-sales/) (en inglés) y [ganancias de capital y recuperación de la depreciación](${p('impuestos')}).`,
				],
			},
			{
				heading: '6. Quién hará realmente el trabajo',
				paragraphs: [
					'En algunas empresas, la persona que le hace la presentación no es la que maneja su venta. Pregunte quién preparará el memorando de oferta, quién le devolverá las llamadas y quién negociará con los compradores, y con qué frecuencia puede esperar noticias. Pregunte cuántos edificios maneja el corredor al mismo tiempo.',
					'En Highlight Multifamily Group, los dos cofundadores, Josh Kaplan y Troy Lucero, trabajan personalmente cada listado. Llaman directamente a inversionistas y a otros corredores, negocian directamente con los compradores y son los contactos principales en cada operación. Dan seguimiento constante, recogen las opiniones de los compradores y se las transmiten al cliente vendedor. Puede leer más sobre ellos en nuestra [página del equipo](/about/) (en inglés).',
				],
			},
			{
				heading: '7. Referencias y reseñas',
				paragraphs: [
					'Pida los nombres de antiguos vendedores a quienes pueda llamar, de preferencia dueños de edificios como el suyo. Las reseñas en línea son un buen comienzo, pero una llamada le dice cómo manejó el corredor los momentos difíciles, como una oferta que se cayó o un problema con un inquilino. Puede leer lo que han dicho nuestros clientes en nuestra página de [testimonios](/testimonials/) (en inglés).',
				],
			},
			{
				heading: 'Preguntas para hacer a cada corredor que entreviste',
				paragraphs: [
					'¿Qué ventas recientes de apartamentos ha cerrado usted personalmente, y puedo ver las direcciones y los precios?',
					'¿Cuáles son las tres mejores ventas comparables para mi edificio, y cómo las eligió?',
					'¿Qué precio recomienda, y cuánto recibiría yo neto después de impuestos y costos?',
					'¿Cómo promoverá el edificio, y quién es probable que lo compre?',
					'¿Quién manejará mi venta día a día, y con qué frecuencia sabré de usted?',
					'¿Cuáles son sus condiciones de listado, incluidas la comisión, la duración del contrato y cualquier cargo?',
					'¿Puedo hablar con dos o tres dueños a quienes haya representado?',
				],
			},
			{
				heading: 'Señales de alerta',
				paragraphs: [
					'Desconfíe de un precio muy por encima de todas las demás opiniones y sin ventas comparables que lo respalden. Tenga cuidado con la presión para firmar rápido, las respuestas vagas sobre la trayectoria del propio corredor, un contrato de listado largo y sin salida, y la resistencia a dar referencias.',
					'También puede verificar que un corredor tenga licencia en la [búsqueda de licencias del Departamento de Bienes Raíces de California](https://www2.dre.ca.gov/PublicASP/pplinfo.asp) (en inglés).',
				],
			},
			{
				heading: 'Hable con nosotros',
				paragraphs: [
					`Nos daría gusto ser uno de los corredores que usted entreviste. Empiece con un rango rápido de nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés), y luego pida una [opinión de valor](${BOV}) gratis, y le explicaremos nuestro enfoque, nuestras ventas recientes y sus opciones, en español si lo prefiere. Si todavía está decidiendo si vender, lea nuestras [siete preguntas para hacerse primero](${p('vender')}).`,
					'Este artículo es información general, no asesoría legal ni financiera.',
				],
			},
		],
		faqs: [
			{
				q: '¿Cómo elijo un buen corredor de bienes raíces para vender mi edificio de apartamentos en Los Ángeles?',
				a: 'Busque a un especialista en edificios de apartamentos, con ventas cerradas que usted pueda verificar, experiencia reciente en su vecindario, una opinión de precio honesta respaldada por ventas comparables, un plan claro para llegar a los compradores y referencias de antiguos vendedores. Vale la pena entrevistar a más de un corredor.',
			},
			{
				q: '¿Por qué necesito un corredor especializado en edificios de apartamentos?',
				a: 'El comprador de un edificio de apartamentos es un inversionista, así que el precio depende del ingreso, los gastos y el riesgo. En Los Ángeles, el control de rentas, la edad del edificio y los impuestos locales pueden mover el número por cientos de miles de dólares, y un corredor que trabaja sobre todo con otros tipos de propiedad estaría aprendiendo esas reglas con su venta.',
			},
			{
				q: '¿Cómo verifico la trayectoria de un corredor?',
				a: 'Pida una lista de ventas recientes con direcciones, unidades y precios, de edificios parecidos al suyo, y compruébela, porque los precios de venta registrados son públicos. Pregunte cuáles ventas representó directamente y cuándo.',
			},
			{
				q: '¿Debo contratar al corredor que me ofrece el precio más alto?',
				a: 'No necesariamente. Algunos corredores consiguen listados prometiendo un precio alto, y eso puede dejarle un edificio que se queda sin vender y que luego se vende por menos tras una rebaja. Una opinión de valor confiable muestra su trabajo: ventas comparables, la tasa de capitalización que supone y lo que usted recibiría neto.',
			},
			{
				q: '¿Qué preguntas debo hacerle a un corredor antes de contratarlo?',
				a: 'Pregunte qué ventas recientes cerró personalmente, cuáles son las tres mejores ventas comparables para su edificio, qué precio recomienda y cuánto recibiría usted neto, cómo promoverá el edificio, quién manejará su venta día a día, cuáles son sus condiciones de listado y si puede hablar con dos o tres dueños a quienes haya representado.',
			},
			{
				q: '¿Cuáles son las señales de alerta al elegir un corredor?',
				a: 'Un precio muy por encima de todas las demás opiniones sin ventas comparables que lo respalden, presión para firmar rápido, respuestas vagas sobre su propia trayectoria, un contrato de listado largo y sin salida, y resistencia a dar referencias. También puede verificar la licencia del corredor en el sitio del Departamento de Bienes Raíces de California.',
			},
		],
	},
	{
		slug: ES.valorar,
		enSlug: 'how-to-value-an-apartment-building-in-los-angeles',
		title: '¿Cómo valorar un edificio de apartamentos en Los Ángeles?',
		seoTitle: 'Cómo Valorar un Edificio de Apartamentos en Los Ángeles',
		description: 'Cómo se valoran los edificios en Los Ángeles: NOI, tasa de capitalización, GRM, precio por unidad, control de rentas y estado, con ventas reales de 2026.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/como-valorar-edificio.webp',
			alt: 'Gráfica: el ingreso determina el valor de un edificio de apartamentos. Ingreso operativo neto, tasa de capitalización y ventas comparables reales.',
			width: 1200,
			height: 900,
		},
		related: [ES.vender, ES.bov, ES.corredor],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'Los compradores valoran un edificio de apartamentos sobre todo por su ingreso, no por su apariencia ni por el precio que se pide. La medida central es el ingreso operativo neto (NOI, por sus siglas en inglés) dividido entre una tasa de capitalización de mercado, comparado con ventas comparables recientes.',
					'En Los Ángeles, el control de rentas y la edad del edificio cambian las cuentas. Los edificios construidos antes de 1978 (con rentas estabilizadas) se venden de forma distinta a los más nuevos, así que las ventas comparables tienen que ser del mismo tipo.',
					'El estado del edificio, el mantenimiento pendiente y la diferencia entre las rentas actuales y las de mercado mueven el precio tanto como las cifras principales.',
					'Una calculadora o una regla práctica le da un rango. Una opinión de valor basada en su lista de rentas y sus gastos reales le da un número con el que puede planear.',
				],
			},
			{
				heading: '1. Ingreso operativo neto: el centro del valor',
				paragraphs: [
					'El ingreso operativo neto es la renta cobrada del edificio y otros ingresos, menos el costo de operarlo. No incluye el pago de su hipoteca, la depreciación ni los impuestos sobre la renta. Como el comprador está pagando por ese flujo de ingresos, el NOI determina el precio más que cualquier otro número.',
					`Dos cosas hacen tropezar a los dueños. Primero, los compradores usan gastos realistas, no solo lo que usted paga hoy. Volverán a calcular los impuestos a la propiedad, porque California reevalúa un edificio cuando se vende, y nuestros memorandos de oferta normalmente suponen alrededor de 1.2% del precio de venta. Segundo, los problemas ocultos de gastos salen a la luz en la revisión del comprador, y por eso recomendamos a los dueños vigilar sus recibos, como explicamos en nuestro artículo sobre [cómo revisar los recibos de servicios](/es/insights/${ES.servicios}/).`,
				],
			},
			{
				heading: '2. Tasa de capitalización (cap rate)',
				paragraphs: [
					'La tasa de capitalización es el NOI dividido entre el precio. Si lo da vuelta, obtiene un cálculo rápido del valor: el NOI dividido entre la tasa de capitalización. Por ejemplo, un edificio con $100,000 de NOI que los compradores valoran con una tasa de capitalización de 5.5% vale alrededor de $1.8 millones. Una tasa más baja significa que los compradores pagan más por cada dólar de ingreso.',
					`Las tasas de capitalización no son un solo número en todo Los Ángeles. En las ventas de 2026 hasta octubre, los edificios con rentas estabilizadas (construidos antes de 1978) y con tasa registrada se vendieron en un rango típico de ${hoodCap('koreatown')} en Koreatown, ${hoodCap('north-hollywood')} en North Hollywood y ${hoodCap('santa-monica')} en Santa Mónica. Publicamos estos rangos, con el número de ventas detrás de cada uno, en nuestras [páginas de vecindarios](/submarkets/) (en inglés).`,
				],
			},
			{
				heading: '3. Multiplicador de renta bruta (GRM)',
				paragraphs: [
					'El multiplicador de renta bruta es el precio dividido entre la renta bruta anual. Es un filtro rápido que compradores y corredores usan para comparar edificios de un vistazo, pero ignora los gastos, así que dos edificios con el mismo GRM pueden tener un NOI muy diferente.',
					`Un ejemplo real: nuestro listado en [3815 Don Tomaso Dr](/listings/3815-don-tomaso-dr-los-angeles-ca-90008/) (en inglés) tiene un precio de ${money(donTomaso.askingPrice!)}, que equivale a un GRM de ${donTomaso.grm} y a una tasa de capitalización de ${donTomaso.capRate}% sobre las rentas actuales. Los dos números cuentan partes distintas de la historia, y por eso miramos ambos.`,
				],
			},
			{
				heading: '4. Precio por unidad y precio por pie cuadrado',
				paragraphs: [
					'El precio por unidad y el precio por pie cuadrado son las formas más rápidas de comparar un edificio con ventas recientes. Son revisiones de sentido común, no valuaciones, porque ignoran el ingreso, el estado del edificio y el nivel de las rentas.',
					`También varían mucho según el vecindario. Entre los edificios con rentas estabilizadas vendidos en lo que va de 2026, el precio mediano por unidad fue de ${hoodPpu('koreatown')} en Koreatown, ${hoodPpu('north-hollywood')} en North Hollywood y ${hoodPpu('santa-monica')} en Santa Mónica, y el precio mediano por pie cuadrado fue de ${hoodPsf('koreatown')}, ${hoodPsf('north-hollywood')} y ${hoodPsf('santa-monica')}. Una cifra del vecindario equivocado puede estar errada por cientos de miles de dólares.`,
				],
			},
			{
				heading: '5. Ingreso actual frente a ingreso proyectado (pro forma)',
				paragraphs: [
					'Los compradores miran dos conjuntos de números: lo que el edificio produce hoy (ingreso actual) y lo que podría producir con rentas de mercado (pro forma). La diferencia entre ambos se llama loss to lease (la brecha entre la renta actual y la de mercado), y ahí ocurre buena parte de la negociación.',
					`En 3815 Don Tomaso, las rentas actuales están alrededor de 47% por debajo del mercado, una brecha de $4,904 al mes. Llegar a las rentas de mercado con la rotación normal subiría el NOI de $79,148 a $129,826 y la tasa de capitalización de 6.33% a 10.39%. Los compradores pagarán por ese potencial, pero solo en parte, porque con control de rentas no pueden aprovecharlo hasta que las unidades se desocupen. Explicamos cómo en nuestra guía sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}).`,
				],
			},
			{
				heading: '6. Ventas comparables y evidencia del mercado',
				paragraphs: [
					'La mejor evidencia de valor es lo que edificios parecidos realmente se vendieron. Una buena comparable es reciente, está en el mismo vecindario, es de un tamaño y una edad cercanos al suyo y tiene el mismo estado de control de rentas. No se deben mezclar las ventas de edificios construidos antes de 1978 con las de edificios posteriores, porque la diferencia en el precio por unidad es grande: en todo el condado de Los Ángeles en 2026, la mediana fue de alrededor de $220,000 por unidad en los edificios anteriores a 1978 y de alrededor de $331,000 en los más nuevos.',
					'Puede ver cómo hemos fijado el precio y vendido edificios en todo Los Ángeles en nuestra página de [ventas cerradas](/closed-sales/) (en inglés).',
				],
			},
			{
				heading: '7. Estado físico y gastos de capital',
				paragraphs: [
					'Los compradores restan lo que esperan gastar. Los techos, la plomería, los sistemas eléctricos y las inspecciones obligatorias se descuentan del precio. En 1513 Arlington Ave, por ejemplo, el edificio tenía subpaneles eléctricos Federal Pacific que las aseguradoras exigen cada vez más reemplazar, además de la inspección de balcones que exige el estado bajo la SB 721. Nuestro cliente vendedor no quiso pagar ninguna de las dos antes del cierre, así que estructuramos la venta para que el comprador se hiciera cargo, como se describe en el [caso de estudio](/case-studies/1513-arlington-ave-arlington-heights-apartments/) (en inglés).',
					'En general, aconsejamos a los vendedores no gastar dinero en la propiedad antes de una venta, porque rara vez lo recuperan de los compradores. Los inversionistas con experiencia tienen sus propios planes y formas económicas de poner un edificio al nivel del mercado.',
				],
			},
			{
				heading: '8. Reglas de renta y regulación',
				paragraphs: [
					`El control de rentas limita qué tan rápido puede crecer el ingreso, así que afecta directamente el valor. Los edificios construidos antes del 1 de octubre de 1978 generalmente están cubiertos por la Ordenanza de Estabilización de Rentas de la Ciudad, y los más nuevos caen bajo el límite estatal que explicamos en nuestro artículo sobre el [límite de rentas de la AB 1482 en 2026](${p('ab1482')}).`,
					`Los impuestos de la venta misma también importan. En la Ciudad de Los Ángeles, un edificio que se vende por más de unos $5.4 millones paga la Medida ULA, que puede cambiar mucho lo que usted recibe neto. Lea nuestra [guía de la Medida ULA](${p('ula')}) antes de fijar el precio de un edificio cercano a esa línea.`,
				],
			},
			{
				heading: '9. Financiamiento y grupo de compradores',
				paragraphs: [
					'Las tasas de interés y los requisitos de los prestamistas determinan lo que los compradores pueden pagar. Cuando el financiamiento es caro, las tasas de capitalización suben y los valores bajan, y cuando se relaja, ocurre lo contrario. Un edificio también se vende por más cuando llega al grupo más amplio de compradores calificados, incluidos los inversionistas que están haciendo un intercambio desde otra propiedad.',
				],
			},
			{
				heading: '10. Cómo se presenta el edificio para la venta',
				paragraphs: [
					'El mismo edificio puede venderse a precios distintos según cómo se promueva. Un memorando de oferta exacto, una jornada de puertas abiertas para corredores y compradores y una historia clara sobre el potencial ayudan. En 1513 Arlington Ave, una jornada de puertas abiertas para corredores y compradores atrajo ofertas de 12 compradores.',
				],
			},
			{
				heading: '¿Cuánto vale su edificio?',
				paragraphs: [
					`Para un rango rápido, pruebe nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés), que usa ventas reales de 2026 en su vecindario y separa los edificios con rentas estabilizadas de los más nuevos. Para un número con el que pueda planear, pida una [opinión de valor](${BOV}) gratis y la prepararemos con su lista de rentas, sus gastos y el estado del edificio. Si todavía está decidiendo si vender, empiece con nuestras [siete preguntas para hacerse primero](${p('vender')}).`,
					'Las cifras de ventas son medianas o rangos de transacciones multifamiliares cerradas en el condado de Los Ángeles de enero a octubre de 2026, y solo aparecen cuando suficientes ventas reportaron la cifra. Este artículo es información general, no un avalúo ni asesoría de inversión.',
				],
			},
		],
		faqs: [
			{
				q: '¿Cómo se valora un edificio de apartamentos?',
				a: 'Los compradores valoran un edificio de apartamentos sobre todo por su ingreso. La medida central es el ingreso operativo neto (NOI) dividido entre una tasa de capitalización de mercado, comparado con ventas comparables recientes, y ajustado por el estado del edificio y las reglas de renta.',
			},
			{
				q: '¿Qué es la tasa de capitalización (cap rate) en palabras sencillas?',
				a: 'Es el ingreso operativo neto (NOI) del edificio dividido entre su precio. Si un edificio produce $100,000 de NOI después de gastos y se vende por $1,600,000, su tasa de capitalización es 6.25%. Mientras más baja la tasa, más paga el comprador por cada dólar de ingreso.',
			},
			{
				q: '¿Cómo afecta el control de rentas el valor de mi edificio?',
				a: 'El control de rentas limita qué tan rápido puede crecer el ingreso. Los edificios construidos antes del 1 de octubre de 1978 generalmente están cubiertos por la Ordenanza de Estabilización de Rentas de la Ciudad de Los Ángeles, y se venden de forma distinta a los más nuevos, así que las ventas comparables tienen que ser del mismo tipo.',
			},
			{
				q: '¿Qué es el loss to lease y por qué importa al vender?',
				a: 'Es la diferencia entre las rentas actuales y las de mercado. Los compradores pagan por ese potencial, pero solo en parte, porque con control de rentas no pueden aprovecharlo hasta que las unidades se desocupen.',
			},
			{
				q: '¿Debo hacer reparaciones antes de vender?',
				a: 'En general, aconsejamos a los vendedores no gastar dinero en la propiedad antes de una venta, porque rara vez lo recuperan de los compradores. Los compradores restan lo que esperan gastar, y los inversionistas con experiencia tienen sus propios planes para poner un edificio al nivel del mercado.',
			},
			{
				q: '¿Cómo obtengo un número confiable para mi edificio?',
				a: `Una calculadora le da un rango rápido. Para un número con el que pueda planear, pida una [opinión de valor](${BOV}) gratis, preparada con su lista de rentas, sus gastos y el estado del edificio.`,
			},
		],
	},
	{
		slug: ES.bov,
		enSlug: 'broker-opinion-of-value-vs-appraisal-apartment-building',
		title: 'Opinión de valor frente a avalúo: ¿cuál necesita para vender?',
		seoTitle: 'Opinión de Valor vs. Avalúo: Edificios de Apartamentos',
		description: 'Una opinión de valor del corredor y un avalúo responden preguntas distintas. Qué es cada uno, cuánto cuestan y cuál necesita primero un vendedor.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/opinion-de-valor-vs-avaluo.webp',
			alt: 'Gráfica: dos valuaciones, dos propósitos. Una opinión de valor del corredor fija su precio. Un avalúo respalda el préstamo del comprador. Empiece con la opinión de valor.',
			width: 1200,
			height: 900,
		},
		related: [ES.valorar, ES.vender, ES.corredor],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'Una opinión de valor del corredor (Broker Opinion of Value, o BOV) es el cálculo que hace un corredor de lo que su edificio probablemente se vendería. Un avalúo es una valuación formal hecha por un valuador con licencia, que normalmente pide un prestamista. Sirven para fines distintos.',
					'Una opinión de valor le ayuda a decidir si vender y cuándo, y por cuánto anunciar el edificio. El avalúo viene después, cuando el prestamista de un comprador lo necesita para aprobar un préstamo.',
					'La mayoría de los vendedores necesita primero una opinión de valor, y por lo general no necesita pedir un avalúo.',
				],
			},
			{
				heading: 'Qué es una opinión de valor del corredor',
				paragraphs: [
					'Una opinión de valor la prepara un corredor de bienes raíces que trabaja en su mercado. Revisa las rentas y los gastos reales de su edificio, su estado y su mezcla de unidades, y las ventas comparables recientes, y llega a un precio de venta probable o a un rango de precios. También refleja cosas que un informe formal quizá no incluya, como qué compradores están activos en este momento y cómo están valorando edificios como el suyo.',
					'Una opinión de valor no es un avalúo formal ni garantiza lo que pagará un comprador. Es una opinión profesional, basada en el mercado, sobre el precio al que probablemente se venderá su edificio.',
				],
			},
			{
				heading: 'Qué es un avalúo',
				paragraphs: [
					'Un avalúo es una opinión formal y escrita sobre el valor de mercado de una propiedad, preparada por un valuador con licencia o certificación que sigue normas profesionales. Los prestamistas exigen uno antes de otorgar un préstamo, así que el prestamista del comprador pedirá un avalúo de su edificio durante el escrow. El valuador trabaja para el prestamista, no para usted.',
					'Los dueños también usan avalúos en situaciones que requieren una valuación formal, como una herencia, la compra de la parte de un socio o una disputa.',
				],
			},
			{
				heading: 'Las diferencias principales',
				paragraphs: [
					'Quién lo prepara. Un corredor prepara una opinión de valor. Un valuador con licencia prepara un avalúo.',
					'Para qué existe. Una opinión de valor le ayuda a fijar el precio y a promover una venta. Un avalúo respalda un préstamo u otra necesidad formal.',
					'Cuánto cuesta. Los corredores normalmente dan una opinión de valor sin cargo cuando usted está considerando vender, mientras que el avalúo se paga, por lo general quien lo necesita.',
					'Cómo se usa. Una opinión de valor es una herramienta de planeación y de precio sin validez formal. Un avalúo es el documento en el que se apoyan los prestamistas y otras instituciones.',
				],
			},
			{
				heading: '¿Cuál necesita antes de vender?',
				paragraphs: [
					'Si está decidiendo si vender o fijando su precio de venta, usted necesita una opinión de valor. Es más rápida, no le cuesta nada con un corredor y está basada en cómo los compradores están valorando los edificios en este momento. No necesita un avalúo para anunciar un edificio.',
					'Si necesita una valuación formal por una razón distinta a una venta típica, como una herencia o una disputa legal, pregunte a su abogado o a su contador si se requiere un avalúo.',
				],
			},
			{
				heading: 'Por qué el avalúo del comprador igual importa para su venta',
				paragraphs: [
					'Aunque usted no lo pida, el prestamista del comprador sí lo hará. Si el valuador valora el edificio por debajo del precio acordado, es posible que el comprador tenga que poner más efectivo, pedir un precio más bajo o retirarse si su contrato lo permite. Por eso importa que el precio inicial esté bien respaldado: un precio basado en ventas comparables reales tiene más probabilidades de sostenerse cuando el valuador lo revise.',
					'Una opinión de valor que use ventas recientes y su lista de rentas real le ayuda a fijar ese precio. Usamos el mismo tipo de datos de ventas por vecindario que aparece en nuestro artículo sobre las [tasas de capitalización y precios por vecindario en Los Ángeles](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/) (en inglés).',
				],
			},
			{
				heading: 'Qué esperar de nuestra opinión de valor',
				paragraphs: [
					`Nuestra opinión de valor es gratis y confidencial, y se basa en las rentas, el estado y la mezcla de unidades reales de su edificio. Le explicaremos cómo sus rentas, sus inquilinos y su calendario afectan el precio, para que usted entienda el número y no solo el total. Para ver cómo piensan los compradores sobre el valor, lea nuestra guía sobre [cómo valorar un edificio de apartamentos en Los Ángeles](${p('valorar')}).`,
					`Puede empezar con la [calculadora gratuita de valor de propiedad](/property-value/) (en inglés) para un rango rápido, y luego pedir una [opinión de valor](${BOV}) cuando quiera un número con el que pueda planear. Este artículo es información general, no asesoría legal, de impuestos ni de avalúo.`,
				],
			},
		],
		faqs: [
			{
				q: '¿Cuál es la diferencia entre una opinión de valor del corredor y un avalúo?',
				a: 'Una opinión de valor la prepara un corredor y le ayuda a fijar el precio y a promover una venta. Un avalúo lo prepara un valuador con licencia, normalmente para un prestamista, y respalda un préstamo u otra necesidad formal.',
			},
			{
				q: '¿Necesito un avalúo para vender mi edificio de apartamentos?',
				a: 'Por lo general no. Para decidir si vender y por cuánto anunciar el edificio, necesita una opinión de valor. Si necesita una valuación formal por otra razón, como una herencia o una disputa legal, pregunte a su abogado o a su contador.',
			},
			{
				q: '¿Cuánto cuesta una opinión de valor?',
				a: 'Los corredores normalmente dan una opinión de valor sin cargo cuando usted está considerando vender. Nuestra opinión de valor es gratis y confidencial.',
			},
			{
				q: '¿Quién paga el avalúo cuando se vende un edificio?',
				a: 'El prestamista del comprador pedirá un avalúo durante el escrow, y el valuador trabaja para el prestamista, no para el vendedor. Un avalúo se paga, por lo general quien lo necesita.',
			},
			{
				q: '¿Qué pasa si el avalúo del comprador sale por debajo del precio acordado?',
				a: 'El comprador puede tener que poner más efectivo, pedir un precio más bajo o retirarse si su contrato lo permite. Por eso importa fijar un precio bien respaldado por ventas comparables reales desde el principio.',
			},
			{
				q: '¿Qué tan confiable es una opinión de valor?',
				a: 'No es un avalúo formal ni garantiza lo que pagará un comprador. Es una opinión profesional, basada en las rentas y los gastos reales de su edificio y en ventas comparables recientes, sobre el precio al que probablemente se venderá.',
			},
		],
	},
	{
		slug: ES.ab1482,
		enSlug: 'ab-1482-rent-cap-2026',
		title: 'El límite de rentas de la AB 1482 se actualizó: lo que significa para los edificios posteriores a 1978 en Los Ángeles',
		seoTitle: 'Límite de Rentas AB 1482 en 2026: Lo que Deben Saber',
		description: 'El límite de la AB 1482 se actualizó el 1 de agosto de 2026. El nuevo máximo es 8.7% en Los Ángeles: qué edificios cubre y por qué importa.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/limite-ab-1482.webp',
			alt: 'Gráfica: el límite de la AB 1482 es el cambio del CPI de 3.7% más 5%, un aumento anual máximo de 8.7%.',
			width: 1200,
			height: 900,
		},
		related: [ES.rso, ES.inquilinos, ES.vender],
		sections: [
			{
				heading: 'Qué limita realmente la AB 1482',
				paragraphs: [
					'La Ley de Asamblea 1482 (AB 1482), la Ley de Protección de Inquilinos de California, ha limitado desde 2020 la mayoría de los aumentos de renta residencial a la cifra que sea menor: 10%, o 5% más el cambio porcentual del Índice de Precios al Consumidor (CPI) regional del año anterior. Esa cifra del CPI no es fija. Se vuelve a calcular cada año, región por región, lo que significa que el tope real en dólares de un aumento de renta cambia cada año aunque la ley misma no haya cambiado.',
				],
			},
			{
				heading: 'Por qué esto importa especialmente a los edificios posteriores a 1978 en Los Ángeles',
				paragraphs: [
					'La Ordenanza de Estabilización de Rentas (RSO) de la propia Ciudad de Los Ángeles cubre los edificios de apartamentos con certificado de ocupación emitido antes del 1 de octubre de 1978, y fija su propio límite de aumento anual, que generalmente es más bajo. Los edificios construidos en esa fecha o después normalmente quedan fuera de la RSO local.',
					'Para esos edificios sin RSO, una vez que pasan la exención de 15 años de la propia AB 1482 para la construcción nueva, la fórmula estatal de la AB 1482, y no la ordenanza de la Ciudad, es la que realmente limita cuánto se puede subir la renta cada año. Para una gran parte de los edificios de apartamentos posteriores a 1978 en Los Ángeles, este número basado en el CPI es el verdadero techo dentro del cual trabajan los dueños.',
				],
			},
			{
				heading: 'El nuevo máximo, vigente desde el 1 de agosto de 2026',
				paragraphs: [
					'Para los aumentos que entren en vigor a partir del 1 de agosto de 2026, el cambio del CPI de la región Los Ángeles-Long Beach-Anaheim fue de 3.7%, lo que fija el aumento máximo permitido en 8.7%, el cambio del CPI más 5%. Es más que el límite del año anterior, de 8.0% (3.0% del CPI más 5%).',
				],
			},
			{
				heading: 'Qué número aplica, y cuándo',
				paragraphs: [
					'Según la enmienda de la Ley de Alivio para Inquilinos, la cifra del CPI que aplica depende de la fecha en que entra en vigor el aumento. Un aumento que entre en vigor antes del 1 de agosto de 2026 usa el cambio del CPI del año anterior (3.0% para la región Los Ángeles-Long Beach-Anaheim, un máximo de 8.0%). Un aumento que entre en vigor a partir del 1 de agosto de 2026 usa la nueva cifra (3.7%, un máximo de 8.7%). Todos los porcentajes se redondean a la décima de punto más cercana.',
					'Estas cifras provienen de la Apartment Association of Greater Los Angeles (AAGLA), que cita a la Oficina de Estadísticas Laborales de Estados Unidos y al Departamento de Relaciones Industriales de California, y se actualizan en este mismo ciclo cada año.',
				],
			},
			{
				heading: 'Por qué importa al comprar o vender',
				paragraphs: [
					'Para un comprador que analiza una operación de valor agregado sin RSO, el límite de la AB 1482 es un techo legal real sobre qué tan rápido se pueden llevar las rentas actuales al nivel del mercado, y conviene confirmarlo con la cifra vigente y no con un número recordado de un año anterior.',
					'Para un dueño que decide si debe subir la renta y cuándo, conocer el límite exacto y vigente evita tanto dejar dinero sobre la mesa como pasarse sin querer de un límite que cambia cada año en el mismo ciclo del 1 de agosto.',
					'Esta es información general del mercado, no asesoría legal. Confirme el límite aplicable y su aplicación exacta a su propiedad con su abogado o su administrador de propiedades antes de aplicar cualquier aumento.',
				],
			},
		],
		faqs: [
			{
				q: '¿Cuál es el límite de aumento de rentas de la AB 1482 en Los Ángeles en 2026?',
				a: 'Para los aumentos que entren en vigor a partir del 1 de agosto de 2026, el máximo es 8.7%: el cambio del CPI de la región Los Ángeles-Long Beach-Anaheim (3.7%) más 5%. Un aumento que entre en vigor antes de esa fecha usa el máximo anterior, de 8.0%.',
			},
			{
				q: '¿Qué edificios cubre la AB 1482?',
				a: 'La AB 1482 es la ley estatal que limita la mayoría de los aumentos de renta residencial. En Los Ángeles, los edificios con certificado de ocupación anterior al 1 de octubre de 1978 están cubiertos por la Ordenanza de Estabilización de Rentas (RSO) de la Ciudad, y los más nuevos, una vez pasada la exención de 15 años para construcción nueva, quedan bajo el límite estatal.',
			},
			{
				q: '¿Cómo se calcula el límite de la AB 1482?',
				a: 'Es la cifra que sea menor entre 10% y 5% más el cambio porcentual del CPI regional del año anterior. Esa cifra del CPI se vuelve a calcular cada año, así que el tope real cambia cada año aunque la ley no haya cambiado.',
			},
			{
				q: '¿Qué cifra aplica a mi aumento de renta, la nueva o la anterior?',
				a: 'Depende de la fecha en que entra en vigor el aumento. Antes del 1 de agosto de 2026 se usa el máximo de 8.0%, y a partir de esa fecha, el de 8.7%.',
			},
			{
				q: '¿Cómo afecta el límite de la AB 1482 al comprar o vender un edificio?',
				a: 'Para un comprador, es un techo legal sobre qué tan rápido se pueden llevar las rentas al nivel del mercado, y conviene confirmarlo con la cifra vigente. Para un dueño, conocer el límite exacto evita tanto dejar dinero sobre la mesa como pasarse de un límite que cambia cada año.',
			},
			{
				q: '¿La AB 1482 reemplaza a la RSO de la Ciudad de Los Ángeles?',
				a: 'No. La RSO cubre los edificios con certificado de ocupación anterior al 1 de octubre de 1978 y fija su propio límite, generalmente más bajo. La AB 1482 es el límite estatal que aplica a los edificios más nuevos que quedan fuera de la RSO.',
			},
		],
	},
];
