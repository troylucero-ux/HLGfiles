// Spanish Insights articles, part 6 (see postsEs.ts for the format). The first two mirror English posts in posts.ts;
// the last four were written in Spanish first, from facts already published in our English articles, and have no `enSlug`.
import type { PostEs } from './postsEs';
import { ES, BOV, PAGES_ES } from './esSlugs';

const p = (key: keyof typeof ES) => `/es/insights/${ES[key]}/`;

export const postsEsMore5: PostEs[] = [
	{
		slug: ES.sb1365,
		enSlug: 'sb-1365-emergency-rent-cap-la-apartment-owners',
		title: 'SB 1365: el límite de rentas de emergencia de California cubrirá contratos de cualquier duración',
		seoTitle: 'SB 1365: Límite de Rentas de Emergencia en California',
		description: 'La SB 1365 extiende el límite de 10% de California para aumentos de renta en emergencias a todo contrato. Qué deben hacer los dueños de edificios en Los Ángeles.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/sb-1365-limite-emergencia.webp',
			alt: 'Gráfica: bajo la SB 1365, el límite de 10% de California para aumentos de renta después de una emergencia aplica a contratos de cualquier duración, a partir del 1 de enero de 2027.',
			width: 1200,
			height: 900,
		},
		related: [ES.ab1482, ES.rso, ES.inquilinos],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'El gobernador Newsom firmó la SB 1365 el 30 de septiembre de 2026. Cambia la parte de la ley de California contra el abuso de precios (price gouging) que limita los aumentos de renta después de una emergencia declarada.',
					'El límite de 10% ahora aplicará a las viviendas de renta con un contrato de cualquier duración. Antes, cubría solo las viviendas con un contrato inicial de un año o menos.',
					'Las excepciones anteriores ahora son defensas afirmativas. Si usted cobra más de 10% durante una emergencia, tendría que probar que la excepción aplica.',
					'Como es una ley ordinaria y no urgente, entra en vigor el 1 de enero de 2027. No cambia el control de rentas. La Ordenanza de Estabilización de Rentas de la Ciudad y la AB 1482 siguen fijando sus propios límites, más bajos.',
				],
			},
			{
				heading: 'Cómo funciona el límite de rentas en una emergencia',
				paragraphs: [
					'La sección 396 del Código Penal de California es la ley estatal contra el abuso de precios. Cuando el presidente o el gobernador proclaman un estado de emergencia, o un condado, una ciudad o una ciudad y condado declaran una emergencia local, es ilegal subir el precio de la renta de una vivienda más de 10% para un inquilino actual o futuro. El límite dura 30 días después de la proclamación o declaración, o el período más largo que dure la prórroga de la proclamación, y los funcionarios locales pueden prorrogarlo en tramos de hasta 30 días.',
					'Una violación es un delito menor (misdemeanor), punible con hasta un año en la cárcel del condado, una multa de hasta $10,000, o ambas. También se trata como una práctica comercial ilegal, lo que abre la puerta a recursos civiles además de la sanción penal. La SB 1365 modifica la sección 396 y no cambia esas sanciones.',
				],
			},
			{
				heading: 'Qué cambia la SB 1365',
				visual: 'sb1365Tabla',
				paragraphs: [
					'Contratos de cualquier duración. Bajo la ley anterior, “vivienda” significaba una vivienda de renta con un contrato inicial de no más de un año. La SB 1365 la define como cualquier vivienda de renta, sin importar la duración del contrato inicial. Un contrato largo ya no pondrá una unidad fuera del límite.',
					'Las excepciones se vuelven defensas. La ley anterior eximía ciertos aumentos. La nueva ley los convierte en defensas afirmativas, lo que significa que un propietario acusado de violar el límite tiene que probar los hechos que colocan el aumento dentro de la defensa.',
					'Dos defensas para los aumentos de renta. Primero, que el inquilino aceptó el aumento por contrato antes de que se proclamara la emergencia. Segundo, que el aumento se debe directamente al costo de reparaciones o ampliaciones más allá del mantenimiento normal que se incurrieron en el año anterior a la proclamación, y que la unidad estaba rentada, anunciada u ofrecida en renta cuando se incurrieron los costos, o que el propietario puede probar que, dentro de ese año, ya existía la intención de ofrecer la unidad en renta dentro de los seis meses siguientes al trabajo.',
					'Una regla más estricta para tarifas diarias. Para las viviendas que no se ofrecían a una tarifa diaria en el año anterior a la emergencia pero que sí se ofrecen después, la ley fija el precio de renta en una treintava parte del monto que aplica a las viviendas que no se ofrecían en renta el año anterior. Eso afecta sobre todo a las rentas de corto plazo.',
				],
			},
			{
				heading: 'Cómo se mide el precio de renta',
				paragraphs: [
					'El límite se mide a partir de la renta que el inquilino realmente pagó. Para una unidad rentada en el año anterior a la emergencia, la base es la renta realmente pagada. Para una unidad no rentada pero ofrecida en ese año, es la renta más reciente que se ofreció. Para una unidad que no se rentó ni se ofreció en absoluto el año anterior, la ley usa el 160% de la renta justa de mercado (fair market rent) que fija el Departamento de Vivienda y Desarrollo Urbano de Estados Unidos (HUD), más 5% si la unidad se ofrece totalmente amueblada.',
					'Para una unidad que queda vacía durante la emergencia y está cubierta por una ordenanza local de control de rentas, la base es la mayor entre la renta real del inquilino anterior y el monto basado en el HUD. La ley no le permite agregar cargos por otros bienes o servicios, como jardinería o servicios públicos, a la base.',
				],
			},
			{
				heading: 'Lo que no cambia',
				paragraphs: [
					`El control de rentas sigue fijando el límite. La ley dice que no autoriza a un propietario a cobrar más de lo que permite una ordenanza local de control de rentas, así que un edificio RSO sigue bajo el límite de la Ciudad. Para los edificios más nuevos, vea nuestra guía sobre el [límite de rentas de la AB 1482 en 2026](${p('ab1482')}), que fija su propio techo.`,
					'Los desalojos legales siguen permitidos. La ley dice que no impide que un propietario desaloje a un inquilino por cualquier razón legal. Sí prohíbe desalojar a un inquilino residencial y luego rentar la unidad a otra persona a un precio superior al que se podía cobrar al inquilino desalojado bajo el límite, aunque un desalojo que se inició legalmente antes de la proclamación puede continuar.',
				],
			},
			{
				heading: 'Qué significa para los dueños en Los Ángeles',
				paragraphs: [
					'Planee las renovaciones según el calendario. Si se ha declarado una emergencia donde está su edificio, no dé por hecho que un contrato de dos años o una renovación a largo plazo pone un aumento mayor fuera del límite después del 1 de enero de 2027.',
					'Guarde las pruebas. Para apoyarse en cualquiera de las dos defensas necesita registros: el acuerdo firmado del inquilino y su fecha, las facturas y los permisos que muestren cuándo se incurrieron los costos de reparación, y las listas de rentas, los anuncios o los avisos que muestren que la unidad estaba rentada u ofrecida en renta en ese momento. Organícelos desde ahora, porque la carga de la prueba es suya.',
					'Conozca las emergencias locales. Tanto las declaraciones estatales como las locales activan el límite, y los funcionarios locales pueden prorrogarlo. Revise los anuncios de su ciudad y su condado, y pregunte a su abogado o a su asociación de apartamentos antes de enviar cualquier aumento superior a 10% durante una emergencia declarada.',
					`Espere que los compradores pregunten. Un comprador que revisa un edificio que subió las rentas en las semanas siguientes a una emergencia puede preguntar cómo cumplen esos aumentos con la ley. Los registros en orden facilitan la venta. Vea nuestras guías sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}) y sobre [prepararse para vender](${p('paso')}).`,
				],
			},
			{
				heading: '¿Y la emergencia de El Niño?',
				paragraphs: [
					'El 21 de septiembre de 2026, el gobernador proclamó un estado de emergencia en todo el estado ante un El Niño fuerte que se pronostica, lo que describimos en nuestra [lista de verificación de El Niño para dueños de apartamentos](/insights/el-nino-2026-la-apartment-owners-checklist/) (en inglés). Como señalamos ahí, la Asociación de Apartamentos de California (California Apartment Association) informó que la proclamación suspende expresamente las restricciones contra el abuso de precios “en este momento”. La SB 1365 entra en vigor el 1 de enero de 2027, así que no rige lo que usted haga hoy. Pregunte a su abogado cómo aplica si todavía hay una emergencia vigente cuando entre en vigor.',
				],
			},
			{
				heading: 'Hable con nosotros',
				paragraphs: [
					`Si está pensando vender, podemos ayudarle a presentar su lista de rentas y sus registros de la forma en que los compradores lo esperan. Empiece con una [opinión de valor](${BOV}) gratis o con la [calculadora gratuita de valor de propiedad](/property-value/) (en inglés).`,
					'Este artículo es información general, no asesoría legal. Confirme con un abogado cómo aplica la SB 1365 a su propiedad.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[Información Legislativa de California: SB 1365 (Allen), registrada el 30 de septiembre de 2026, Capítulo 1028, Estatutos de 2026](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB1365) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Qué cambia la SB 1365 sobre el límite de rentas después de una emergencia?',
				a: 'El límite de 10% para los aumentos de renta después de una emergencia declarada ahora aplicará a las viviendas de renta con un contrato de cualquier duración, no solo a las de un año o menos. Además, las excepciones anteriores se vuelven defensas afirmativas que el propietario tiene que probar.',
			},
			{
				q: '¿Cuándo entra en vigor la SB 1365?',
				a: 'El 1 de enero de 2027. El gobernador la firmó el 30 de septiembre de 2026, y como es una ley ordinaria y no urgente, no rige lo que usted haga hoy.',
			},
			{
				q: '¿Cuánto puedo subir la renta después de una emergencia declarada?',
				a: 'Generalmente no más de 10% durante 30 días después de la proclamación o declaración, o el período más largo que dure su prórroga, salvo que aplique una defensa. Una violación es un delito menor y también una práctica comercial ilegal.',
			},
			{
				q: '¿Qué defensas puedo usar si subí la renta más de 10% durante una emergencia?',
				a: 'Dos: que el inquilino aceptó el aumento por contrato antes de la emergencia, o que el aumento se debe directamente al costo de reparaciones o ampliaciones más allá del mantenimiento normal incurridas en el año anterior. En ambos casos usted tiene que probar los hechos, así que guarde los registros.',
			},
			{
				q: '¿La SB 1365 cambia el control de rentas de la Ciudad de Los Ángeles?',
				a: 'No. La ley dice que no autoriza a un propietario a cobrar más de lo que permite una ordenanza local de control de rentas. La RSO y la AB 1482 siguen fijando sus propios límites, más bajos.',
			},
			{
				q: '¿Cómo afecta la SB 1365 la venta de mi edificio?',
				a: 'Un comprador que revisa un edificio que subió las rentas en las semanas siguientes a una emergencia puede preguntar cómo cumplen esos aumentos con la ley. Tener los registros en orden, como los acuerdos firmados, las facturas y las listas de rentas, facilita la venta.',
			},
		],
	},
	{
		slug: ES.aire,
		enSlug: 'air-conditioning-law-los-angeles-apartment-owners-electrical-panel',
		title: 'Aire acondicionado en apartamentos de Los Ángeles: qué significa para los dueños la regla de 82 grados del condado y en qué está la Ciudad',
		seoTitle: 'Aire Acondicionado en LA: Regla de 82°F del Condado',
		description: 'Ninguna ley exige aire acondicionado en cada apartamento de LA. La regla de 82°F del condado y la situación de la Ciudad. Consejos sobre el panel eléctrico.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/aire-acondicionado-82-grados.webp',
			alt: 'Gráfica: ninguna ley exige aire acondicionado en cada apartamento de Los Ángeles, pero vienen reglas de enfriamiento. El condado fija un máximo de 82 grados desde el 1 de enero de 2027 en áreas no incorporadas, y la Ciudad de Los Ángeles votó a favor de una regla similar. Revise su panel eléctrico ahora.',
			width: 1200,
			height: 900,
		},
		related: [ES.sb721, ES.ab628, ES.valorar],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'Dónde están las cosas hoy (octubre de 2026): la Ciudad de Los Ángeles no ha adoptado una regla de aire acondicionado ni de temperatura máxima para apartamentos. Su Concejo votó a favor de buscar una, y la regla del condado de Los Ángeles aplica solo en áreas no incorporadas.',
					'Ninguna ley exige que un dueño instale aire acondicionado en cada apartamento. Lo que existe es más limitado: el condado de Los Ángeles tiene un límite de temperatura interior de 82°F para las rentas en áreas no incorporadas, y la Ciudad de Los Ángeles votó a favor de avanzar hacia la misma norma. Ninguna de las dos dice “instale aire acondicionado”. Dicen que la unidad tiene que mantenerse lo bastante fresca, y cómo lo logre depende de usted.',
					'Donde la regla aplica, el condado no exige mejoras eléctricas, pero recomienda con firmeza que las unidades puedan soportar de forma segura aparatos de enfriamiento. En un edificio antiguo, el sistema eléctrico suele ser la verdadera limitación, no el aire acondicionado.',
					'Los inquilinos en las áreas del condado ya tienen derecho a conectar un aire acondicionado portátil sin penalización. Aun donde eso no sea la ley, espere que más inquilinos lo hagan, lo que pone más carga sobre el cableado y los subpaneles viejos.',
					'Lo práctico para un dueño es averiguar desde ahora qué pueden soportar sus paneles y su cableado, probar primero las soluciones pasivas económicas, y planear cualquier trabajo eléctrico para el momento que usted elija y no el que elija una queja.',
				],
			},
			{
				heading: '¿Hay una ley que exija aire acondicionado en cada unidad?',
				visual: 'aireTabla',
				paragraphs: [
					'No. La buscamos, porque los dueños siguen oyendo que existe. Hay tres cosas distintas que se mezclan, y ninguna es una orden de instalar aire acondicionado.',
					'Primero, la SB 655 de California, firmada en 2025, agregó la Sección 17914 al Código de Salud y Seguridad. Declara que es política del estado que todas las viviendas puedan alcanzar y mantener una temperatura interior máxima segura, y dice a las agencias estatales que consideren esa política, incluso cuando escriban reglamentos a partir del 1 de enero de 2027. No impone una obligación a un propietario, y la ley dice que no amplía ninguna obligación del estado. Piénsela como una señal de hacia dónde va la regulación estatal. Los propios hallazgos del proyecto de ley señalan que las normas de construcción de California ya fijan una temperatura interior mínima de 68°F pero no tienen un máximo.',
					'Segundo, el condado de Los Ángeles adoptó una ordenanza que fija una temperatura interior máxima de 82°F en las unidades de renta de las áreas no incorporadas del condado. Es la que la mayoría de los dueños realmente pregunta.',
					'Tercero, hasta donde podemos encontrar, la Ciudad de Los Ángeles no ha adoptado su propia regla. El 17 de febrero de 2026, el Concejo Municipal aprobó por unanimidad una moción que ordena a la Ciudad adoptar una norma de 82°F acorde a la ordenanza del condado. El comunicado del propio Concejo señala que hoy se exige a los dueños dar calefacción pero no un método de enfriamiento, y la moción también pide al LADWP un informe sobre los programas de incentivos para dueños de apartamentos. Una moción inicia el proceso; no es la ordenanza en sí, y no hemos encontrado una ordenanza de la Ciudad ya adoptada. Confirme el estado actual con el Departamento de Vivienda de Los Ángeles antes de tomar decisiones, porque esto podría avanzar rápido.',
				],
			},
			{
				heading: 'Qué dice la regla de 82 grados del condado de Los Ángeles',
				paragraphs: [
					'La ordenanza del condado aplica a las unidades de renta en áreas no incorporadas del condado de Los Ángeles. No aplica dentro de las ciudades incorporadas, lo que incluye la Ciudad de Los Ángeles, Santa Mónica, Beverly Hills y West Hollywood, a menos que esas ciudades adopten algo parecido. Quedan fuera las unidades ocupadas por su dueño, las casas móviles, las unidades vacías y las propiedades que otra agencia de gobierno ya inspeccionó en materia de habitabilidad.',
					'Donde aplica, el propietario es responsable de asegurar que las habitaciones habitables puedan mantenerse a 82°F o menos. La aplicación empieza el 1 de enero de 2027, o cuando el condado apruebe la cuota relacionada, si es más tarde, y se basa en quejas. El condado ha descrito un enfoque que empieza por la educación y por las prácticas de enfriamiento pasivo.',
					'La ordenanza da más tiempo a los propietarios de “propiedades pequeñas”. Según la guía del condado, tienen que cumplir la norma en al menos una habitación habitable por unidad antes del 1 de enero de 2027 y en todas las habitaciones habitables antes del 1 de enero de 2032. El condado define a un propietario pequeño de forma estricta: por ejemplo, alguien que controla una propiedad de renta de no más de 10 unidades, o hasta tres propiedades de 10 unidades o menos en total, y no una corporación ni una LLC con un miembro corporativo. Compare la definición del condado con la forma en que está estructurada su propiedad.',
					'Los dueños que necesitan mejoras para cumplir pueden pedir una prórroga. La presentación del condado describe una posible prórroga de dos años, así que no espere hasta el último momento para pedirla.',
				],
			},
			{
				heading: 'Lo que pueden hacer los inquilinos',
				paragraphs: [
					'Según la regla del condado, los inquilinos pueden agregar enfriamiento portátil o no mecánico, como un aire acondicionado de ventana, un ventilador o cortinas oscuras. Tienen que avisar por escrito al propietario con al menos cinco días de anticipación antes de instalarlo, seguir las guías de seguridad del fabricante y no alterar la unidad.',
					'A los inquilinos no se les puede desalojar, penalizar ni cobrar más por instalar enfriamiento portátil, y un propietario no puede subir la renta ni agregar cargos por ello. El costo de una unidad portátil no se puede trasladar al inquilino. La página del condado para propietarios no dice quién paga la electricidad que esas unidades usan, así que consúltelo con su abogado.',
					'Otros costos en que incurra un propietario para cumplir pueden recuperarse mediante el proceso de la Ordenanza de Estabilización de Rentas y Protección de Inquilinos del condado, que requiere una solicitud y una revisión y está sujeto al límite de aumento de renta. La Ciudad de Los Ángeles tiene sus propias reglas de renta, así que no dé por hecho que el mismo camino aplicaría a un edificio dentro de la Ciudad.',
				],
			},
			{
				heading: 'Por qué importa el subpanel eléctrico',
				paragraphs: [
					'Los edificios de apartamentos antiguos de Los Ángeles no se cablearon para aire acondicionado. Un edificio de los años 1950 o 1960 puede tener un servicio principal dimensionado para luces, un refrigerador y una estufa, con un panel pequeño en cada unidad o un panel compartido que sirve a varias unidades. Si se agrega un aire acondicionado de ventana o un mini-split en cada unidad en una tarde calurosa, un panel que sirvió bien por décadas puede llegar a su límite.',
					'En realidad son cuatro preguntas: cuánta capacidad tiene el servicio principal, cuánto espacio queda en el panel que alimenta cada unidad, en qué condición están el panel y el cableado, y si hay espacios libres para interruptores donde poner un circuito dedicado. Un panel puede tener suficiente capacidad eléctrica pero ningún espacio físico para otro interruptor, y también puede ocurrir lo contrario.',
					'Muchas unidades de ventana pueden conectarse a un circuito estándar. Las unidades más grandes, y la mayoría de los mini-splits sin ductos instalados de forma permanente, necesitan su propio circuito dedicado. El caso preocupante es el de los inquilinos que conectan una unidad grande a un circuito sobrecargado de la cocina o de la recámara: en el mejor caso se disparan los interruptores y, en el peor, se sobrecalienta el cableado.',
					'En nuestra experiencia, el panel eléctrico también es donde se ponen a prueba las operaciones. En [1513 Arlington Ave](/case-studies/1513-arlington-ave-arlington-heights-apartments/) (en inglés), un edificio de 9 unidades, el reemplazo del subpanel fue una de las cosas que nuestro vendedor no quiso pagar antes del cierre. Estructuramos la venta para que el comprador lo asumiera, y el edificio se vendió en $1,400,000. Los compradores y sus inspectores examinan con cuidado los paneles viejos, y las nuevas reglas de enfriamiento les dan una razón más.',
				],
			},
			{
				heading: 'Paneles que merecen atención adicional',
				paragraphs: [
					'Algunas marcas antiguas de paneles tienen mala reputación. Los inspectores de casas y de edificios multifamiliares señalan los paneles Federal Pacific Electric (Stab-Lok) y Zinsco, y la preocupación es que los interruptores quizá no se disparen cuando deben. No somos ingenieros y no hemos podido verificar un retiro federal del mercado, así que tómelo como una razón para que un electricista con licencia los revise y no como una conclusión.',
					'El seguro es el lado práctico. Algunas aseguradoras preguntan por ciertos tipos de panel o les cobran un recargo, así que conviene preguntar a su agente de seguros antes de que un electricista le diga lo que tiene.',
					'Algunos edificios de los años 1960 y principios de los 1970 también tienen cableado de aluminio en los circuitos derivados, que necesita conectores y cuidados distintos. Si su edificio es de esa época, mencióneselo al electricista cuando pida la evaluación.',
				],
			},
			{
				heading: 'Permisos y a quién contratar',
				paragraphs: [
					'Reemplazar un panel o agregar circuitos en la Ciudad de Los Ángeles generalmente requiere un permiso eléctrico del Departamento de Construcción y Seguridad de Los Ángeles (LADBS), e instalar un mini-split puede requerir también un permiso mecánico. El LADBS publica una solicitud de permiso eléctrico que cubre el trabajo en apartamentos y condominios. Confirme los permisos de su proyecto específico con el LADBS o con su contratista antes de que empiece el trabajo.',
					'Contrate a un electricista con licencia para hacer una evaluación por escrito, que incluya un cálculo de carga, en lugar de adivinar. Pida la marca y la antigüedad del panel, el tamaño del servicio principal y de los paneles de las unidades, el número de espacios libres para interruptores, el estado del cableado y una lista con precios de lo que costaría poner un circuito de enfriamiento dedicado en cada unidad.',
					'Si hay que agrandar el servicio principal del edificio, intervendrá la compañía de servicios, y eso puede agregar tiempo de espera. Pregunte con anticipación.',
				],
			},
			{
				heading: 'Consejos para los dueños',
				paragraphs: [
					'Empiece con el enfriamiento pasivo. Los recubrimientos reflectantes para techos, las persianas o películas para ventanas, los toldos, los ventiladores de techo y los árboles de sombra reducen el calor interior y son los primeros pasos a los que apunta la guía del condado. También son la forma más barata de ver hasta dónde puede llegar sin tocar el sistema eléctrico.',
					'Haga una evaluación eléctrica antes de necesitarla. Aunque su edificio esté en la Ciudad de Los Ángeles y todavía no aplique ninguna regla, saber qué pueden soportar sus paneles le permite presupuestar. La propia guía del condado recomienda confirmar que su cableado cumpla con el código y que haya enchufes donde los inquilinos usarán aparatos de enfriamiento.',
					`Combine los trabajos. Si una unidad está vacía, es el mejor momento para reemplazar su panel o instalar un circuito dedicado, porque no molestará a un inquilino ni tendrá que programar la entrada. Si piensa pintar, reparar el techo o hacer reparaciones de balcones de la SB 721, pregunte si el trabajo eléctrico puede hacerse al mismo tiempo. Nuestra [guía de la SB 721](${p('sb721')}) cubre el lado de los balcones.`,
					'Decida cómo se pagará la electricidad. Si cada unidad tiene su propio medidor, el inquilino que use un aire acondicionado paga la cuenta. Si el edificio tiene un medidor general, el enfriamiento que instale el dueño le traslada ese costo a usted. Sepa cuál es su caso antes de elegir entre dar enfriamiento o permitir que los inquilinos traigan el suyo.',
					'Planee para las unidades que instalen los inquilinos. Diga a los inquilinos por escrito qué tamaño de unidad puede soportar de forma segura su cableado y dónde pueden conectarla. Eso los protege a ellos y a usted.',
					'Revise los incentivos. La página de financiamiento del condado enumera programas, entre ellos los de aire acondicionado y de mejoras de paneles de Clean Power Alliance, los reembolsos multifamiliares de SoCalGas y programas federales y estatales para bombas de calor y paneles. La elegibilidad depende del programa y de qué compañía de servicios atiende su edificio, así que confírmelo antes de contar con alguno.',
					'Guarde los registros. Las fotos, la evaluación del electricista, los permisos y las facturas importarán si hay una queja, una pregunta del seguro o una venta.',
				],
			},
			{
				heading: 'Cómo afecta el valor y la venta',
				paragraphs: [
					'Un comprador no paga por un aire acondicionado que quizá algún día necesite, pero sí descuenta un panel que hay que reemplazar. Espere que los compradores pregunten por la marca y la antigüedad del panel, por las reglas de enfriamiento que apliquen al edificio y por lo que el dueño ya ha hecho. Un edificio con una evaluación eléctrica reciente y un plan documentado es más fácil de valorar que uno con incógnitas.',
					`Nuestra guía sobre [cómo valoran los compradores un edificio de apartamentos](${p('valorar')}) explica cómo el trabajo pendiente se descuenta del precio, y nuestra [guía paso a paso para vender](${p('paso')}) muestra dónde adelantarse. Lo que usted conserva después de la venta también depende de los impuestos, así que vea nuestras guías sobre [ganancias de capital y recuperación de la depreciación](${p('impuestos')}) y, para ventas más grandes en la Ciudad de Los Ángeles, la [Medida ULA](${p('ula')}).`,
				],
			},
			{
				heading: 'Hable con nosotros',
				paragraphs: [
					`Si está pensando vender un edificio con instalación eléctrica antigua, podemos ayudarle a decidir si mejorarla primero o vender en las condiciones actuales, y cómo fijar el precio de cualquiera de las dos formas. Empiece con una [opinión de valor](${BOV}) gratis y confidencial. ¿No sabe a quién contratar? Nuestra guía sobre [cómo elegir un corredor multifamiliar](${p('corredor')}) explica qué buscar.`,
					'Este artículo es información general, no asesoría legal ni de ingeniería. Estas reglas están cambiando, así que confirme los detalles con un abogado, un electricista con licencia y la agencia que rige su propiedad.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[SB 655 de California (2025), Código de Salud y Seguridad, sección 17914: temperatura interior](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB655) (en inglés)',
					'[Cool and Healthy Homes del condado de LA: ¿Cómo pueden cumplir los propietarios?](https://coolhealthyhomes.org/owner/comply) (en inglés)',
					'[Cool and Healthy Homes del condado de LA: programas de financiamiento e incentivos](https://coolhealthyhomes.org/financing) (en inglés)',
					'[Presentación a la Junta de Supervisores del condado de LA: Ordenanza del umbral de temperatura interior máxima residencial, 5 de agosto de 2025](https://file.lacounty.gov/SDSInter/bos/supdocs/205876.pdf) (en inglés)',
					'[Moción de los concejales Hernandez y Blumenfield para establecer una temperatura interior máxima, Ciudad de Los Ángeles](https://cd1.lacity.gov/press-releases/councilmembers-hernandez-and-blumenfields-motion-establish-maximum-indoor) (en inglés)',
					'[Solicitud de permiso eléctrico del LADBS](https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/application-for-electrical-permit-pc-elec-app-02.pdf) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Hay una ley que exija aire acondicionado en cada apartamento de Los Ángeles?',
				a: 'No. Ninguna ley de California ni de la Ciudad de Los Ángeles exige que un dueño instale aire acondicionado en todas las unidades. El condado de Los Ángeles tiene un límite de temperatura interior de 82°F para las rentas en áreas no incorporadas, y la Ciudad votó a favor de avanzar hacia una norma similar, pero ninguna dice “instale aire acondicionado”.',
			},
			{
				q: '¿Qué dice la regla de 82 grados del condado de Los Ángeles?',
				a: 'Aplica a las unidades de renta en áreas no incorporadas del condado, y el propietario es responsable de asegurar que las habitaciones habitables puedan mantenerse a 82°F o menos. La aplicación empieza el 1 de enero de 2027, se basa en quejas y empieza por la educación y el enfriamiento pasivo. No aplica dentro de ciudades incorporadas como la Ciudad de Los Ángeles, Santa Mónica, Beverly Hills o West Hollywood.',
			},
			{
				q: '¿La Ciudad de Los Ángeles ya adoptó una regla de temperatura máxima?',
				a: 'Hasta donde podemos encontrar, no. El 17 de febrero de 2026, el Concejo Municipal aprobó por unanimidad una moción que ordena a la Ciudad adoptar una norma de 82°F, pero una moción inicia el proceso y no es la ordenanza. Confirme el estado actual con el Departamento de Vivienda de Los Ángeles.',
			},
			{
				q: '¿Pueden mis inquilinos instalar su propio aire acondicionado?',
				a: 'En la regla del condado, sí: pueden agregar enfriamiento portátil, como un aire de ventana, con un aviso por escrito al propietario con al menos cinco días de anticipación, siguiendo las guías de seguridad del fabricante y sin alterar la unidad. No se les puede desalojar, penalizar ni cobrar más por ello.',
			},
			{
				q: '¿Por qué importa el panel eléctrico de mi edificio?',
				a: 'Los edificios antiguos no se cablearon para aire acondicionado, y un panel que sirvió décadas puede llegar a su límite cuando varias unidades agregan enfriamiento. Los compradores y sus inspectores examinan los paneles viejos con cuidado, y un panel que hay que reemplazar se descuenta del precio.',
			},
			{
				q: '¿Qué debo hacer ahora si soy dueño de un edificio antiguo?',
				a: 'Averigüe qué pueden soportar sus paneles con una evaluación por escrito de un electricista con licencia, pruebe primero las soluciones pasivas económicas, planee cualquier trabajo eléctrico para el momento que usted elija, y guarde los registros: fotos, la evaluación, los permisos y las facturas.',
			},
		],
	},
	{
		slug: ES.sinCorredor,
		title: '¿Puedo vender mi edificio de apartamentos sin corredor?',
		seoTitle: '¿Puedo Vender mi Edificio de Apartamentos sin Corredor?',
		description: 'Se puede vender sin corredor, pero hay que hacer todo el trabajo. Qué hace un corredor, los riesgos de vender solo y cómo decidir con información.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/vender-sin-corredor.webp',
			alt: 'Gráfica: se puede vender un edificio sin corredor, pero hay que hacer todo el trabajo: fijar el precio, encontrar compradores, negociar y llevar el escrow. Empiece con una opinión de valor.',
			width: 1200,
			height: 900,
		},
		related: [ES.corredor, ES.costos, ES.paso],
		sections: [
			{
				heading: 'La respuesta corta',
				paragraphs: [
					'Sí, un dueño puede vender su propio edificio sin contratar a un corredor. No hay una ley que lo prohíba. La pregunta real es otra: ¿quién hará el trabajo, y qué pasa si algo sale mal? Una venta de un edificio de apartamentos es mucho más complicada que la venta de una casa, y los errores suelen costar más que la comisión que se quería ahorrar.',
					'Una advertencia honesta: somos corredores, así que tenemos un interés en esta pregunta. Por eso le damos primero los hechos, y al final lo que haríamos en su lugar, sea cual sea su decisión.',
				],
			},
			{
				heading: 'Qué hace un corredor en la venta de un edificio',
				visual: 'sinCorredorTabla',
				paragraphs: [
					`Un corredor que vende edificios de apartamentos hace mucho más que poner un anuncio. Calcula el valor con base en sus rentas reales y en ventas comparables, prepara el memorando de oferta (offering memorandum), las fotos y el video, llama directamente a inversionistas y a otros corredores, filtra a los compradores, compara las ofertas por lo que usted recibiría neto, negocia el contrato y acompaña la venta durante el escrow y la revisión del comprador. Nuestra [guía paso a paso para vender](${p('paso')}) muestra las ocho etapas.`,
					'Si usted decide vender solo, tendrá que hacer cada una de esas cosas, o contratar a otros para hacerlas.',
				],
			},
			{
				heading: 'Dónde suelen complicarse las ventas, con o sin corredor',
				paragraphs: [
					'Tres problemas se repiten una y otra vez: fijar un precio demasiado alto al principio, números de rentas o gastos que no resisten la revisión del comprador, y un comprador cuyo financiamiento se cae. Los tres son más fáciles de prevenir que de arreglar.',
					`El precio. Un precio muy alto aleja a los compradores y después hay que bajarlo, y uno muy bajo deja dinero sobre la mesa. Fijar un precio acertado exige ventas comparables recientes de su vecindario y entender cómo valoran los compradores el control de rentas, como explicamos en nuestra guía sobre [cómo valorar un edificio de apartamentos](${p('valorar')}).`,
					'Los compradores. Un edificio de apartamentos lo compran sobre todo inversionistas, y muchos trabajan con corredores que ya conocen. Sin una red de compradores y de corredores, es más difícil lograr competencia entre ofertas, y la competencia es la forma más segura de saber lo que el mercado realmente pagará.',
					'Los documentos. Los compradores revisan todo contra sus registros y los contratos: la lista de rentas, los contratos, los gastos, los permisos, y el registro de la Ordenanza de Estabilización de Rentas si el edificio está en la Ciudad de Los Ángeles. Una lista de rentas con errores resta credibilidad y suele convertirse en una rebaja de precio.',
					'Las reglas especiales de Los Ángeles. Hay cosas que se pasan por alto fácilmente: la Medida ULA, que puede cambiar mucho lo que usted recibe si el precio queda cerca de $5.4 millones o de $10.9 millones, y el informe de inspección de balcones de la SB 721, que se tiene que entregar al comprador. Vea nuestras guías sobre la [Medida ULA](' +
						p('ula') +
						') y sobre la [inspección de balcones de la SB 721](' +
						p('sb721') +
						').',
				],
			},
			{
				heading: 'Los contratos están en inglés',
				paragraphs: [
					'El contrato de compraventa, el escrow y los documentos de la revisión del comprador están escritos en inglés, con términos legales que un error puede volver costosos. Si usted vende solo, necesitará al menos un abogado de bienes raíces que revise el contrato antes de firmar, y un oficial de escrow de confianza. Con un corredor que habla español, como Troy Lucero, esos documentos se revisan con usted línea por línea en español antes de firmar.',
				],
			},
			{
				heading: 'La comisión: lo que se ahorra y lo que se arriesga',
				paragraphs: [
					`La comisión se negocia en cada listado y solo se gana cuando se cierra la venta. Eso significa que, si el corredor no cierra, usted no la paga. Vender solo ahorra esa comisión, pero también pone sobre usted el riesgo de fijar mal el precio, de perder compradores y de que la venta se caiga en la revisión. Una diferencia de unos puntos porcentuales en el precio final puede pesar más que la comisión. Para ver todo lo que sale del dinero de una venta, lea nuestro artículo sobre [cuánto cuesta vender un edificio](${p('costos')}).`,
					`Además, los compradores que vienen con su propio corredor querrán saber cómo se le pagará a ese corredor. Es un tema que se negocia, y conviene aclararlo antes de recibir ofertas.`,
				],
			},
			{
				heading: 'Cuándo vender solo puede tener sentido',
				paragraphs: [
					'Puede tener sentido si usted ya tiene un comprador identificado, por ejemplo un familiar, un socio o un inversionista que le hizo una oferta directa. Aun así, un abogado y un oficial de escrow son indispensables, y una opinión de valor le ayuda a saber si el precio que le ofrecen es justo.',
					'Una venta fuera del mercado a un comprador conocido también es una opción, y la explicamos en nuestro artículo sobre [vender fuera del mercado o anunciar el edificio](' +
						p('fueraDelMercado') +
						').',
				],
			},
			{
				heading: 'Lo que haríamos en su lugar',
				paragraphs: [
					`Antes de decidir, consiga un número. Una [opinión de valor](${BOV}) gratis y confidencial le dice cuánto es probable que valga su edificio, sin ninguna obligación de listarlo con nosotros. Con ese número en mano, puede decidir con información si vende solo, contrata a un corredor o espera.`,
					`Si entrevista a corredores, nuestra guía sobre [cómo elegir un corredor multifamiliar](${p('corredor')}) enumera las preguntas que debe hacer, las señales de alerta y cómo verificar una licencia.`,
					'Este artículo es información general, no asesoría legal ni de impuestos. Hable con su abogado y su contador sobre su situación.',
				],
			},
		],
		faqs: [
			{
				q: '¿Puedo vender mi edificio de apartamentos sin un corredor?',
				a: 'Sí, un dueño puede vender su propio edificio sin corredor, no hay una ley que lo prohíba. Pero tendrá que hacer todo el trabajo: calcular el valor, preparar la documentación, encontrar compradores, comparar ofertas, negociar el contrato y llevar el escrow y la revisión del comprador.',
			},
			{
				q: '¿Cuánto me ahorro si vendo sin corredor?',
				a: 'Se ahorra la comisión, que se negocia en cada listado y solo se gana cuando la venta cierra. Pero también asume el riesgo de fijar mal el precio, de no encontrar suficientes compradores y de que la venta se caiga en la revisión, y una diferencia de unos puntos porcentuales en el precio final puede pesar más que la comisión.',
			},
			{
				q: '¿Qué problemas son más comunes al vender un edificio de apartamentos?',
				a: 'Fijar un precio demasiado alto al principio, números de rentas o gastos que no resisten la revisión del comprador, y un comprador cuyo financiamiento se cae. Los tres son más fáciles de prevenir que de arreglar.',
			},
			{
				q: '¿Necesito un abogado si vendo sin corredor?',
				a: 'Sí, conviene. El contrato de compraventa, el escrow y los documentos de la revisión del comprador están escritos en inglés y con términos legales que un error puede volver costosos. También necesita un oficial de escrow de confianza.',
			},
			{
				q: '¿Cómo sé si el precio que me ofrecen es justo?',
				a: 'Pida una opinión de valor, que se basa en sus rentas y gastos reales y en ventas comparables recientes. La nuestra es gratis y confidencial, y no hay ninguna obligación de listar el edificio con nosotros.',
			},
			{
				q: '¿Cuándo tiene sentido vender sin corredor?',
				a: 'Puede tener sentido si ya tiene un comprador identificado, como un familiar, un socio o un inversionista que le hizo una oferta directa. Aun así, un abogado, un oficial de escrow y una opinión de valor son indispensables.',
			},
		],
	},
	{
		slug: ES.costos,
		title: '¿Cuánto cuesta vender un edificio de apartamentos en Los Ángeles? Comisión, impuestos y otros costos',
		seoTitle: 'Cuánto Cuesta Vender un Edificio de Apartamentos en LA',
		description: 'Qué sale del dinero al vender un edificio en Los Ángeles: la comisión, los impuestos de transferencia, la Medida ULA, los impuestos sobre la renta y más.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/cuanto-cuesta-vender.webp',
			alt: 'Gráfica: lo que cuesta vender un edificio de apartamentos en Los Ángeles: la comisión se negocia y solo se gana si la venta cierra, los impuestos de transferencia van de 0.56% a 4.56% del precio en la Ciudad de Los Ángeles según el precio, y los impuestos sobre la renta suelen ser el costo más grande.',
			width: 1200,
			height: 900,
		},
		related: [ES.impuestos, ES.ula, ES.paso],
		sections: [
			{
				heading: 'El precio de venta no es lo que usted recibe',
				paragraphs: [
					'Cuando un dueño pregunta cuánto cuesta vender, casi siempre piensa en la comisión. Pero la comisión es solo una de varias piezas, y muchas veces no es la más grande. Entender todas las piezas antes de anunciar el edificio le permite saber cuánto recibiría realmente, y decidir con cifras reales.',
					'Este artículo reúne los costos principales de una venta en Los Ángeles. Las cifras de impuestos de transferencia son exactas para los casos que mostramos, pero su situación es distinta, así que use esto como una guía y confirme todo con su contador y su oficial de escrow.',
				],
			},
			{
				heading: '1. La comisión del corredor',
				paragraphs: [
					'La comisión se negocia en cada listado, y solo se gana cuando se cierra una venta. No hay una tarifa única, y los términos, incluida la duración del contrato de listado y lo que pasa si el edificio se vende a un comprador que usted ya conocía, se negocian antes de firmar. Revisaremos los detalles en su consulta de la opinión de valor.',
				],
			},
			{
				heading: '2. Los impuestos de transferencia',
				visual: 'ulaPrecios',
				paragraphs: [
					'En la Ciudad de Los Ángeles, el impuesto de transferencia regular de la Ciudad es de 0.45% del precio, y el impuesto del condado de Los Ángeles es de $1.10 por cada $1,000. Con un precio de $3,000,000, eso suma $13,500 de la Ciudad y $3,300 del condado: $16,800 en total, o 0.56% del precio.',
					'Encima de eso está la Medida ULA, que aplica solo dentro de la Ciudad de Los Ángeles y se cobra sobre todo el precio de venta: 0% en $5.4 millones o menos, 4% por encima de $5.4 millones y por debajo de $10.9 millones, y 5.5% en $10.9 millones o más, para los cierres después del 30 de junio de 2026. Con un precio de $6,000,000, el impuesto ULA es de $240,000, y con los impuestos regulares de la Ciudad ($27,000) y del condado ($6,600), los impuestos de transferencia suman $273,600, o 4.56% del precio. Con $12,000,000, suman $727,200, o 6.06%.',
					`Si su edificio queda cerca de una de esas líneas, un precio más alto puede dejarle menos dinero, y vale la pena revisarlo antes de fijar el precio. Lea nuestra [guía de la Medida ULA](${p('ula')}) y la de [conservar o vender bajo la Medida ULA](${p('ulaConservar')}).`,
					'Fuera de la Ciudad de Los Ángeles, las reglas cambian. West Hollywood y Beverly Hills no tienen un impuesto de transferencia propio de la ciudad, y Santa Mónica tiene su propia versión, la Medida GS, que cobra 5.6% del precio completo a partir de $8 millones.',
				],
			},
			{
				heading: '3. Los impuestos sobre la renta, muchas veces el costo más grande',
				paragraphs: [
					`Para muchos dueños, el mayor costo de vender no es la comisión. Es el impuesto sobre la ganancia. Si usted fue dueño de la propiedad por más de un año, la ganancia generalmente es una ganancia de capital a largo plazo, con un impuesto federal de 0%, 15% o 20% según su ingreso. La parte de la ganancia que proviene de la depreciación se grava hasta con 25%, los vendedores de ingresos altos pueden deber el impuesto de 3.8% sobre los ingresos netos de inversión, y California grava la ganancia como ingreso ordinario. Estos impuestos salen de su declaración, no del escrow. Nuestro artículo sobre [ganancias de capital y recuperación de la depreciación](${p('impuestos')}) explica cada pieza.`,
					`Un intercambio 1031 puede diferir el impuesto sobre las ganancias de capital y la recuperación de la depreciación, pero no exime la venta de la Medida ULA. Vea nuestra página de [intercambios 1031](${PAGES_ES.intercambios}).`,
				],
			},
			{
				heading: '4. Otros costos de cierre',
				paragraphs: [
					'Hay otros costos que dependen de su situación: los honorarios del escrow y del título, que varían según el precio y según el contrato quién los paga; el pago del préstamo que tenga sobre el edificio, y cualquier penalización por pagarlo antes de tiempo si su préstamo la incluye; y la tarifa del intermediario calificado si hace un intercambio 1031. Pregunte a su oficial de escrow y a su prestamista por las cifras de su caso.',
				],
			},
			{
				heading: '5. Los costos de preparar el edificio y las rebajas en la revisión',
				paragraphs: [
					`En general, aconsejamos a los vendedores no gastar dinero en la propiedad antes de una venta, porque rara vez lo recuperan de los compradores. Pero hay costos que conviene conocer con anticipación: una inspección de balcones de la SB 721 pendiente, un panel eléctrico viejo, aparatos que faltan o que están retirados del mercado, o una fuga de agua que sube sus gastos. Los compradores los descuentan, muchas veces en la revisión del comprador, que es cuando más se piden rebajas. Vea [la SB 721](${p('sb721')}), [la AB 628](${p('ab628')}) y [los recibos de servicios](${p('servicios')}).`,
				],
			},
			{
				heading: 'Cómo calcular lo que recibiría',
				visual: 'costosPasos',
				paragraphs: [
					'Una forma sencilla de ordenarlo: parta del precio de venta, reste el pago de su préstamo, la comisión, los impuestos de transferencia (incluida la Medida ULA si aplica), los honorarios de escrow y de título y los demás costos de cierre. Eso es lo que llega del escrow. Después, aparte lo que deberá de impuestos sobre la renta en su declaración, con ayuda de su contador.',
					`Nuestra [calculadora de la Medida ULA](/measure-ula-calculator/) (en inglés) muestra la parte del impuesto de transferencia a su precio, y una [opinión de valor](${BOV}) puede mostrar lo que recibiría a distintos precios y fechas de cierre.`,
					'Este artículo es información general, no asesoría legal ni de impuestos. Las tasas y los umbrales cambian, así que confirme todo con su contador o abogado de impuestos.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[Oficina de Finanzas de la Ciudad de Los Ángeles: Impuesto de transferencia de bienes raíces y preguntas frecuentes sobre la Medida ULA](https://finance.lacity.gov/faq/measure-ula) (en inglés)',
					'[IRS, Tema No. 409: Ganancias y pérdidas de capital](https://www.irs.gov/taxtopics/tc409) (en inglés)',
					'[Junta de Impuestos sobre Franquicias de California: Ganancias y pérdidas de capital](https://www.ftb.ca.gov/file/personal/income-types/capital-gains-and-losses.html) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Cuánto cuesta vender un edificio de apartamentos en Los Ángeles?',
				a: 'Depende de varias piezas: la comisión del corredor, que se negocia, los impuestos de transferencia (y la Medida ULA si aplica), los impuestos sobre la renta sobre su ganancia, y otros costos de cierre. Muchas veces el costo más grande no es la comisión sino el impuesto sobre la renta.',
			},
			{
				q: '¿Cuánto es la comisión por vender un edificio de apartamentos?',
				a: 'La comisión se negocia en cada listado y solo se gana cuando se cierra una venta. Los términos, como la duración del contrato de listado, se negocian antes de firmar.',
			},
			{
				q: '¿Cuánto pagaría de impuestos de transferencia en la Ciudad de Los Ángeles?',
				a: 'El impuesto regular de la Ciudad es de 0.45% y el del condado es de $1.10 por cada $1,000. Con $3,000,000, suman $16,800 (0.56%). Con $6,000,000 se agrega la Medida ULA de $240,000, para un total de $273,600 (4.56%), y con $12,000,000 el total es de $727,200 (6.06%).',
			},
			{
				q: '¿Qué impuestos sobre la renta pago al vender mi edificio?',
				a: 'Si fue dueño de la propiedad por más de un año, la ganancia generalmente es una ganancia de capital a largo plazo, con un impuesto federal de 0%, 15% o 20%. La depreciación se grava hasta con 25%, puede aplicar el impuesto de 3.8% sobre los ingresos netos de inversión, y California grava la ganancia como ingreso ordinario.',
			},
			{
				q: '¿Un intercambio 1031 reduce los costos de vender?',
				a: 'Puede diferir el impuesto sobre las ganancias de capital y la recuperación de la depreciación, pero no exime la venta de la Medida ULA ni de los impuestos de transferencia. Es una herramienta poderosa para la ganancia, pero resuelve un problema distinto.',
			},
			{
				q: '¿Cómo calculo cuánto recibiría al vender?',
				a: 'Parta del precio de venta y reste el pago de su préstamo, la comisión, los impuestos de transferencia, los honorarios de escrow y de título y los demás costos de cierre. Después aparte lo que deberá de impuestos sobre la renta. Una opinión de valor puede mostrar lo que recibiría a distintos precios y fechas de cierre.',
			},
		],
	},
	{
		slug: ES.hijos,
		title: '¿Traspasar el edificio a mis hijos o venderlo? Lo que debe saber sobre la Proposición 19 y los impuestos',
		seoTitle: '¿Traspasar el Edificio a mis Hijos o Venderlo?',
		description: 'Heredar, regalar o vender: cómo cambian los impuestos, la base fiscal y el impuesto a la propiedad, y por qué la Proposición 19 no protege una propiedad de renta.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/traspasar-a-hijos-o-vender.webp',
			alt: 'Gráfica: ¿traspasar el edificio a sus hijos o venderlo? Si lo heredan, la base fiscal se actualiza al valor al fallecer. Si se lo regala en vida, sus hijos generalmente reciben su base. El impuesto a la propiedad se reevalúa y la Proposición 19 no protege una propiedad de renta.',
			width: 1200,
			height: 900,
		},
		related: [ES.heredado, ES.impuestos, ES.vender],
		sections: [
			{
				heading: 'Una decisión de familia, y también de impuestos',
				visual: 'hijosTabla',
				paragraphs: [
					'Muchos dueños que compraron su edificio hace décadas se hacen la misma pregunta: ¿se lo dejo a mis hijos, o lo vendo mientras puedo? No hay una respuesta correcta, solo la que le conviene a su familia. Pero los impuestos cambian mucho según el camino que elija, y conviene conocerlos antes de decidir.',
					'Este artículo explica las diferencias principales, con los datos que ya publicamos en nuestras guías. Es información general, y la decisión final debe tomarla con un abogado de herencias y un contador.',
				],
			},
			{
				heading: 'Camino 1: dejarlo en herencia',
				paragraphs: [
					'Cuando un edificio se hereda, la base fiscal del heredero generalmente es el valor justo de mercado en la fecha del fallecimiento del dueño, o en una fecha de valuación alternativa si el albacea la elige. A esto se le llama base actualizada (stepped-up basis). Reinicia el punto de partida para calcular la ganancia, así que un edificio que los herederos venden poco después del fallecimiento normalmente produce poca o ninguna ganancia sujeta a impuestos, y el historial de depreciación del dueño anterior generalmente no se transmite.',
					'Pero hay otro lado. Si los herederos conservan el edificio, California reevalúa el impuesto a la propiedad a valor de mercado por el cambio de propiedad. Para un edificio que se tuvo por décadas, eso puede subir mucho la factura anual de impuestos.',
				],
			},
			{
				heading: 'Camino 2: regalarlo o traspasarlo en vida',
				paragraphs: [
					'Si usted traspasa el edificio a sus hijos mientras vive, en general ellos reciben su base fiscal y no una base actualizada, según las reglas del IRS sobre bienes recibidos como donación. Eso significa que, si después venden, la ganancia se calcula con lo que usted pagó, y la depreciación que usted tomó los acompaña. Puede resultar en una factura de impuestos mucho mayor que si el edificio se hubiera heredado. Además, una donación grande puede requerir presentar una declaración de impuesto sobre donaciones. Pregunte a su contador por los detalles de su caso.',
					'El cambio de propiedad también provoca una reevaluación del impuesto a la propiedad, igual que en una herencia.',
				],
			},
			{
				heading: 'Qué pasa con la Proposición 19',
				paragraphs: [
					'Muchas familias han oído que la Proposición 19 o la antigua exclusión entre padres e hijos mantiene bajo el impuesto a la propiedad. Pero la Proposición 19 limita esa exclusión a una casa familiar que era la residencia principal del padre o la madre y pasa a ser la residencia principal del hijo, y a las granjas familiares. La Junta de Igualación (Board of Equalization) de California indica que una transferencia de una propiedad de renta entre padres e hijos no califica para la exclusión.',
					'En palabras sencillas: un edificio de apartamentos que pasa a sus hijos, ya sea por herencia o por donación, generalmente se reevalúa. No cuente con que la Proposición 19 mantendrá bajo el impuesto a la propiedad de un edificio de renta.',
					'También hay que avisar del fallecimiento al asesor del condado. La declaración de cambio de propiedad por el fallecimiento de un dueño (formulario BOE-502-D) vence dentro de los 150 días siguientes a la fecha del fallecimiento, y presentarla tarde puede traer multas.',
				],
			},
			{
				heading: 'Camino 3: venderlo usted mismo',
				paragraphs: [
					`Si usted vende mientras vive, tendrá que pagar los impuestos de la venta: el impuesto federal sobre las ganancias de capital, la recuperación de la depreciación (hasta 25%), posiblemente el impuesto de 3.8% sobre los ingresos netos de inversión, y el de California, que grava la ganancia como ingreso ordinario. Además, en la Ciudad de Los Ángeles puede aplicar la Medida ULA por encima de $5.4 millones. Vea nuestras guías sobre [ganancias de capital y recuperación de la depreciación](${p('impuestos')}) y [cuánto cuesta vender](${p('costos')}).`,
					`Un intercambio 1031 puede diferir ese impuesto si reinvierte el dinero en otra propiedad de inversión. Vea nuestra página de [intercambios 1031](${PAGES_ES.intercambios}). Algunos dueños hacen intercambios sucesivos y dejan la propiedad final a sus herederos, que reciben la base actualizada. Es una estrategia que hay que revisar con su contador y su abogado, porque las reglas de los plazos y del tipo de propiedad son estrictas.`,
				],
			},
			{
				heading: 'La herencia y el probate',
				paragraphs: [
					'Si el edificio está en un fideicomiso en vida (living trust), el fideicomisario sucesor generalmente puede vender según los términos del fideicomiso, sin probate. Si no está en un fideicomiso, generalmente pasa por probate, porque un edificio de apartamentos vale mucho más que el límite de California para herencias pequeñas, de unos $200,000, y la corte nombra a un albacea o administrador que maneja la venta.',
					`Eso afecta a sus hijos en la práctica: un fideicomiso puede ahorrarles tiempo y trámites. Hable con un abogado de herencias sobre cuál estructura le conviene. Vea también nuestra guía sobre [qué hacer al heredar un edificio](${p('heredado')}) y nuestra página de [ventas de fideicomisos y herencias](${PAGES_ES.fideicomisos}).`,
				],
			},
			{
				heading: 'Preguntas para la familia',
				paragraphs: [
					'¿Alguno de sus hijos quiere administrar el edificio, y sabe lo que implica? ¿Pueden los herederos ponerse de acuerdo en un plan? ¿Cuánto serían los impuestos a la propiedad después de la reevaluación? ¿Qué reparaciones vienen? ¿Y qué haría el dinero de una venta por la familia, en comparación con el ingreso que produce el edificio?',
					`Si decide vender, o quiere saber cuánto vale hoy el edificio para comparar caminos, empiece con una [opinión de valor](${BOV}) gratis y confidencial. Nuestro artículo con [siete preguntas para hacerse primero](${p('vender')}) también puede ayudarle a ordenar la decisión.`,
					'Este artículo es información general, no asesoría legal ni de impuestos. Las reglas de impuestos, herencias y de la Proposición 19 son detalladas y cambian, así que confirme los detalles con un abogado de herencias de California y con un contador antes de traspasar o vender.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[IRS, Publicación 551: Base de los activos](https://www.irs.gov/publications/p551) (en inglés)',
					'[Junta de Igualación de California: Proposición 19](https://www.boe.ca.gov/prop19/) (en inglés)',
					'[IRS: Novedades sobre los impuestos de herencias y donaciones](https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Es mejor dejar el edificio en herencia o regalarlo a mis hijos en vida?',
				a: 'Generalmente, los impuestos sobre la ganancia son más favorables con una herencia: la base fiscal del heredero se actualiza al valor de mercado en la fecha del fallecimiento. Si se lo regala en vida, sus hijos en general reciben su base y su historial de depreciación. Hable con su contador y su abogado antes de decidir.',
			},
			{
				q: '¿Qué es la base actualizada (stepped-up basis)?',
				a: 'Es el valor justo de mercado de la propiedad en la fecha del fallecimiento del dueño, que pasa a ser la base fiscal del heredero. Reinicia el punto de partida para calcular la ganancia, así que una venta poco después normalmente produce poca o ninguna ganancia sujeta a impuestos.',
			},
			{
				q: '¿Me protege la Proposición 19 del aumento del impuesto a la propiedad si le paso el edificio a mis hijos?',
				a: 'Generalmente no. La Proposición 19 limita la exclusión entre padres e hijos a una casa familiar y a las granjas familiares, y la Junta de Igualación indica que una transferencia de una propiedad de renta entre padres e hijos no califica. El edificio generalmente se reevalúa a valor de mercado.',
			},
			{
				q: '¿Pago impuestos si le regalo el edificio a mis hijos?',
				a: 'Una donación grande puede requerir presentar una declaración de impuesto sobre donaciones, y el cambio de propiedad provoca una reevaluación del impuesto a la propiedad. Además, sus hijos en general reciben su base fiscal. Pregunte a su contador por los detalles de su caso.',
			},
			{
				q: '¿Qué impuestos pago si vendo el edificio yo mismo en lugar de dejarlo a mis hijos?',
				a: 'El impuesto federal sobre las ganancias de capital (0%, 15% o 20%), la recuperación de la depreciación (hasta 25%), posiblemente el impuesto de 3.8% sobre los ingresos netos de inversión, y el de California, que grava la ganancia como ingreso ordinario. En la Ciudad de Los Ángeles puede aplicar también la Medida ULA. Un intercambio 1031 puede diferir el impuesto sobre la ganancia.',
			},
			{
				q: '¿Necesita probate el edificio si lo dejo a mis hijos?',
				a: 'Si está en un fideicomiso en vida, el fideicomisario sucesor generalmente puede vender sin probate. Si no está en un fideicomiso, generalmente pasa por probate, porque un edificio de apartamentos vale mucho más que el límite de California para herencias pequeñas.',
			},
		],
	},
	{
		slug: ES.inquilinosVenta,
		title: '¿Qué pasa con mis inquilinos si vendo el edificio?',
		seoTitle: '¿Qué Pasa con mis Inquilinos si Vendo el Edificio?',
		description: 'Qué pasa con los contratos, las rentas y los depósitos cuando se vende un edificio ocupado en Los Ángeles, y cómo hablar con sus inquilinos.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/inquilinos-si-vendo.webp',
			alt: 'Gráfica: qué pasa con los inquilinos si vende su edificio. Los contratos de renta siguen igual y el nuevo dueño ocupa su lugar, los depósitos pasan al comprador, y usted debe avisar con honestidad sin prometer nada en nombre del comprador.',
			width: 1200,
			height: 900,
		},
		related: [ES.inquilinos, ES.paso, ES.rso],
		sections: [
			{
				heading: 'La respuesta corta: sus inquilinos se quedan',
				visual: 'inquilinosColumnas',
				paragraphs: [
					'Si usted vende un edificio de apartamentos con inquilinos, una venta no termina por sí sola el contrato de ningún inquilino. Los contratos de renta y las reglas de renta que aplican al edificio se quedan con el edificio, así que el nuevo dueño ocupa la posición del dueño actual. La mayoría de los edificios de apartamentos en Los Ángeles se venden con los inquilinos en su lugar, y muchos compradores buscan específicamente edificios ocupados con ingresos estables.',
					'Para la mayoría de los inquilinos, lo que cambia es a quién le pagan la renta. Lo que no cambia es lo que más les importa: su contrato y su renta.',
				],
			},
			{
				heading: 'Qué pasa con las rentas y las reglas de control de rentas',
				paragraphs: [
					`Las reglas de renta que aplican a su edificio también se transmiten. Si el edificio está bajo la Ordenanza de Estabilización de Rentas (RSO) de la Ciudad de Los Ángeles, o bajo el límite estatal de la AB 1482, el nuevo dueño sigue sujeto a esos límites y a las protecciones contra el desalojo que incluyen. Vea nuestras guías sobre [la RSO](${p('rso')}) y [el límite de la AB 1482](${p('ab1482')}).`,
					`Para el comprador, esto es parte del valor: no paga por lo que el edificio podría ganar con las rentas de mercado de hoy, sino por lo que gana bajo las reglas que aplican a sus inquilinos. Nuestro artículo sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}) explica cómo afecta eso el precio.`,
				],
			},
			{
				heading: 'Qué pasa con los depósitos de seguridad',
				paragraphs: [
					'Los depósitos de seguridad pasan al comprador. Por eso conviene tener un registro claro de cada depósito, junto con el contrato de cada inquilino. Un comprador lo revisará durante el escrow, igual que revisa cada renta, la fecha de inicio de cada contrato y cada unidad contra sus registros.',
				],
			},
			{
				heading: 'Qué verán sus inquilinos durante la venta',
				paragraphs: [
					'Una venta requiere cierto acceso a las unidades. Los compradores hacen visitas y recorridos, y hacen inspecciones. Además, los compradores suelen pedir a los inquilinos que firmen un estoppel, una declaración breve en la que el inquilino confirma los términos de su renta, como el monto, el depósito y las fechas del contrato. Sirve para comparar su lista de rentas con lo que dicen los inquilinos.',
					`Planee todo esto con el aviso por escrito adecuado antes de que alguien entre a una unidad, que para visitas que no son de emergencia generalmente es de 24 horas. Siga cumpliendo las reglas habituales para las reparaciones y para entrar a las unidades durante todo el proceso, incluso para las visitas de compradores.`,
				],
			},
			{
				heading: 'Cómo hablar con sus inquilinos',
				paragraphs: [
					'Informe a los inquilinos de la venta con honestidad, y no prometa nada en nombre del comprador. La mayoría de los inquilinos solo quieren saber que su contrato y su renta seguirán igual, y en la venta de un edificio ocupado, por lo general así es.',
					'Una nota breve y honesta sobre qué esperar y a quién llamar previene casi todos los problemas. Cuando cierre la venta, avise por escrito a los inquilinos a quién deben pagar la renta y a quién llamar para reparaciones.',
				],
			},
			{
				heading: 'Unidades vacías y acuerdos para que un inquilino se mude',
				paragraphs: [
					'Bajo la ley de California, una unidad que queda vacía generalmente puede volver a rentarse a la renta de mercado, y por eso las unidades entregadas vacías son atractivas para los compradores. Pero cualquier acuerdo para que un inquilino se mude voluntariamente tiene que seguir las reglas del estado y de la Ciudad. Hable con un abogado especializado en leyes de propietarios e inquilinos antes de ofrecer o firmar uno. No presione a un inquilino para que se vaya antes de una venta.',
				],
			},
			{
				heading: 'Qué puede hacer usted para que todo salga bien',
				paragraphs: [
					'Prepare una lista de rentas exacta. Reúna los expedientes de los contratos, con los anexos, los avisos y el registro de depósitos. Confirme que su registro de la RSO y sus cuotas estén al día, si el edificio está en la Ciudad de Los Ángeles. Espere solicitudes de estoppel, y mantenga sus prácticas de renta normales.',
					`Nuestra [guía paso a paso para vender](${p('paso')}) muestra dónde encajan estos pasos. Si quiere saber cuánto vale su edificio con sus rentas y sus inquilinos actuales, pida una [opinión de valor](${BOV}) gratis y confidencial, y Troy Lucero se la explica en español.`,
					'Este artículo es información general, no asesoría legal. Las leyes de control de rentas y de inquilinos son detalladas y cambian, así que confirme con un abogado especializado en leyes de propietarios e inquilinos cómo aplican a su edificio.',
				],
			},
		],
		faqs: [
			{
				q: '¿Tienen que irse mis inquilinos si vendo el edificio?',
				a: 'No. Una venta no termina por sí sola el contrato de ningún inquilino. Los contratos de renta y las reglas de renta que aplican al edificio se quedan con el edificio, así que el nuevo dueño ocupa la posición del dueño actual.',
			},
			{
				q: '¿Qué pasa con el depósito de seguridad de mis inquilinos cuando vendo?',
				a: 'Los depósitos de seguridad pasan al comprador. Conviene tener un registro claro de cada depósito junto con el contrato de cada inquilino, porque el comprador lo revisará durante el escrow.',
			},
			{
				q: '¿Sigue el control de rentas después de vender el edificio?',
				a: 'Sí. Si el edificio está bajo la Ordenanza de Estabilización de Rentas de la Ciudad de Los Ángeles o bajo el límite estatal de la AB 1482, el nuevo dueño sigue sujeto a esos límites.',
			},
			{
				q: '¿Qué es un estoppel y tendrán que firmar uno mis inquilinos?',
				a: 'Un estoppel es una declaración breve en la que un inquilino confirma los términos de su renta, como el monto, el depósito y las fechas del contrato. Los compradores suelen pedirlos durante el escrow para comparar su lista de rentas con lo que dicen los inquilinos.',
			},
			{
				q: '¿Qué debo decirles a mis inquilinos cuando voy a vender?',
				a: 'Dígales la verdad y no prometa nada en nombre del comprador. La mayoría de los inquilinos solo quieren saber que su contrato y su renta seguirán igual, y en la venta de un edificio ocupado, por lo general así es. Avíseles por escrito a quién pagar cuando cierre la venta.',
			},
			{
				q: '¿Pueden los compradores visitar las unidades de mis inquilinos?',
				a: 'Sí, con el aviso por escrito adecuado antes de entrar a una unidad, que para visitas que no son de emergencia generalmente es de 24 horas. Las visitas, las inspecciones y los estoppels requieren cierto acceso, así que planéelos con anticipación.',
			},
		],
	},
];
