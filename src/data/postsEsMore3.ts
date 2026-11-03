// Spanish Insights articles, part 4 (see postsEs.ts for the format). Each mirrors an English post in posts.ts.
import type { PostEs } from './postsEs';
import { ES, BOV } from './esSlugs';

const p = (key: keyof typeof ES) => `/es/insights/${ES[key]}/`;

export const postsEsMore3: PostEs[] = [
	{
		slug: ES.sb721,
		enSlug: 'sb-721-balcony-inspection-los-angeles-apartment-owners',
		title: 'Inspecciones de balcones de la SB 721 en Los Ángeles: lo que los dueños de edificios deben hacer ahora',
		seoTitle: 'Inspección de Balcones SB 721 en Los Ángeles: Guía',
		description: 'El plazo de inspección de balcones y escaleras de la SB 721 fue el 1 de enero de 2026. Qué inspeccionar, quién puede hacerlo, reparaciones, multas y venta.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/sb-721-balcones.webp',
			alt: 'Gráfica: el plazo de la SB 721 ya pasó. Las inspecciones vencían el 1 de enero de 2026 y cada seis años después, para edificios con tres o más unidades y balcones, terrazas y escaleras elevados de madera. Las multas son de $100 a $500 por día si las reparaciones se atrasan.',
			width: 1200,
			height: 900,
		},
		related: [ES.paso, ES.valorar, ES.vender],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'El plazo ya pasó. La SB 721 de California exige que los edificios de apartamentos con tres o más unidades hagan inspeccionar sus balcones, terrazas y escaleras exteriores elevados antes del 1 de enero de 2026, y cada seis años después. Si todavía no ha hecho la suya, está atrasado.',
					'Cubre más edificios de los que los dueños esperan. Un triplex o un fourplex cuenta, y también cualquier edificio con balcones, pasillos o escaleras apoyados en madera a más de seis pies del suelo.',
					'La inspección es solo el primer paso. Los problemas hay que tramitarlos con permiso y repararlos en plazos fijos, y un dueño que deja que las reparaciones se alarguen puede enfrentar multas civiles de $100 a $500 por día y un gravamen sobre el edificio.',
					'El informe acompaña al edificio. La ley exige que usted lo conserve durante dos ciclos de inspección y que lo entregue al comprador cuando venda, así que importa en cada venta.',
				],
			},
			{
				heading: 'Qué exige la ley',
				paragraphs: [
					'La SB 721 se aprobó en 2018, después de un colapso mortal de un balcón en Berkeley. Hoy es la Sección 17973 del Código de Salud y Seguridad de California. Los dueños de edificios con tres o más unidades de vivienda multifamiliar tienen que contratar a un profesional con licencia para inspeccionar los elementos exteriores elevados, incluidas las partes que soportan la carga y la impermeabilización que las protege.',
					'El inspector verifica que esos elementos estén en condiciones generalmente seguras y libres de peligros causados por pudrición, deterioro, descomposición o modificaciones indebidas. La inspección tiene que completarse antes del 1 de enero de 2026, y antes del 1 de enero cada seis años después, así que la siguiente vence el 1 de enero de 2032.',
				],
			},
			{
				heading: 'Qué edificios y qué partes están cubiertos',
				paragraphs: [
					'La ley los llama “elementos exteriores elevados”: balcones, terrazas, porches, escaleras, pasillos y estructuras de entrada, incluidos sus soportes y barandales. Para estar cubierto, un elemento tiene que extenderse más allá de las paredes exteriores del edificio, tener una superficie para caminar a más de seis pies sobre el nivel del suelo, estar diseñado para que las personas lo usen y depender, en todo o en gran parte, de la madera o de productos de madera para su soporte estructural.',
					'Eso puede describir los edificios antiguos de varios pisos con estructura de madera en Los Ángeles que tienen escaleras, pasillos o balcones exteriores. Las estructuras de acero o de concreto generalmente no están cubiertas, ni tampoco los patios al nivel del suelo. Los edificios de condominios se rigen por otra ley, la SB 326, que tiene sus propias reglas.',
				],
			},
			{
				heading: 'Quién puede hacer la inspección',
				paragraphs: [
					'La ley dice que el inspector tiene que ser uno de los siguientes: un arquitecto con licencia, un ingeniero civil o estructural con licencia, un contratista de construcción con licencia “A”, “B” o “C-5” y al menos cinco años de experiencia construyendo edificios de madera de varios pisos, o una persona certificada como inspector de edificios o funcionario de construcción por una asociación reconocida. El inspector no puede ser empleado de la jurisdicción local mientras hace la inspección, y el dueño es quien lo contrata y lo paga.',
					'En nuestra opinión, conviene contratar a un inspector que no vaya a presentar también una oferta por las reparaciones. Separar las dos cosas mantiene independientes los hallazgos y facilita comparar las ofertas de reparación.',
				],
			},
			{
				heading: 'Qué incluyen la inspección y el informe',
				paragraphs: [
					'El inspector tiene que revisar una muestra de al menos el 15% de cada tipo de elemento exterior elevado, y examinar las partes que soportan la carga y la impermeabilización con una revisión visual directa o un medio comparable. La evaluación tiene que abarcar el estado actual de cada elemento, cuánto tiempo debe seguir funcionando y si hace falta alguna inspección adicional.',
					'Usted tiene derecho a un informe escrito, sellado o firmado por el inspector, dentro de los 45 días siguientes a que termine la inspección. Tiene que incluir fotografías, los resultados de cualquier prueba y suficiente narración para servir de punto de partida de la próxima inspección, y tiene que indicar si algún elemento es una amenaza inmediata para los ocupantes.',
				],
			},
			{
				heading: 'Si el inspector encuentra un problema',
				visual: 'sb721Pasos',
				paragraphs: [
					'El plazo depende de qué tan grave sea el problema. Si el inspector dice que un elemento es una amenaza inmediata, es una emergencia. Usted tiene que actuar de inmediato, y mantener a las personas fuera del balcón o de la escalera hasta terminar las reparaciones cuenta como cumplimiento. Después, el inspector tiene que confirmar las reparaciones de emergencia e informar a la agencia local de cumplimiento. Un informe que recomienda reparaciones inmediatas también tiene que llegar a la agencia local dentro de los 15 días siguientes a que se complete el informe.',
					'Para los problemas que no son una amenaza inmediata, tiene que solicitar un permiso de reparación dentro de los 120 días siguientes a recibir el informe. Una vez aprobado el permiso, tiene 120 días para terminar el trabajo, a menos que la agencia local le conceda más tiempo. Las reparaciones tienen que hacerlas un contratista con licencia, seguir las recomendaciones del inspector y las especificaciones del fabricante, cumplir con el Código de Normas de Construcción de California y satisfacer los requisitos locales.',
				],
			},
			{
				heading: 'Multas por atrasarse',
				paragraphs: [
					'Si las reparaciones no se terminan en 180 días, el inspector tiene que notificar tanto a usted como a la agencia local de cumplimiento. Si todavía no están terminadas 30 días después de esa notificación, al dueño se le impone una multa civil de no menos de $100 y no más de $500 por día, según una tabla de cargos que fija la agencia local, hasta que se complete el trabajo.',
					'La agencia local también puede registrar un gravamen de seguridad del edificio sobre la propiedad, que tiene la fuerza y la prioridad de un gravamen judicial y puede ejecutarse. Las agencias locales pueden recuperar sus costos de cumplimiento, y las ciudades y los condados pueden fijar requisitos más estrictos que los de la ley estatal.',
				],
			},
			{
				heading: 'Cómo lo maneja Los Ángeles',
				paragraphs: [
					'Para los edificios de apartamentos, el Departamento de Vivienda de Los Ángeles (LAHD) maneja el programa, y llama a estas las inspecciones “E3”. Su guía repite el plazo estatal: 1 de enero de 2026, y cada seis años después. El LAHD también recibe las quejas de cumplimiento del código E3 por su línea directa, (866) 557-7368, así que un edificio que no ha cumplido puede ser denunciado.',
					'El Departamento de Construcción y Seguridad de Los Ángeles (LADBS) maneja los condominios y la parte del código de construcción. Su boletín sobre los elementos exteriores elevados, revisado en abril de 2026, dice que los planos de balcones y otras superficies elevadas para caminar tienen que mostrar los detalles del sistema de barrera contra la humedad, y que la barrera no se puede cubrir hasta que se inspeccione y se apruebe. Una reparación que reconstruya o vuelva a impermeabilizar un balcón puede tener que seguir ese proceso, así que pregunte a su contratista y al LADBS antes de que empiece el trabajo.',
					'Una advertencia del LAHD: algunas empresas privadas han estado enviando por correo avisos sobre inspecciones “E3” o de “balcones” que parecen cartas oficiales del gobierno. El LAHD dice que esos avisos no vienen de la Ciudad. Los avisos reales del LAHD llevan el logotipo de la Ciudad de Los Ángeles o del LAHD y la dirección de una oficina del LAHD. Si no está seguro, llame al LAHD al (866) 557-7368 antes de responder o de pagarle a alguien.',
				],
			},
			{
				heading: '¿Se le pasó el plazo? Qué hacer ahora',
				paragraphs: [
					'No espere a que haya una queja. Contrate ahora a un inspector calificado y programe la inspección lo antes posible. Mientras antes exista el informe, antes empieza a correr el plazo de las reparaciones y antes puede demostrar que el edificio va por buen camino.',
					'Si ya tiene un informe, verifique que lo hizo uno de los inspectores que enumera la ley y que cubre cada tipo de elemento. Un informe anterior a 2019 ya no le sirve: esa exención duró solo hasta el 1 de enero de 2026.',
					'Si el inspector señala una amenaza inmediata, mantenga de inmediato a las personas fuera de ese balcón o escalera, y explique a sus inquilinos por qué. Para las demás inspecciones, dé a los inquilinos el aviso por escrito de costumbre antes de que alguien entre a una unidad, que para visitas que no son de emergencia generalmente es de 24 horas.',
					'Pregunte a su abogado si alguna parte del costo se puede recuperar bajo las reglas de renta de Los Ángeles. No dé por hecho que se puede.',
				],
			},
			{
				heading: 'Vender un edificio: el informe pasa al comprador',
				paragraphs: [
					'La ley dice que las copias de todos los informes de inspección se tienen que conservar en los registros permanentes del dueño por al menos dos ciclos de inspección, y que se tienen que revelar y entregar al comprador en el momento de cualquier venta posterior. Espere que un comprador pida el informe desde el principio, y que pregunte por cualquier reparación pendiente.',
					'En nuestra experiencia, un problema desconocido en un balcón es el tipo de sorpresa que se convierte en una rebaja de precio durante el escrow. En [1513 Arlington Ave](/case-studies/1513-arlington-ave-arlington-heights-apartments/) (en inglés), un edificio de 9 unidades, nuestro vendedor no quiso pagar el reemplazo de los subpaneles eléctricos ni la inspección de la SB 721 antes del cierre, así que estructuramos la venta para que el comprador asumiera las dos cosas. El edificio se vendió en $1,400,000 y nuestro vendedor completó su intercambio 1031.',
					`Si puede, haga la inspección antes de anunciar el edificio. Un informe limpio es un punto a favor, y una reparación conocida con una cotización es más fácil de valorar para un comprador que una pregunta abierta. Nuestra guía sobre [cómo valoran los compradores un edificio de apartamentos](${p('valorar')}) explica cómo el estado del edificio y el trabajo pendiente se descuentan del precio, y nuestra [guía paso a paso para vender](${p('paso')}) muestra dónde encaja. Lo que usted conserva también depende de los impuestos, así que vea nuestra guía sobre [ganancias de capital y recuperación de la depreciación](${p('impuestos')}) y, para ventas más grandes en la Ciudad de Los Ángeles, la [Medida ULA](${p('ula')}).`,
				],
			},
			{
				heading: 'Consejos para los dueños',
				paragraphs: [
					'Consiga dos o tres cotizaciones para cualquier reparación y compárelas con las recomendaciones escritas del inspector. Pregunte a cada contratista si su cotización incluye los permisos y los detalles de impermeabilización que exige el LADBS.',
					'Trate la impermeabilización como mantenimiento, no como un arreglo de una sola vez. Los selladores y los recubrimientos se desgastan, y el inspector tiene que calcular cuánto tiempo debe seguir funcionando cada elemento. Planear eso cuesta menos que las reparaciones de emergencia.',
					'Lleve un expediente de cada edificio: las calificaciones del inspector, el informe, las fotografías, los permisos, las facturas de las reparaciones y cualquier correspondencia con la Ciudad. La ley espera que usted conserve los informes por dos ciclos de inspección.',
					'Pida a su inspector que programe un informe final cuando terminen las reparaciones. La ley le permite solicitarlo, y es una prueba útil para un comprador, un prestamista o la Ciudad.',
				],
			},
			{
				heading: 'Hable con nosotros',
				paragraphs: [
					`Si está pensando vender un edificio con balcones o escaleras exteriores, podemos ayudarle a decidir si inspeccionar y reparar primero o vender en las condiciones actuales, y cómo fijar el precio de cualquiera de las dos formas. Empiece con una [opinión de valor](${BOV}) gratis y confidencial. ¿No sabe a quién contratar? Nuestra guía sobre [cómo elegir un corredor multifamiliar](${p('corredor')}) explica qué buscar.`,
					'Este artículo es información general, no asesoría legal ni de ingeniería. La ley y los procedimientos de Los Ángeles pueden cambiar, así que confirme los detalles con un inspector con licencia y con su abogado.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[Código de Salud y Seguridad de California, sección 17973 (SB 721), según la enmienda de 2025](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=17973) (en inglés)',
					'[Departamento de Vivienda de Los Ángeles: Ley de inspección de elementos exteriores elevados (E3), edificios de apartamentos](https://housing.lacity.gov/e3-apartments) (en inglés)',
					'[LADBS, Boletín informativo P/BC 2026-144: Normas de construcción de aplicación inmediata, elementos exteriores elevados](https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/ib-p-bc-2017-144-exterior-elevated-elements.pdf) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Qué es la SB 721 y aplica a mi edificio?',
				a: 'La SB 721 exige que los dueños de edificios con tres o más unidades multifamiliares hagan inspeccionar los elementos exteriores elevados (balcones, terrazas, porches, escaleras y pasillos) por un profesional con licencia. Aplica si esos elementos están a más de seis pies del suelo y dependen en todo o en gran parte de la madera para su soporte. Un triplex o un fourplex cuenta.',
			},
			{
				q: '¿Cuándo vencía la inspección de la SB 721 y cuándo es la siguiente?',
				a: 'La primera inspección vencía el 1 de enero de 2026, y después hay que hacerla cada seis años, así que la siguiente vence el 1 de enero de 2032. Si todavía no ha hecho la suya, está atrasado: contrate ahora a un inspector calificado.',
			},
			{
				q: '¿Quién puede hacer la inspección de balcones de la SB 721?',
				a: 'Un arquitecto con licencia, un ingeniero civil o estructural con licencia, un contratista con licencia “A”, “B” o “C-5” y al menos cinco años de experiencia construyendo edificios de madera de varios pisos, o una persona certificada como inspector de edificios o funcionario de construcción por una asociación reconocida. El dueño contrata y paga al inspector.',
			},
			{
				q: '¿Qué pasa si el inspector encuentra un problema en un balcón?',
				a: 'Si es una amenaza inmediata, tiene que actuar de inmediato y mantener a las personas fuera del balcón o la escalera hasta terminar las reparaciones. Para los demás problemas, tiene que solicitar un permiso de reparación dentro de los 120 días siguientes a recibir el informe, y tiene 120 días después de aprobado el permiso para terminar el trabajo, a menos que la agencia local le conceda más tiempo.',
			},
			{
				q: '¿Cuáles son las multas por no cumplir con la SB 721?',
				a: 'Si las reparaciones no están terminadas 30 días después de la notificación del inspector, al dueño se le impone una multa civil de $100 a $500 por día hasta que se complete el trabajo. La agencia local también puede registrar un gravamen de seguridad del edificio sobre la propiedad.',
			},
			{
				q: '¿Tengo que entregar el informe de la SB 721 al comprador si vendo mi edificio?',
				a: 'Sí. La ley exige conservar los informes por al menos dos ciclos de inspección y revelarlos y entregarlos al comprador en el momento de cualquier venta posterior. Un informe limpio es un punto a favor, y una reparación conocida con una cotización es más fácil de valorar para un comprador.',
			},
		],
	},
	{
		slug: ES.ulaConservar,
		enSlug: 'measure-ula-hold-or-sell-la-apartment-building',
		title: 'Medida ULA: ¿debe conservar o vender su edificio de apartamentos en Los Ángeles?',
		seoTitle: 'Medida ULA: ¿Conservar o Vender su Edificio en Los Ángeles?',
		description: 'La Medida ULA grava todo el precio de venta, no su ganancia. Cómo cambia la decisión de conservar o vender, con ejemplos numéricos.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/medida-ula-conservar-o-vender.webp',
			alt: 'Gráfica: el impuesto de la Medida ULA se cobra sobre el precio de venta, no sobre su ganancia, con tasas de 0%, 4% o 5.5% según el precio. Esperar no lo elimina, así que haga los números con la calculadora gratuita.',
			width: 1200,
			height: 900,
		},
		related: [ES.ula, ES.impuestos, ES.vender],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'La Medida ULA se cobra sobre el precio de venta, no sobre su ganancia. Se debe tanto si usted ganó dinero con el edificio como si lo perdió.',
					'Esperar no hace que el impuesto desaparezca. Es un costo de vender en cualquier momento, así que para la mayoría de los dueños afecta cuándo y a qué precio venden más que si venden o no.',
					'El impuesto importa más cuando un precio cae cerca de $5.4 millones o de $10.9 millones. Entre esas líneas, unos puntos porcentuales sobre todo el precio pueden costar más que un año del ingreso del edificio.',
					'Decida primero sus metas y luego calcule el impuesto. Nuestra calculadora gratuita de la Medida ULA muestra cuánto se quedaría usted a cualquier precio.',
				],
			},
			{
				heading: 'Por qué la Medida ULA es una pregunta de conservar o vender',
				paragraphs: [
					`La mayoría de los impuestos de una venta dependen de cuánto ganó usted. La Medida ULA no. La Ciudad de Los Ángeles la cobra sobre el valor de la propiedad que se vende, y para los cierres después del 30 de junio de 2026 la tasa es 0% en $5.4 millones o menos, 4% por encima de $5.4 millones y por debajo de $10.9 millones, y 5.5% en $10.9 millones o más. La tasa se aplica a todo el precio. Si quiere ver cómo funciona, empiece con nuestra [guía de la Medida ULA](${p('ula')}).`,
					'Como es un porcentaje fijo del precio, afecta igual a un dueño con una base baja y a uno con una base alta. Por eso cambia la forma en que los dueños piensan en conservar: para un edificio por encima de la primera línea, una venta trae un costo grande y seguro que no tiene nada que ver con qué tan bien le ha ido al edificio.',
				],
			},
			{
				heading: 'Cuánto cuesta el impuesto a distintos precios',
				visual: 'ulaPrecios',
				paragraphs: [
					'En $5,400,000, el impuesto ULA es cero. En $5,400,001, es 4% del precio completo, unos $216,000.',
					'En $6,000,000, el impuesto ULA es de $240,000. El impuesto de transferencia regular de la Ciudad, de 0.45%, suma $27,000, y el impuesto del condado de Los Ángeles, de $1.10 por cada $1,000, suma $6,600, para un total de $273,600 en impuestos de transferencia, o 4.56% del precio.',
					'En $12,000,000, el impuesto ULA es de $660,000. Con los impuestos regulares de la Ciudad y del condado, los impuestos de transferencia suman $727,200, o 6.06% del precio.',
					'Estas cifras son antes de la comisión del corredor, de otros costos de cierre y de sus impuestos sobre la renta. Puede probar su propio precio en la [calculadora de la Medida ULA](/measure-ula-calculator/) (en inglés).',
				],
			},
			{
				heading: 'El impuesto en términos de ingreso',
				visual: 'ula87',
				paragraphs: [
					'Una forma útil de juzgar el impuesto es compararlo con lo que produce el edificio. Suponga que un edificio se vende en $6,000,000 con una tasa de capitalización de 5.5%. Su ingreso operativo neto es de unos $330,000 al año. El impuesto ULA de $240,000 equivale a unos 8.7 meses de ese ingreso, pagados una sola vez, el día que usted vende.',
					'Ese enfoque no le dice si debe vender. Le dice cuánto cuesta la salida, para que pueda ponerlo en la balanza junto con lo demás: el ingreso que sigue ganando si conserva el edificio, las reparaciones y el trabajo de cumplimiento que vienen, y lo que piensa hacer con el dinero de la venta.',
				],
			},
			{
				heading: 'Razones por las que algunos dueños deciden conservar',
				paragraphs: [
					'El ingreso continúa. Cada año que conserva el edificio, sigue cobrando su ingreso operativo neto, y el impuesto no vence hasta que usted venda.',
					'Los umbrales suben. La Ciudad ajusta las dos líneas cada año por inflación, así que un edificio que hoy está apenas arriba de una línea podría quedar por debajo después de un ajuste futuro, si su valor no sube más rápido. Confirmamos las cifras vigentes con la Ciudad antes de fijar el precio, porque cambian cada julio.',
					`Un traspaso planeado. Algunos dueños piensan pasar el edificio a la familia. Eso no evita la Medida ULA, porque una venta posterior por encima de una línea también la debería, pero el impuesto sobre la renta de un heredero en una venta poco después de heredar muchas veces es pequeño por la regla de la base actualizada (stepped-up basis). Pregunte a su contador y a su abogado cómo le aplica. Nuestra guía sobre [edificios de apartamentos heredados](${p('heredado')}) cubre lo básico.`,
				],
			},
			{
				heading: 'Razones por las que algunos dueños venden de todos modos',
				paragraphs: [
					'El impuesto es real, pero es solo un lado de la decisión. Los dueños siguen vendiendo por encima de las líneas por razones que no tienen nada que ver con la ULA. Pueden estar listos para dejar de administrar, enfrentar reparaciones o trabajo de cumplimiento costosos, querer pasar su capital de un edificio a varios, o preocuparse por cuánto de su patrimonio está en una sola propiedad.',
					`También ayuda recordar que esperar no elimina el impuesto. Si va a vender algún día, y el edificio todavía estará por encima de una línea entonces, el impuesto es parte de la salida de cualquier manera. Conviene calcularlo desde ahora, pero no debe atraparlo en conservar un edificio que ya no encaja con sus planes. Un [intercambio 1031](/es/intercambios-1031/) puede diferir su impuesto sobre las ganancias de capital, pero no exime una venta de la Medida ULA.`,
				],
			},
			{
				heading: 'Preguntas que hacerse antes de decidir',
				paragraphs: [
					'¿Cuánto recibiría neto al precio de hoy, y a un precio apenas por debajo de la línea más cercana? Pruebe los dos en la [calculadora](/measure-ula-calculator/) (en inglés).',
					'¿Cuánto produce el edificio después de gastos, y qué reparaciones o costos de cumplimiento vienen?',
					'¿Qué haré con el dinero, y cómo se compara con lo que el edificio produce ahora?',
					`¿Mi precio está lo bastante cerca de una línea como para que un cambio modesto de precio me deje más dinero? Si es así, una [opinión de valor](${BOV}) puede mostrar su neto a varios precios.`,
					'¿Qué asesor de impuestos y qué abogado confirmarán cómo me aplican la ULA y mis impuestos sobre la renta antes de anunciar el edificio?',
				],
			},
			{
				heading: 'Si su edificio está cerca de una línea',
				paragraphs: [
					`Un edificio con un precio apenas por encima de $5.4 millones o de $10.9 millones está en un tramo donde un precio más alto puede dejarle menos dinero en el bolsillo, lo que describimos en nuestra guía sobre la [zona muerta arriba de cada umbral](${p('ula')}). La calculadora lo señala y muestra el precio que tendría que alcanzar para quedar a mano. Si su edificio está en ese rango, la decisión no es solo conservar o vender. También es a qué precio vender.`,
					'Tenga cuidado con cualquier plan para reestructurar una venta y evitar el impuesto. La Ciudad revisa los pagos con su propio proceso de cumplimiento, y cobrará la diferencia si encuentra un pago insuficiente. Lleve cualquier idea de ese tipo primero a un abogado de impuestos.',
				],
			},
			{
				heading: '¿Su edificio no está en la Ciudad de Los Ángeles?',
				paragraphs: [
					'La Medida ULA termina en el límite de la Ciudad de Los Ángeles. Los edificios en [West Hollywood](/submarkets/west-hollywood/) y [Beverly Hills](/submarkets/beverly-hills/) (en inglés) no deben un impuesto de transferencia de la ciudad, y [Santa Mónica](/submarkets/santa-monica/) (en inglés) tiene su propio impuesto, la Medida GS, a partir de $8 millones. La calculadora cubre todos estos casos.',
				],
			},
			{
				heading: 'Hable con nosotros',
				paragraphs: [
					`Si está considerando vender y su edificio podría quedar cerca de una línea, empiece con la [calculadora de la Medida ULA](/measure-ula-calculator/) (en inglés) y luego pida una [opinión de valor](${BOV}) gratis. Le mostraremos cuánto recibiría neto a distintos precios y fechas de cierre, y si conservar el edificio le conviene.`,
					'Este artículo es información general, no asesoría legal ni de impuestos. Confirme con su contador o abogado de impuestos cómo aplica la Medida ULA a su venta.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[Oficina de Finanzas de la Ciudad de Los Ángeles: Impuesto de transferencia de bienes raíces y preguntas frecuentes sobre la Medida ULA](https://finance.lacity.gov/faq/measure-ula) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿La Medida ULA se cobra sobre mi ganancia o sobre el precio de venta?',
				a: 'Sobre el precio de venta, no sobre su ganancia. Se debe tanto si usted ganó dinero con el edificio como si lo perdió. Para los cierres después del 30 de junio de 2026, la tasa es 0% en $5.4 millones o menos, 4% por encima de $5.4 millones y por debajo de $10.9 millones, y 5.5% en $10.9 millones o más, sobre todo el precio.',
			},
			{
				q: '¿Si espero a vender, desaparece el impuesto de la Medida ULA?',
				a: 'No. Es un costo de vender en cualquier momento, así que para la mayoría de los dueños afecta cuándo y a qué precio venden más que si venden o no. Si el edificio todavía estará por encima de una línea cuando venda, el impuesto es parte de la salida de cualquier manera.',
			},
			{
				q: '¿Cuánto pagaría de impuestos de transferencia si vendo mi edificio en $6 millones?',
				a: 'El impuesto ULA es de $240,000. El impuesto de transferencia regular de la Ciudad (0.45%) suma $27,000 y el del condado ($1.10 por cada $1,000) suma $6,600, para un total de $273,600, o 4.56% del precio. Son cifras antes de la comisión, otros costos de cierre e impuestos sobre la renta.',
			},
			{
				q: '¿Cuándo importa más la Medida ULA para mi decisión de vender?',
				a: 'Cuando un precio cae cerca de $5.4 millones o de $10.9 millones. Entre esas líneas, unos puntos porcentuales sobre todo el precio pueden costar más que un año del ingreso del edificio, y un precio más alto puede dejarle menos dinero en el bolsillo.',
			},
			{
				q: '¿Puedo evitar la Medida ULA conservando el edificio y pasándolo a mis hijos?',
				a: 'No la evita, porque una venta posterior por encima de una línea también la debería. Pero el impuesto sobre la renta de un heredero en una venta poco después de heredar muchas veces es pequeño por la regla de la base actualizada. Pregunte a su contador y a su abogado cómo le aplica.',
			},
			{
				q: '¿Puedo reestructurar la venta para evitar la Medida ULA?',
				a: 'Tenga mucho cuidado. La Ciudad revisa los pagos con su propio proceso de cumplimiento y cobrará la diferencia si encuentra un pago insuficiente. Lleve cualquier idea de ese tipo primero a un abogado de impuestos.',
			},
		],
	},
];
