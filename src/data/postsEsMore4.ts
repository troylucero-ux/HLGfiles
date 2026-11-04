// Spanish Insights articles, part 5 (see postsEs.ts for the format). Each mirrors an English post in posts.ts.
import type { PostEs } from './postsEs';
import { ES, BOV } from './esSlugs';

const p = (key: keyof typeof ES) => `/es/insights/${ES[key]}/`;

export const postsEsMore4: PostEs[] = [
	{
		slug: ES.fueraDelMercado,
		enSlug: 'selling-an-apartment-building-off-market-vs-listing-it-in-los-angeles',
		title: '¿Fuera del mercado o anunciado? Cómo vender un edificio de apartamentos en Los Ángeles',
		seoTitle: '¿Fuera del Mercado o Anunciado? Vender su Edificio en LA',
		description: '¿Vender su edificio en Los Ángeles fuera del mercado o anunciarlo? Ventajas y desventajas en precio, privacidad, rapidez e inquilinos.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/fuera-del-mercado-o-anunciado.webp',
			alt: 'Gráfica: ¿fuera del mercado o anunciado? Una venta fuera del mercado es privada pero llega a menos compradores. Un anuncio público crea competencia. Una venta dirigida a una lista selecta de compradores es el punto medio.',
			width: 1200,
			height: 900,
		},
		related: [ES.paso, ES.corredor, ES.vender],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'Vender fuera del mercado (off-market) significa ofrecer su edificio a un grupo limitado de compradores en lugar de promoverlo públicamente. Vender con un anuncio público significa promoverlo ampliamente a la mayor cantidad posible de compradores calificados.',
					'Una venta fuera del mercado puede ofrecer privacidad y menos molestias. Un anuncio amplio normalmente ofrece la mejor oportunidad de lograr el precio más alto. La decisión correcta depende de lo que más le importe a usted.',
					'Hay un punto medio: un mercadeo dirigido a una lista selecta de compradores comprobados.',
				],
			},
			{
				heading: 'Qué es una venta fuera del mercado',
				paragraphs: [
					'Una venta fuera del mercado, a veces llamada venta discreta o privada, ocurre sin un anuncio público. El corredor contacta directamente a un grupo pequeño de compradores calificados, muchas veces inversionistas que ya han comprado edificios parecidos. Es posible que los inquilinos y los vecinos nunca sepan que el edificio está a la venta.',
				],
			},
			{
				heading: 'Cómo es una venta anunciada',
				paragraphs: [
					'En una venta anunciada, el corredor promueve el edificio a todo el grupo de compradores: inversionistas, otros corredores y compradores de intercambios 1031, con un memorando de oferta, fotos, video y contacto directo. La meta es la competencia, porque varios compradores interesados suelen inclinar el precio y las condiciones a favor del vendedor.',
				],
			},
			{
				heading: 'Los argumentos a favor de vender fuera del mercado',
				paragraphs: [
					'Privacidad. Algunos dueños no quieren que los inquilinos, los empleados o los vecinos sepan que una venta es posible, y las familias que manejan una herencia muchas veces prefieren la discreción, como describimos en nuestra guía de [ventas de fideicomisos y herencias](/es/ventas-de-fideicomisos-y-herencias/).',
					'Menos molestias. Con menos compradores de visita, hay menos recorridos y menos visitas a las unidades de los inquilinos.',
					'Rapidez y sencillez. Cuando un comprador motivado ya conoce el tipo de edificio y el vecindario, el proceso puede avanzar rápido.',
				],
			},
			{
				heading: 'Los argumentos a favor de anunciar abiertamente',
				paragraphs: [
					'Más compradores significan más competencia, y la competencia es la forma más segura de saber lo que el mercado realmente pagará. Un proceso público también le da una idea clara del precio verdadero, lo que importa si no está seguro del valor de su edificio. Y los compradores que tienen una fecha límite, como los compradores de intercambios 1031, muchas veces están en el mercado y listos para competir.',
				],
			},
			{
				heading: 'La contrapartida',
				visual: 'opcionesTabla',
				paragraphs: [
					'El riesgo principal de una venta fuera del mercado es que usted nunca sabrá cuánto dejó sobre la mesa. Si solo unos pocos compradores ven el edificio, la mejor oferta puede ser menor que la que habría producido un mercado más amplio. El riesgo principal de una venta anunciada es la exposición: más gente se entera, los inquilinos pueden enterarse, y un edificio que se queda en el mercado puede empezar a verse estancado.',
				],
			},
			{
				heading: 'Un punto medio: mercadeo dirigido',
				paragraphs: [
					'Muchos dueños eligen algo intermedio. El corredor contacta a una lista selecta de compradores que están activos en su vecindario y en su tipo de edificio, sin un anuncio público. Así la venta se mantiene confidencial y aun así se crea algo de competencia.',
					'En 453 S Gramercy Pl, en Koreatown, por ejemplo, encontramos a un comprador fuera del mercado abierto con experiencia en inquilinos de muchos años con rentas por debajo del mercado, como describimos en el [caso de estudio](/case-studies/453-s-gramercy-pl-koreatown-apartments/) (en inglés).',
				],
			},
			{
				heading: 'Cómo decidir',
				paragraphs: [
					'Pregúntese qué tan importante es la privacidad, qué tan seguro está del valor de su edificio, qué tan pronto necesita cerrar y si está haciendo un intercambio hacia otra propiedad con una fecha límite.',
					`Luego pregunte a su corredor a cuántos compradores calificados contactaría, y cómo sabe que esos compradores pagarán un precio de mercado. Una buena respuesta incluye nombres, compras recientes y un plan para el caso de que la primera ronda no produzca una oferta sólida. Nuestra guía sobre [cómo elegir un corredor multifamiliar](${p('corredor')}) enumera más preguntas que hacer, y nuestra [guía paso a paso para vender](${p('paso')}) muestra dónde encaja el mercadeo en el proceso.`,
				],
			},
			{
				heading: 'Empecemos a conversar',
				paragraphs: [
					`Podemos repasar con usted las opciones para su edificio y sus metas. Empiece con una [opinión de valor](${BOV}) gratis y confidencial, o vea lo que podría esperar con la [calculadora gratuita](/property-value/) (en inglés). Este artículo es información general, no asesoría legal ni de impuestos. Hable con su abogado y su contador sobre su situación.`,
				],
			},
		],
		faqs: [
			{
				q: '¿Qué significa vender un edificio fuera del mercado (off-market)?',
				a: 'Una venta fuera del mercado, a veces llamada venta discreta o privada, ocurre sin un anuncio público. El corredor contacta directamente a un grupo pequeño de compradores calificados, muchas veces inversionistas que ya han comprado edificios parecidos, y es posible que los inquilinos y los vecinos nunca sepan que el edificio está a la venta.',
			},
			{
				q: '¿Obtengo un mejor precio si anuncio mi edificio públicamente?',
				a: 'Un anuncio amplio normalmente ofrece la mejor oportunidad de lograr el precio más alto, porque más compradores significan más competencia, y la competencia es la forma más segura de saber lo que el mercado realmente pagará.',
			},
			{
				q: '¿Cuáles son las ventajas de una venta fuera del mercado?',
				a: 'Privacidad, menos molestias para los inquilinos, porque hay menos recorridos y visitas a las unidades, y rapidez y sencillez cuando un comprador motivado ya conoce el tipo de edificio y el vecindario.',
			},
			{
				q: '¿Cuál es el riesgo de vender fuera del mercado?',
				a: 'Que usted nunca sabrá cuánto dejó sobre la mesa. Si solo unos pocos compradores ven el edificio, la mejor oferta puede ser menor que la que habría producido un mercado más amplio.',
			},
			{
				q: '¿Hay una opción intermedia entre vender en privado y anunciar el edificio?',
				a: 'Sí. El corredor contacta a una lista selecta de compradores activos en su vecindario y en su tipo de edificio, sin un anuncio público. Así la venta se mantiene confidencial y aun así se crea algo de competencia.',
			},
			{
				q: '¿Cómo decido entre vender fuera del mercado o anunciar mi edificio?',
				a: 'Pregúntese qué tan importante es la privacidad, qué tan seguro está del valor de su edificio, qué tan pronto necesita cerrar y si está haciendo un intercambio 1031 con una fecha límite. Luego pregunte a su corredor a cuántos compradores calificados contactaría y cómo sabe que pagarán un precio de mercado.',
			},
		],
	},
	{
		slug: ES.servicios,
		enSlug: 'utility-bill-diligence-la-apartment-owners',
		title: 'Por qué los dueños cuidadosos de apartamentos en Los Ángeles revisan sus recibos de servicios cada mes',
		seoTitle: 'Por Qué Revisar los Recibos de Servicios de su Edificio',
		description: 'Una fuga de agua silenciosa puede costarle más de $100,000 en valor. Dos ejemplos reales, las cuentas y el hábito mensual que la detecta a tiempo.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/recibos-de-servicios-fugas.webp',
			alt: 'Gráfica: una fuga sin detectar que cuesta $8,000 al año puede reducir el valor de un edificio en unos $114,000 con una tasa de capitalización de 7%.',
			width: 1200,
			height: 900,
		},
		related: [ES.valorar, ES.vender, ES.paso],
		sections: [
			{
				heading: 'Un gasto que los dueños muchas veces pasan por alto',
				paragraphs: [
					'El cobro de las rentas recibe atención constante. Todo dueño sabe exactamente quién pagó, quién se atrasó y cuánto se debe. Los recibos de servicios casi nunca reciben la misma atención. Se pagan en piloto automático, ya sea que los pague el dueño directamente o una empresa administradora, y la suposición suele ser que el número es el que es ese mes.',
					'Esa suposición es el problema. Un recibo de agua, de drenaje o de gas no es un costo fijo. Cambia por razones reales, y una de las más comunes es la que nadie quiere: una fuga que empezó a correr y nunca se notó.',
				],
			},
			{
				heading: 'El riesgo real: una fuga que corre por meses',
				paragraphs: [
					'En nuestra experiencia, el mayor riesgo no es un error de cobro de una sola vez. Normalmente es una fuga de plomería que empieza en silencio, no se detecta y sigue corriendo por meses, a veces cerca de un año, antes de que alguien la relacione con el recibo.',
					'Una fuga así no se anuncia. Solo aparece como un número un poco más alto cada mes, fácil de pasar por alto si nadie compara realmente los recibos de un mes con otro.',
				],
			},
			{
				heading: 'Lo que vemos cuando tomamos un nuevo listado',
				paragraphs: [
					'Cuando preparamos por primera vez una opinión de valor, trabajamos con gastos normalizados, un cálculo razonable de lo que la propiedad debería estar gastando. No es hasta que firmamos el listado y obtenemos los recibos reales (agua, drenaje, basura, seguro) cuando tenemos una imagen verdadera de cómo ha estado operando la propiedad.',
					'Esto nos ha pasado más de una vez. Solo en los últimos 12 meses, nos pasó dos veces.',
					'En una propiedad, un edificio de 10 unidades en Pico-Union manejado por una empresa profesional de administración, notamos un salto grande en el recibo de agua que había empezado más o menos un año antes y nunca bajó. Recomendamos llamar a un plomero para revisar la propiedad en busca de fugas. Encontraron una. Una vez reparada, el recibo de agua se normalizó casi de inmediato. Esa fuga sin detectar le costó al dueño unos $8,000 en gasto extra de agua que se pudo evitar si se hubiera detectado cuando empezó.',
					'En otra propiedad, un edificio de 7 unidades en Koreatown, ocurrió el mismo patrón en menor escala. Detectamos el salto, recomendamos un plomero, y se encontró y se reparó una fuga. Eso le ahorró al dueño unos $4,000.',
				],
			},
			{
				heading: 'Cómo $8,000 de agua se convierten en $114,000 de valor perdido',
				visual: 'fugaFormula',
				paragraphs: [
					'$8,000 o $4,000 al año no suenan a mucho dinero por sí solos. Pero un edificio de apartamentos no se valora por sus gastos de forma aislada: se valora por su ingreso operativo neto, capitalizado a una tasa de capitalización de mercado. Con una tasa aproximada de 7%, esos $8,000 extra al año de gasto de agua equivalen a unos $114,000 de valor suprimido de la propiedad. El sobrecosto de $4,000 equivale a unos $57,000.',
					'Eso es lo que toma por sorpresa a la mayoría de los dueños. Una fuga que parece un dolor de cabeza de mantenimiento en realidad es un problema de valor, y con las tasas de capitalización a las que se venden los edificios de apartamentos, un sobrecosto mensual relativamente pequeño tiene un efecto desproporcionado, casi exponencial, en lo que la propiedad vale al final.',
				],
			},
			{
				heading: 'La mejor forma de detectarlo: siga sus gastos como porcentaje',
				paragraphs: [
					'Nuestro consejo a los dueños es sencillo: no se limite a revisar si se pagó un recibo de servicios, siga qué porcentaje de sus gastos mensuales totales representa ese recibo, en una hoja de cálculo que actualice cada mes.',
					'Observe ese porcentaje con el tiempo. Si su recibo de agua pasa de representar más o menos 35% de sus gastos mensuales un mes a 45% al siguiente, ese tipo de salto es una señal de alerta por sí solo, sin importar el monto en dólares, y es razón suficiente para llamar a un plomero a revisar si hay fugas antes de que siga corriendo otro mes, y mucho menos otro año.',
				],
			},
			{
				heading: 'La diligencia a tiempo rinde, esté vendiendo o no',
				paragraphs: [
					`Aunque no tenga planes de vender ahora, detectar una fuga a tiempo en lugar de un año después es un ahorro real y constante que llega directo a sus resultados. Y si se prepara para llevar una propiedad al mercado, limpiar un gasto como este antes de anunciarla es una de las formas más directas de proteger, o mejorar, lo que puede pedir por ella. Vea cómo los compradores valoran un edificio en nuestra guía sobre [cómo valorar un edificio de apartamentos](${p('valorar')}).`,
					`Si no está seguro de si los gastos de su propiedad están corriendo como deberían, con gusto le echamos un vistazo. Empiece con una [opinión de valor](${BOV}) gratis.`,
				],
			},
		],
		faqs: [
			{
				q: '¿Por qué debo revisar los recibos de servicios de mi edificio de apartamentos cada mes?',
				a: 'Porque un recibo de agua, de drenaje o de gas no es un costo fijo. Cambia por razones reales, y una de las más comunes es una fuga que empezó a correr y nunca se notó. Una fuga así solo aparece como un número un poco más alto cada mes, fácil de pasar por alto si nadie compara los recibos.',
			},
			{
				q: '¿Cuánto puede costarme una fuga de agua sin detectar?',
				a: 'En una propiedad que vimos, un edificio de 10 unidades en Pico-Union, una fuga sin detectar costó unos $8,000 en gasto extra de agua. En otra, un edificio de 7 unidades en Koreatown, fueron unos $4,000.',
			},
			{
				q: '¿Cómo afecta un gasto extra de servicios el valor de mi edificio?',
				a: 'Un edificio se valora por su ingreso operativo neto, capitalizado a una tasa de capitalización de mercado. Con una tasa aproximada de 7%, $8,000 extra al año de gasto de agua equivalen a unos $114,000 de valor suprimido, y $4,000 equivalen a unos $57,000.',
			},
			{
				q: '¿Cómo puedo detectar una fuga a tiempo?',
				a: 'Siga qué porcentaje de sus gastos mensuales totales representa cada recibo de servicios, en una hoja de cálculo que actualice cada mes. Si su recibo de agua pasa de más o menos 35% de sus gastos a 45%, es una señal de alerta, sin importar el monto en dólares.',
			},
			{
				q: '¿Qué debo hacer si el recibo de agua de mi edificio sube de repente?',
				a: 'Llame de inmediato a un plomero para que revise la propiedad en busca de fugas, antes de que siga corriendo otro mes. En los casos que vimos, una vez reparada la fuga, el recibo de agua se normalizó casi de inmediato.',
			},
			{
				q: '¿Importa revisar los recibos de servicios si no pienso vender?',
				a: 'Sí. Detectar una fuga a tiempo en lugar de un año después es un ahorro real y constante que llega directo a sus resultados. Y si se prepara para vender, limpiar un gasto así antes de anunciar el edificio es una de las formas más directas de proteger lo que puede pedir por él.',
			},
		],
	},
	{
		slug: ES.ab628,
		enSlug: 'ab-628-stove-refrigerator-law-la-apartment-owners',
		title: 'AB 628: la ley de California sobre estufas y refrigeradores en unidades de renta',
		seoTitle: 'Ley AB 628 de Estufa y Refrigerador: Guía para Dueños',
		description: 'La AB 628 exige estufa y refrigerador en buen estado en las rentas desde 2026. Exenciones, retiros del mercado y preparación para vender.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/ab-628-estufa-refrigerador.webp',
			alt: 'Gráfica: la AB 628 exige una estufa y un refrigerador en buen estado en las unidades de renta para los contratos firmados, modificados o prorrogados desde el 1 de enero de 2026, con 30 días para reparar un aparato retirado del mercado.',
			width: 1200,
			height: 900,
		},
		related: [ES.sb721, ES.paso, ES.vender],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'La AB 628, firmada el 6 de octubre de 2025, agrega una estufa en buen estado y un refrigerador en buen estado a la lista de cosas que una unidad de renta de California debe tener para considerarse habitable.',
					'Aplica a los contratos de renta firmados, modificados o prorrogados a partir del 1 de enero de 2026.',
					'Un inquilino puede poner su propio refrigerador, pero solo bajo las reglas escritas en el contrato, y un propietario no puede hacer de eso una condición para rentar. La ley no tiene una opción parecida para las estufas.',
					'Algunas viviendas están exentas, incluidas las unidades de ocupación de una sola habitación y las unidades con cocinas compartidas. Para un dueño que se prepara para vender, revisar los aparatos es una forma sencilla de evitar sorpresas en la revisión del comprador.',
				],
			},
			{
				heading: 'Qué exige la ley',
				paragraphs: [
					'La AB 628 modifica la sección 1941.1 del Código Civil, la lista de características que debe tener una vivienda para que no se considere no habitable. La lista ya incluye cosas como la protección contra la intemperie, la plomería, la calefacción y el servicio eléctrico. Para los contratos cubiertos, ahora también incluye:',
					'Una estufa mantenida en buen estado de funcionamiento y capaz de generar calor de forma segura para cocinar.',
					'Un refrigerador mantenido en buen estado de funcionamiento y capaz de conservar alimentos de forma segura.',
					'La ley considera que una estufa o un refrigerador sujeto a un retiro del mercado (recall) por parte del fabricante o de una entidad pública no es capaz de cocinar ni de conservar alimentos de forma segura.',
				],
			},
			{
				heading: 'Qué contratos están cubiertos',
				paragraphs: [
					'Los nuevos requisitos aplican solo a un contrato de renta firmado, modificado o prorrogado a partir del 1 de enero de 2026. Un contrato nuevo firmado este año está cubierto. Una renovación o un contrato modificado también. La ley habla de contratos y no dice cómo trata a un contrato de renta de mes a mes que simplemente continúa, así que pregunte a su abogado cómo manejar esas unidades. Lo más seguro es planear que todas las unidades cumplan con la norma.',
				],
			},
			{
				heading: 'La opción del refrigerador que pone el inquilino',
				paragraphs: [
					'En los edificios más antiguos, muchas veces hay inquilinos que traen su propio refrigerador. La ley lo permite, con condiciones. El propietario y el inquilino tienen que acordarlo cuando se firma el contrato, y el contrato tiene que incluir una declaración sustancialmente en esta forma: que bajo la ley estatal el propietario está obligado a dar un refrigerador en buen estado de funcionamiento, y que al marcar la casilla el inquilino reconoce que pidió traer el suyo y que es responsable de mantenerlo en buen estado de funcionamiento.',
					'El contrato también tiene que decir que el inquilino puede avisar por escrito, con 30 días de anticipación, que ya no quiere conservar su propio refrigerador, y que al terminar los 30 días el propietario instalará uno en buen estado de funcionamiento. Un propietario no puede condicionar el contrato de renta a que el inquilino ponga un refrigerador, y no es responsable de mantener el que el inquilino ponga.',
					'La ley no ofrece un arreglo equivalente para las estufas, así que planee poner usted la estufa.',
				],
			},
			{
				heading: 'Retiros del mercado: la regla de 30 días',
				paragraphs: [
					'Si una estufa o un refrigerador está sujeto a un retiro del mercado por parte del fabricante o de una entidad pública, el propietario tiene que repararlo o reemplazarlo dentro de los 30 días siguientes a recibir el aviso del retiro. La ley no dice quién debe dar ese aviso. El plazo de 30 días no le quita al inquilino ningún recurso que ya tenga bajo la sección 1942 del Código Civil, que le permite reparar los deterioros que hacen la vivienda no habitable, o mudarse, cuando un propietario los descuida.',
					'Conviene comparar las marcas y los números de modelo de sus aparatos con la [base de datos de retiros](https://www.cpsc.gov/Recalls) (en inglés) de la Comisión de Seguridad de los Productos del Consumidor de Estados Unidos.',
				],
			},
			{
				heading: 'Quién está exento',
				paragraphs: [
					'Los requisitos de estufa y refrigerador no aplican a la vivienda de apoyo permanente, a las unidades de ocupación de una sola habitación que dan espacio para vivir y dormir para uso exclusivo del ocupante (incluso aquellas donde los ocupantes comparten las instalaciones para preparar alimentos), a las unidades de un hotel residencial, ni a las viviendas de una instalación con cocinas compartidas o comunales, incluidas las instalaciones de vida asistida.',
				],
			},
			{
				heading: 'Qué pasa si una unidad no cumple',
				paragraphs: [
					'El proyecto de ley no crea una multa aparte. La consecuencia es que una unidad que carece sustancialmente de una estufa o un refrigerador en buen estado se considera no habitable bajo la sección 1941.1, y se aplican los recursos que el inquilino ya tiene para una vivienda no habitable. Por eso un aparato que falta, está descompuesto o fue retirado del mercado es una exposición real y no un tecnicismo.',
				],
			},
			{
				heading: 'Por qué importa cuando vende',
				visual: 'ab628Pasos',
				paragraphs: [
					'La inspección del comprador y los recorridos por las unidades revelarán aparatos que faltan, viejos o que son del inquilino. Si varias unidades los tienen, un comprador puede pedir un crédito en el precio o incluir el costo en su oferta. Adelantarse cuesta menos que negociarlo en el escrow (el proceso en que un tercero neutral guarda el dinero y los documentos hasta cerrar la venta).',
					`Antes de anunciar: recorra las unidades y anote cada estufa y cada refrigerador, con quién es el dueño y su antigüedad. Revise si hay retiros del mercado. Reemplace lo que esté descompuesto. Para los refrigeradores de los inquilinos, documente el lenguaje del contrato que exige la ley cada vez que se firme o se renueve un contrato. Guarde los registros con los expedientes de los contratos para tenerlos listos para los compradores. Nuestra [guía paso a paso para vender](${p('paso')}) enumera los demás documentos que piden los compradores.`,
					`La AB 628 es parte de una serie de reglas recientes de habitabilidad que afectan a los edificios antiguos, junto con las [inspecciones de balcones de la SB 721](${p('sb721')}) y las [reglas de aire acondicionado y los paneles eléctricos](/es/insights/${ES.aire}/). Los compradores calculan el costo combinado, así que una imagen clara de lo que está hecho y de lo que falta ayuda a su venta.`,
				],
			},
			{
				heading: 'Hable con nosotros',
				paragraphs: [
					`Si está pensando vender un edificio antiguo, pida una [opinión de valor](${BOV}) gratis y le diremos qué puntos es probable que planteen los compradores de su vecindario. O empiece con la [calculadora gratuita de valor de propiedad](/property-value/) (en inglés).`,
					'Este artículo es información general, no asesoría legal. Confirme con un abogado cómo aplica la AB 628 a sus contratos de renta.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[Información Legislativa de California: AB 628 (McKinnor), registrada el 6 de octubre de 2025, Capítulo 342, Estatutos de 2025](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB628) (en inglés)',
					'[Comisión de Seguridad de los Productos del Consumidor de Estados Unidos: Retiros del mercado](https://www.cpsc.gov/Recalls) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Qué exige la AB 628 de California sobre estufas y refrigeradores?',
				a: 'Para los contratos de renta firmados, modificados o prorrogados a partir del 1 de enero de 2026, una unidad de renta debe tener una estufa y un refrigerador en buen estado de funcionamiento. Es parte de la lista de características que debe tener una vivienda para considerarse habitable (sección 1941.1 del Código Civil).',
			},
			{
				q: '¿Mi inquilino puede poner su propio refrigerador?',
				a: 'Sí, pero solo bajo las reglas escritas en el contrato: ambas partes lo acuerdan al firmar, el contrato incluye la declaración que exige la ley, y el inquilino puede avisar con 30 días de anticipación que ya no quiere conservar el suyo, y entonces el propietario instala uno. Un propietario no puede condicionar el contrato de renta a que el inquilino ponga un refrigerador. Para las estufas no hay una opción parecida.',
			},
			{
				q: '¿Qué pasa si una estufa o un refrigerador fue retirado del mercado (recall)?',
				a: 'El propietario tiene que repararlo o reemplazarlo dentro de los 30 días siguientes a recibir el aviso del retiro. Conviene comparar las marcas y los modelos de sus aparatos con la base de datos de retiros de la Comisión de Seguridad de los Productos del Consumidor.',
			},
			{
				q: '¿Qué viviendas están exentas de la AB 628?',
				a: 'La vivienda de apoyo permanente, las unidades de ocupación de una sola habitación para uso exclusivo del ocupante, las unidades de un hotel residencial y las viviendas de una instalación con cocinas compartidas o comunales, incluidas las instalaciones de vida asistida.',
			},
			{
				q: '¿Cuál es la multa si mi unidad no tiene estufa o refrigerador?',
				a: 'La ley no crea una multa aparte. Una unidad que carece sustancialmente de una estufa o un refrigerador en buen estado se considera no habitable, y se aplican los recursos que el inquilino ya tiene para una vivienda no habitable. Por eso es una exposición real y no un tecnicismo.',
			},
			{
				q: '¿Cómo afecta la AB 628 la venta de mi edificio?',
				a: 'La inspección del comprador y los recorridos por las unidades revelarán aparatos que faltan, viejos o que son del inquilino, y un comprador puede pedir un crédito en el precio. Antes de anunciar, recorra las unidades, anote cada aparato, revise si hay retiros del mercado y guarde los registros con los expedientes de los contratos.',
			},
		],
	},
];
