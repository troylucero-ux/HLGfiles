// Spanish Insights articles, part 3 (see postsEs.ts for the format). Each mirrors an English post in posts.ts.
import type { PostEs } from './postsEs';
import { ES, BOV } from './esSlugs';

const p = (key: keyof typeof ES) => `/es/insights/${ES[key]}/`;

export const postsEsMore2: PostEs[] = [
	{
		slug: ES.rso,
		enSlug: 'la-rso-rent-increase-rules-2026-apartment-owners',
		title: 'Estabilización de rentas en Los Ángeles en 2026: qué cambió para los dueños de edificios',
		seoTitle: 'Reglas de Aumento de Rentas RSO en Los Ángeles 2026',
		description: 'Los Ángeles reescribió su fórmula de control de rentas. Qué cambió en 2026 para los edificios RSO: el aumento anual, el adicional por servicios y el valor.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/aumentos-rso-2026.webp',
			alt: 'Gráfica: la Ciudad de Los Ángeles publica un aumento de 3% para unidades con rentas estabilizadas hasta junio de 2027, el adicional por servicios terminó el 2 de febrero de 2026 y el límite de la AB 1482 para edificios nuevos es de 8.7%.',
			width: 1200,
			height: 900,
		},
		related: [ES.ab1482, ES.inquilinos, ES.vender],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'La Ciudad de Los Ángeles aprobó en diciembre de 2025 una ordenanza que reduce cuánto puede subir la renta cada año en los edificios cubiertos por la Ordenanza de Estabilización de Rentas (RSO).',
					'Según el Departamento de Vivienda de Los Ángeles (LAHD), desde el 2 de febrero de 2026 un propietario ya no puede incluir ningún porcentaje adicional por servicios en un aumento anual.',
					'El aumento anual publicado por la Ciudad para las unidades RSO es de 3%, y una página de una oficina del Concejo indica que se mantiene en 3% hasta el 30 de junio de 2027. La ordenanza también describe una fórmula nueva, que se explica más abajo, así que confirme la cifra vigente y cómo aplica con el Departamento de Vivienda antes de enviar un aviso.',
					'Esto es independiente del límite estatal de la AB 1482, que aplica a edificios más nuevos y es de 8.7% para los aumentos que entren en vigor a partir del 1 de agosto de 2026.',
				],
			},
			{
				heading: 'Qué edificios están cubiertos',
				paragraphs: [
					'La RSO generalmente cubre los edificios de apartamentos de la Ciudad de Los Ángeles con certificado de ocupación emitido antes del 1 de octubre de 1978. Los edificios más nuevos normalmente caen bajo el límite estatal. Puede consultar una propiedad en el mapa ZIMAS de la Ciudad, y el Departamento de Vivienda indica en su página de la RSO una consulta por mensaje de texto. Otras ciudades, incluidas [Santa Mónica](/submarkets/santa-monica/), [West Hollywood](/submarkets/west-hollywood/) y [Beverly Hills](/submarkets/beverly-hills/) (en inglés), tienen su propio control de rentas, así que un edificio fuera de la Ciudad de Los Ángeles sigue reglas distintas.',
				],
			},
			{
				heading: 'Qué cambió la ordenanza de 2025',
				paragraphs: [
					'El Concejo Municipal aprobó la ordenanza el 12 de diciembre de 2025, y la alcaldesa Bass la firmó el 23 de diciembre. La Apartment Association of Greater Los Angeles resume así sus puntos principales.',
					'Una fórmula nueva. El aumento anual permitido se calculará con el 90% del Índice de Precios al Consumidor de todos los artículos, en lugar del 100%, con un techo de 4%, en lugar de 8%, y un piso de 1%, en lugar de 3%.',
					'Sin adicional por servicios. Se eliminó el 1% adicional que antes se permitía a los dueños que pagan el gas o la electricidad de los inquilinos. El Departamento de Vivienda indica que a partir del 2 de febrero de 2026, un propietario ya no puede incluir ningún aumento porcentual adicional por servicios.',
					'Sin 10% automático por dependientes adicionales. Se eliminó el aumento separado de 10% que se permitía cuando se agregaba un dependiente adicional a un arrendamiento.',
					'Montos de reubicación. Los montos de asistencia para reubicación se ajustarán cada año con el 100% del CPI.',
				],
			},
			{
				heading: 'Cuánto puede cobrar ahora',
				paragraphs: [
					'La calculadora de aumentos de renta de la RSO del Departamento de Vivienda usa 3%, y una página de una oficina del Concejo Municipal, actualizada por última vez en marzo de 2026, indica que el aumento anual de la RSO se mantiene en 3% del 1 de julio de 2025 al 30 de junio de 2027. El anuncio del propio Departamento de Vivienda en la página de su calculadora todavía describe el período anterior, así que verifíquelo antes de apoyarse en una cifra.',
					'Algunos puntos prácticos. La ley estatal exige un aviso por escrito con 30 días de anticipación para aumentos de renta de menos de 10%. Las cuotas de la RSO y del Programa Sistemático de Cumplimiento del Código de la Ciudad solo se pueden trasladar a los inquilinos después de que usted registre la unidad y dé un aviso por escrito. La página de la calculadora indica los montos actuales de traslado: $1.61 y $2.83 al mes.',
				],
			},
			{
				heading: 'Cómo se compara con la AB 1482',
				visual: 'rentaComparacion',
				paragraphs: [
					`Para los edificios más nuevos fuera de la RSO, el límite estatal de rentas es el menor entre 10% y 5% más el cambio del CPI regional. Para los aumentos que entren en vigor a partir del 1 de agosto de 2026, es de 8.7%. Nuestra [guía de la AB 1482](${p('ab1482')}) explica cómo se calcula.`,
					'La diferencia es grande. Con una renta de $2,000, un aumento de 3% son $60 al mes, y uno de 8.7% son $174. En un año, son unos $720 frente a $2,088 por unidad, y por eso los dos tipos de edificios se valoran de forma distinta.',
				],
			},
			{
				heading: 'Qué significa para el valor',
				visual: 'formulaRso',
				paragraphs: [
					'Los compradores calculan con las rentas actuales y con el límite legal de qué tan rápido pueden crecer. Un techo más bajo frena el crecimiento de las rentas en un edificio RSO, y los compradores dan solo crédito parcial por el potencial que no pueden aprovechar hasta que las unidades se desocupen. Vea nuestro artículo sobre las [tasas de capitalización y precios por vecindario](/insights/la-apartment-cap-rates-and-prices-by-neighborhood-2026/) (en inglés).',
					'A manera de ilustración, tome un edificio de 10 unidades con rentas de $2,000. Un aumento de 3% suma $7,200 al año en renta. Con una tasa de capitalización de 6%, ese ingreso vale unos $120,000 para un comprador, y como los gastos no suben con la renta, la mayor parte llega al ingreso operativo neto. Es un ejemplo, no una cotización para su edificio, pero muestra por qué un aumento permitido que no se ha usado tiene valor.',
					`Antes de anunciar el edificio, pregunte si conviene aplicar un aumento permitido que todavía no ha usado. Los avisos se deben entregar correctamente, y el momento en relación con el anuncio importa. Una [opinión de valor](${BOV}) gratis puede mostrar cuánto vale el aumento para un comprador.`,
				],
			},
			{
				heading: 'Vender un edificio RSO',
				paragraphs: [
					`Las reglas de renta se quedan con el edificio, así que el comprador ocupa su posición. Tenga listos su registro de la RSO y los comprobantes de pago de sus cuotas, los avisos de aumento de renta y su lista de rentas. Nuestra guía sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}) explica lo que piden los compradores, y nuestra [calculadora de valor de propiedad](/property-value/) (en inglés) da un rango rápido.`,
					'Este artículo es información general, no asesoría legal. Las reglas de renta cambian, así que confirme las cifras vigentes con el Departamento de Vivienda de Los Ángeles o con un abogado antes de entregar cualquier aviso.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[Departamento de Vivienda de Los Ángeles: Calculadora de aumentos de renta de la RSO](https://housing.lacity.gov/rso-rent-increase-calculator) (en inglés)',
					'[Concejal Nithya Raman, Distrito 4: Derechos y protecciones de los inquilinos](https://cd4.lacity.gov/initiative/renters-rights/) (en inglés)',
					'[Apartment Association of Greater Los Angeles: Cambio de la fórmula de la RSO de L.A.](https://members.aagla.org/news/la-rso-formula-change-we-address-the-1-adders-for-utilities) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Cuánto puedo subir la renta en un edificio RSO de Los Ángeles en 2026?',
				a: 'El aumento anual publicado por la Ciudad para las unidades RSO es de 3%, y una página de una oficina del Concejo indica que se mantiene en 3% hasta el 30 de junio de 2027. La ordenanza también describe una fórmula nueva, así que confirme la cifra vigente con el Departamento de Vivienda antes de enviar un aviso.',
			},
			{
				q: '¿Qué cambió en la ordenanza de estabilización de rentas de Los Ángeles?',
				a: 'La ordenanza que aprobó el Concejo en diciembre de 2025 calcula el aumento anual permitido con el 90% del CPI, con un techo de 4% y un piso de 1%, elimina el adicional por servicios y el aumento automático de 10% por dependientes adicionales, y ajusta cada año los montos de reubicación con el 100% del CPI.',
			},
			{
				q: '¿Todavía puedo agregar un porcentaje por servicios al aumento de renta?',
				a: 'No. Según el Departamento de Vivienda de Los Ángeles, a partir del 2 de febrero de 2026 un propietario ya no puede incluir ningún aumento porcentual adicional por servicios.',
			},
			{
				q: '¿Cómo sé si mi edificio está cubierto por la RSO?',
				a: 'La RSO generalmente cubre los edificios de apartamentos de la Ciudad de Los Ángeles con certificado de ocupación emitido antes del 1 de octubre de 1978. Puede consultar una propiedad en el mapa ZIMAS de la Ciudad. Otras ciudades, como Santa Mónica, West Hollywood y Beverly Hills, tienen su propio control de rentas.',
			},
			{
				q: '¿Cuál es la diferencia entre la RSO y la AB 1482?',
				a: 'La RSO es la ordenanza de la Ciudad de Los Ángeles para edificios anteriores a octubre de 1978, y su aumento publicado es de 3%. La AB 1482 es el límite estatal para edificios más nuevos, y es de 8.7% para los aumentos a partir del 1 de agosto de 2026. Con una renta de $2,000, son unos $720 frente a $2,088 por unidad al año.',
			},
			{
				q: '¿Cómo afecta el límite de la RSO el valor de mi edificio al venderlo?',
				a: 'Los compradores calculan con las rentas actuales y con el límite legal de qué tan rápido pueden crecer. Un techo más bajo frena el crecimiento de las rentas, y los compradores dan solo crédito parcial por el potencial que no pueden aprovechar hasta que las unidades se desocupen.',
			},
		],
	},
	{
		slug: ES.intercambio,
		enSlug: '1031-exchange-into-triple-net-properties',
		title: 'Por qué dueños de apartamentos en Los Ángeles hacen un intercambio 1031 hacia propiedades triple net',
		seoTitle: 'Intercambio 1031 hacia Propiedades Triple Net (NNN)',
		description: 'Cómo los dueños de apartamentos en Los Ángeles usan un intercambio 1031 para pasar a inversiones triple net pasivas, con un ejemplo real de 24 unidades.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/intercambio-1031-triple-net.webp',
			alt: 'Gráfica: un intercambio 1031 de apartamentos a propiedades triple net, con 45 días para identificar y 180 días para cerrar.',
			width: 1200,
			height: 900,
		},
		related: [ES.impuestos, ES.findeano, ES.vender],
		sections: [
			{
				heading: '¿Qué es un intercambio 1031?',
				paragraphs: [
					'Un intercambio 1031, llamado así por la Sección 1031 del Código de Impuestos Internos, le permite vender una propiedad de inversión y diferir el impuesto sobre las ganancias de capital que de otra forma pagaría, siempre que reinvierta el dinero en otra propiedad de inversión de igual o mayor valor. El impuesto no se elimina: se difiere hasta que usted venda finalmente sin hacer otro intercambio.',
					'La condición es que usted nunca puede tocar directamente el dinero de la venta. Un Intermediario Calificado (Qualified Intermediary, o QI) guarda los fondos de su venta y los usa para comprar la propiedad de reemplazo en su nombre, y todo el proceso corre contra dos plazos estrictos del IRS que determinan si el intercambio se sostiene: 45 días para identificar la propiedad de reemplazo y 180 días para cerrar su compra.',
				],
			},
			{
				heading: 'Cuando administrar activamente deja de tener sentido',
				paragraphs: [
					'Ser dueño de un edificio de apartamentos en Los Ángeles se ha vuelto más difícil, no más fácil, en los últimos años. El control de rentas estatal bajo la AB 1482, las ordenanzas locales de estabilización de rentas, el aumento de los costos de seguro y la realidad diaria de la rotación de inquilinos y el mantenimiento pendiente han llevado a un número creciente de dueños de muchos años a hacerse la misma pregunta: ¿esto todavía me conviene?',
					'Para los dueños que se acercan al retiro, que administran un portafolio desde fuera del estado, o que simplemente están cansados de las llamadas a las 2 de la mañana, la respuesta muchas veces es que no. Pero vender sin más significa una factura grande de impuestos sobre las ganancias de capital. Ahí es donde entra un intercambio 1031 hacia una propiedad triple net (NNN).',
				],
			},
			{
				heading: 'Cómo un intercambio 1031 hace el cambio con impuestos diferidos',
				visual: 'timeline1031',
				paragraphs: [
					'Según el código fiscal actual, las propiedades multifamiliares y las comerciales califican entre sí como de tipo similar (“like-kind”), y eso es lo que hace posible un intercambio de apartamentos a NNN. Cuando la propiedad que usted vende cierra el escrow, empiezan a correr los dos plazos: 45 días para identificar y 180 días para cerrar. Los dos son límites firmes que fija el IRS, no pautas. Empezamos a buscar opciones de reemplazo antes de que cierre su venta, precisamente para proteger ese plazo en lugar de correr contra él.',
				],
			},
			{
				heading: 'Por qué específicamente las propiedades triple net (NNN)',
				paragraphs: [
					'En un contrato de arrendamiento triple net, el inquilino, no el dueño, es responsable de los impuestos a la propiedad, el seguro y el mantenimiento. Para un dueño acostumbrado a recibir llamadas de mantenimiento y a coordinar reparaciones en un edificio de apartamentos, esa estructura es todo el atractivo: llega la renta y no hay un techo que arreglar.',
					'Las propiedades NNN también suelen estar arrendadas a un solo inquilino comercial con un contrato a largo plazo, lo que significa que desaparece la administración diaria de inquilinos que viene con decenas de unidades residenciales. Y como las oportunidades NNN existen en todo el país, un intercambio desde un edificio de apartamentos de Los Ángeles también es una forma natural de diversificar geográficamente y salirse por completo de la exposición al control de rentas específico de California.',
				],
			},
			{
				heading: 'Un ejemplo reciente: un edificio de Los Ángeles, dos propiedades NNN',
				paragraphs: [
					'Recientemente acompañamos a una clienta en un intercambio de este tipo: vendió su edificio de 24 unidades aquí en Los Ángeles ([1136 S Alvarado St](/closed-sales/1136-s-alvarado-st-los-angeles-ca-90006/)) (en inglés) y cambió el dinero a dos propiedades triple net distintas, una en Florida y otra en Georgia. Dividir el intercambio en dos propiedades en dos estados le permitió diversificar tanto su riesgo de inquilinos como su exposición geográfica en una sola operación, y diferir por completo el impuesto sobre las ganancias de capital de la venta.',
					'Como en cualquier intercambio de varias propiedades en varios estados, el trabajo estuvo en la coordinación: mantener las dos compras de reemplazo avanzando en paralelo contra el mismo reloj de 45 y 180 días, y trabajar con especialistas en NNN en cada mercado para que ella se sintiera segura con el inquilino, los términos del contrato y la ubicación antes de comprometerse.',
				],
			},
			{
				heading: '¿Le conviene un intercambio NNN con su edificio?',
				paragraphs: [
					'No todos los dueños deben hacer un intercambio hacia una propiedad triple net, y no todos los edificios de apartamentos son los indicados para vender ahora. La primera conversación siempre trata de sus metas: ¿quiere dejar de administrar propiedades por completo, reducir su carga de trabajo sin salirse totalmente de los bienes raíces, o sacar capital de California? La respuesta correcta cambia la estrategia.',
					`Si está considerando vender y quiere entender cómo se vería un intercambio 1031 hacia una inversión NNN pasiva para su edificio en particular, con gusto lo revisamos con usted. Empiece con una [opinión de valor](${BOV}) gratis, y vea también nuestra guía sobre [cómo planear el calendario antes de fin de año](${p('findeano')}). Este artículo es información general, no asesoría legal ni de impuestos. Hable con su contador y con su asesor de intercambios.`,
				],
			},
		],
		faqs: [
			{
				q: '¿Qué es un intercambio 1031?',
				a: 'Es un intercambio, llamado así por la Sección 1031 del Código de Impuestos Internos, que le permite vender una propiedad de inversión y diferir el impuesto sobre las ganancias de capital, siempre que reinvierta el dinero en otra propiedad de inversión de igual o mayor valor. El impuesto no se elimina: se difiere.',
			},
			{
				q: '¿Cuáles son los plazos de un intercambio 1031?',
				a: 'Tiene 45 días desde el cierre de su venta para identificar una propiedad de reemplazo y 180 días para cerrar su compra. Los dos son límites firmes que fija el IRS, no pautas.',
			},
			{
				q: '¿Puedo tocar el dinero de la venta durante un intercambio 1031?',
				a: 'No. Un Intermediario Calificado (QI) guarda los fondos de su venta y los usa para comprar la propiedad de reemplazo en su nombre.',
			},
			{
				q: '¿Qué es una propiedad triple net (NNN)?',
				a: 'Es una propiedad en la que el inquilino, no el dueño, es responsable de los impuestos a la propiedad, el seguro y el mantenimiento. Suelen estar arrendadas a un solo inquilino comercial con un contrato a largo plazo, así que desaparece la administración diaria de inquilinos.',
			},
			{
				q: '¿Puedo cambiar un edificio de apartamentos por una propiedad comercial?',
				a: 'Sí. Según el código fiscal actual, las propiedades multifamiliares y las comerciales califican entre sí como de tipo similar, y eso es lo que hace posible un intercambio de apartamentos a propiedades NNN.',
			},
			{
				q: '¿Se puede hacer un intercambio hacia dos propiedades en estados distintos?',
				a: 'Sí. Una clienta nuestra vendió su edificio de 24 unidades en Los Ángeles y cambió el dinero a dos propiedades triple net, una en Florida y otra en Georgia, y difirió por completo el impuesto sobre las ganancias de capital. El trabajo está en la coordinación, porque las dos compras corren contra el mismo reloj de 45 y 180 días.',
			},
		],
	},
	{
		slug: ES.heredado,
		enSlug: 'inherited-apartment-building-los-angeles-what-to-do',
		title: '¿Heredó un edificio de apartamentos en Los Ángeles? Qué hacer primero',
		seoTitle: 'Heredó un Edificio de Apartamentos en Los Ángeles',
		description: '¿Heredó un edificio en Los Ángeles? Qué hacer primero, cómo influye el probate o el fideicomiso, la base actualizada, la Proposición 19 y sus opciones.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/heredo-un-edificio.webp',
			alt: 'Gráfica: ¿heredó un edificio de apartamentos? En los primeros 30 días asegúrelo, cobre las rentas, avise a los inquilinos y llame a su abogado. La base fiscal se actualiza al valor al fallecer. Un fideicomiso o un probate decide quién puede vender.',
			width: 1200,
			height: 900,
		},
		related: [ES.impuestos, ES.vender, ES.bov],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'Heredar un edificio de apartamentos trae decisiones que no pueden esperar: los inquilinos, las rentas, el seguro y las cuentas no se detienen. Atienda primero eso, y después tómese tiempo para decidir si conserva o vende el edificio.',
					'Quién puede vender depende de cómo estaba el título de propiedad. Un fideicomisario sucesor normalmente puede actuar según los términos del fideicomiso. Si el edificio no estaba en un fideicomiso, generalmente pasa por un proceso de sucesión (probate), y el proceso de la corte determina cómo se vende.',
					'El panorama de impuestos muchas veces es más favorable de lo que los herederos esperan en una venta, porque la base fiscal de un heredero generalmente se actualiza al valor del edificio en la fecha del fallecimiento. Conservar el edificio es distinto: California reevalúa el impuesto a la propiedad a valor de mercado, y la Proposición 19 no protege una propiedad de renta heredada.',
					'Involucre desde temprano a un abogado de sucesiones o fideicomisos y a un contador. Trabajamos junto a ellos, y podemos darle una opinión gratuita y confidencial de lo que vale el edificio.',
				],
			},
			{
				heading: 'Sus primeros 30 días',
				visual: 'primeros30',
				paragraphs: [
					'El edificio sigue funcionando mientras los trámites se ponen al día. La renta vence, surgen reparaciones, y las cuentas y los impuestos continúan. Estos pasos protegen el edificio, a los inquilinos y a la familia.',
					'Confirme el seguro. Verifique que el seguro del edificio esté vigente, y avise a la aseguradora del fallecimiento del dueño. Un hueco en la cobertura de un edificio ocupado es un riesgo que nadie quiere.',
					'Mantenga el dinero separado. Las rentas pertenecen a la herencia o al fideicomiso, así que deben depositarse en una cuenta abierta para ese fin, no en una cuenta personal. Su abogado le dirá cómo.',
					`Diga a los inquilinos a quién pagar y a quién llamar. Los inquilinos sobre todo quieren saber que su contrato y su renta seguirán igual, y en la venta de un edificio ocupado, por lo general así es. Nuestra guía sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}) explica cómo se transmiten los contratos.`,
					'Reúna los documentos. Necesitará el acta de defunción, el fideicomiso o el testamento, los contratos de renta, la lista de rentas actual, el registro del edificio en la Ordenanza de Estabilización de Rentas si está en la Ciudad de Los Ángeles, las facturas de seguro y de impuestos a la propiedad, y los ingresos y gastos de los últimos dos años.',
					'Llame a un abogado y a un contador. Un abogado de sucesiones o fideicomisos confirma quién tiene la autoridad para actuar, y un contador revisa el lado de los impuestos. Los dos deben participar antes de que alguien anuncie el edificio.',
				],
			},
			{
				heading: 'Fideicomiso o probate: ¿quién puede vender?',
				visual: 'fideicomisoProbate',
				paragraphs: [
					'Si el edificio estaba en un fideicomiso en vida (living trust), el fideicomisario sucesor generalmente tiene la autoridad para vender, siguiendo los términos del fideicomiso. Una venta de un fideicomiso normalmente no necesita la aprobación de una corte.',
					'Si el edificio no estaba en un fideicomiso, generalmente pasa por probate. Un edificio de apartamentos vale muchas veces el límite de California para herencias pequeñas, que es de unos $200,000, así que no aplica el proceso simplificado para herencias pequeñas. La corte nombra a un albacea o administrador, y esa persona, no los herederos directamente, maneja la venta.',
					'Cuánto interviene la corte depende de la autoridad que otorgue. Con autoridad plena bajo la Ley de Administración Independiente de Herencias de California, un albacea generalmente puede vender después de avisar a los herederos de la venta propuesta, y la corte interviene solo si alguien se opone. Con autoridad limitada, la venta normalmente va a la corte para su confirmación, y en esa audiencia otros compradores pueden ofrecer más que el precio aceptado. Su abogado de sucesiones le dirá cuál aplica.',
					'Por eso la pregunta legal viene antes que la del precio. Un comprador quiere saber que el vendedor puede entregar un título limpio y una fecha de cierre, y un corredor que entiende el proceso puede armar el calendario alrededor de eso. Nuestra página de [ventas de fideicomisos y herencias](/es/ventas-de-fideicomisos-y-herencias/) explica cómo trabajamos con fideicomisarios y albaceas.',
				],
			},
			{
				heading: '¿Qué impuesto pagará si vende?',
				paragraphs: [
					`A la mayoría de los herederos les preocupa el impuesto sobre las ganancias de capital. La respuesta usual es mejor de lo que temen. Según las reglas del IRS, la base de una propiedad heredada generalmente es su valor justo de mercado en la fecha del fallecimiento del dueño, o en una fecha de valuación alternativa si el albacea la elige. Eso reinicia el punto de partida para calcular la ganancia, así que un edificio vendido poco después del fallecimiento normalmente produce poca o ninguna ganancia sujeta a impuestos, y el historial de depreciación del dueño anterior generalmente no se transmite. Nuestra guía sobre [ganancias de capital y recuperación de la depreciación](${p('impuestos')}) explica las piezas.`,
					`Por eso el valor en la fecha del fallecimiento es importante. Un avalúo formal es la forma habitual de respaldarlo, y una opinión de valor del corredor no es un avalúo. Explicamos la diferencia en nuestro artículo sobre [opinión de valor frente a avalúo](${p('bov')}).`,
					'El impuesto federal sobre herencias es un impuesto distinto, sobre la herencia y no sobre el heredero, y aplica solo a herencias grandes. Para quienes fallezcan en 2026, la exención federal es de $15 millones por persona. California no tiene su propio impuesto sobre herencias.',
					`Si la herencia vende el edificio, aplican los impuestos de transferencia habituales de la venta, incluida la Medida ULA por encima de $5.4 millones dentro de la Ciudad de Los Ángeles. Pregunte al oficial de escrow si aplica alguna exención a su situación, y vea nuestra [guía de la Medida ULA](${p('ula')}) para saber cómo funcionan los umbrales.`,
				],
			},
			{
				heading: 'Si lo conserva: el impuesto a la propiedad',
				paragraphs: [
					'Conservar un edificio heredado tiene su propio efecto fiscal. En California, un cambio de propiedad provoca una reevaluación, así que el valor evaluado del edificio se actualiza al valor de mercado. Para un edificio que se tuvo por décadas, eso puede subir mucho la factura anual de impuestos a la propiedad.',
					'La Proposición 19 limita la antigua exclusión entre padres e hijos a una casa familiar que era la residencia principal del padre o la madre y pasa a ser la residencia principal del hijo, y a las granjas familiares. La Junta de Igualación (Board of Equalization) indica que una transferencia de una propiedad de renta entre padres e hijos no califica para la exclusión. Por eso un edificio de apartamentos heredado generalmente se reevalúa.',
					'También hay que avisar del fallecimiento al asesor del condado. La declaración de cambio de propiedad por el fallecimiento de un dueño (formulario BOE-502-D) vence dentro de los 150 días siguientes a la fecha del fallecimiento, y presentarla tarde puede traer multas. Normalmente la presenta el albacea o el fideicomisario, con ayuda del abogado.',
				],
			},
			{
				heading: '¿Conservarlo o venderlo?',
				paragraphs: [
					'No hay una respuesta correcta, solo la que le conviene a su familia. Algunas preguntas ayudan. ¿Alguien quiere administrar el edificio, y sabe lo que implica? ¿Pueden los herederos ponerse de acuerdo en un plan? ¿Cuánto sería la factura de impuestos a la propiedad después de la reevaluación? ¿Qué reparaciones vienen? ¿Y qué haría el dinero de la venta por la familia en comparación con el ingreso del edificio?',
					`Nuestra guía sobre [si debe vender un edificio de apartamentos](${p('vender')}) repasa siete preguntas que conviene responder primero. Si los herederos quieren vender, pueden anunciar el edificio abiertamente o venderlo con discreción a un grupo limitado de compradores. Nuestro artículo sobre [vender fuera del mercado abierto frente a anunciarlo](/es/insights/${ES.fueraDelMercado}/) explica las ventajas y desventajas, incluido por qué la privacidad importa a muchas familias.`,
				],
			},
			{
				heading: 'Cómo vendemos edificios heredados',
				paragraphs: [
					'Los edificios que llegan por una herencia muchas veces son más viejos, con mantenimiento pendiente y rentas que no se han movido en años. Eso es común, y no impide una venta. Fijamos el precio de estos edificios con honestidad, a partir de la lista de rentas y las ventas comparables, y los presentamos a compradores que saben lo que están asumiendo, para que a la familia no se le pida arreglar primero décadas de decisiones pospuestas.',
					`Trabajamos con el fideicomisario o el albacea, el abogado y el contador para que la venta encaje con el calendario legal. Una venta típica de un edificio de apartamentos en Los Ángeles toma de 60 a 90 días desde que se anuncia hasta el cierre, y una venta que necesita confirmación de la corte agrega un paso. Nuestra [guía paso a paso para vender](${p('paso')}) muestra cada etapa.`,
				],
			},
			{
				heading: 'Errores que le ayudaríamos a evitar',
				paragraphs: [
					'Esperar sin un plan. El seguro, los impuestos y las reparaciones continúan cada mes, haya o no alguien decidido qué hacer.',
					'Fijar el precio por sentimiento. El valor de un edificio lo fijan su ingreso y lo que los compradores están pagando, no lo que significó para la familia.',
					'Omitir el valor en la fecha del fallecimiento. Un avalúo formal respalda la base fiscal. Pregunte a su contador si necesita uno.',
					'Suponer que la Proposición 19 mantendrá bajo el impuesto a la propiedad. Para un edificio de renta, generalmente no lo hará.',
					'Dejar a los inquilinos sin información. Una nota breve y honesta sobre a quién pagar y a quién llamar evita la mayoría de los problemas.',
				],
			},
			{
				heading: 'Hable con nosotros',
				paragraphs: [
					`Acompañamos a familias, fideicomisarios y albaceas en estas ventas, a su ritmo, y Troy Lucero se los explica en español. Empiece con una [opinión de valor](${BOV}) gratis y confidencial, o lea más en nuestra página de [ventas de fideicomisos y herencias](/es/ventas-de-fideicomisos-y-herencias/).`,
					'Este artículo es información general, no asesoría legal ni de impuestos. Las reglas de sucesiones y de impuestos son detalladas y cambian, así que confirme los detalles con un abogado de sucesiones o fideicomisos de California y con un contador.',
				],
			},
			{
				heading: 'Fuentes',
				paragraphs: [
					'[IRS, Publicación 551: Base de los activos](https://www.irs.gov/publications/p551) (en inglés)',
					'[Junta de Igualación de California: Proposición 19](https://www.boe.ca.gov/prop19/) (en inglés)',
					'[IRS: Novedades sobre los impuestos de herencias y donaciones](https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax) (en inglés)',
					'[Junta de Igualación de California: BOE-502-D, Declaración de cambio de propiedad por el fallecimiento de un dueño de bienes raíces (formulario de muestra)](https://www.boe.ca.gov/proptaxes/pdf/sample-boe502d.pdf) (en inglés)',
				],
			},
		],
		faqs: [
			{
				q: '¿Qué debo hacer primero si heredé un edificio de apartamentos?',
				a: 'Atienda lo que no puede esperar: confirme que el seguro esté vigente, mantenga las rentas en una cuenta separada de la herencia o el fideicomiso, diga a los inquilinos a quién pagar y a quién llamar, reúna los documentos y llame a un abogado de sucesiones o fideicomisos y a un contador antes de que alguien anuncie el edificio.',
			},
			{
				q: '¿Quién puede vender un edificio heredado, un fideicomiso o un probate?',
				a: 'Si el edificio estaba en un fideicomiso en vida, el fideicomisario sucesor generalmente puede vender siguiendo los términos del fideicomiso. Si no estaba en un fideicomiso, generalmente pasa por probate, y la corte nombra a un albacea o administrador que maneja la venta. Según la autoridad que otorgue la corte, la venta puede necesitar su confirmación.',
			},
			{
				q: '¿Pagaré impuesto sobre las ganancias de capital si vendo un edificio que heredé?',
				a: 'Muchas veces poco o nada. La base de una propiedad heredada generalmente se actualiza a su valor justo de mercado en la fecha del fallecimiento del dueño, así que un edificio vendido poco después normalmente produce poca o ninguna ganancia sujeta a impuestos. Confirme los detalles con su contador.',
			},
			{
				q: '¿Me protege la Proposición 19 del aumento del impuesto a la propiedad si conservo el edificio?',
				a: 'Generalmente no. La Proposición 19 limita la exclusión entre padres e hijos a una casa familiar y a las granjas familiares, y no a una propiedad de renta. Un edificio de apartamentos heredado generalmente se reevalúa a valor de mercado, lo que puede subir mucho la factura anual de impuestos.',
			},
			{
				q: '¿Qué hago con los inquilinos cuando heredo un edificio?',
				a: 'Dígales a quién pagar y a quién llamar. Los inquilinos sobre todo quieren saber que su contrato y su renta seguirán igual, y en la venta de un edificio ocupado, por lo general así es. Una nota breve y honesta evita la mayoría de los problemas.',
			},
			{
				q: '¿Debo conservar o vender el edificio de apartamentos que heredé?',
				a: 'No hay una respuesta correcta, solo la que le conviene a su familia. Considere si alguien quiere administrar el edificio, si los herederos pueden ponerse de acuerdo, cuánto serían los impuestos a la propiedad después de la reevaluación, qué reparaciones vienen y qué haría el dinero de la venta por la familia.',
			},
		],
	},
	{
		slug: ES.findeano,
		enSlug: 'selling-la-apartment-building-before-year-end',
		title: '¿Piensa vender? El reloj de fin de año ya empezó',
		seoTitle: 'Vender un Edificio Antes de Fin de Año: Calendario',
		description: 'Una venta típica en Los Ángeles toma de 60 a 90 días. Cómo programar un cierre en diciembre o enero, y qué significa para un intercambio 1031.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/reloj-de-fin-de-ano.webp',
			alt: 'Gráfica de calendario: anunciar en octubre, escrow en noviembre y cerrar antes del 31 de diciembre. ¿Año fiscal 2026 o 2027? El momento lo decide usted.',
			width: 1200,
			height: 900,
		},
		related: [ES.impuestos, ES.intercambio, ES.vender],
		sections: [
			{
				heading: 'Por qué octubre es el mes para decidir',
				paragraphs: [
					'Si está pensando en vender su edificio de apartamentos, octubre es el mes para decidir en qué año fiscal quiere que caiga la venta. En general, una venta se reporta en el año en que cierra, no en el año en que se anuncia ni en el que se firma el contrato, así que el calendario importa más de lo que muchos dueños esperan.',
				],
			},
			{
				heading: 'Cuánto tarda normalmente una venta de apartamentos en Los Ángeles',
				visual: 'findeanoPasos',
				paragraphs: [
					'Una venta típica de un edificio de apartamentos en Los Ángeles toma de 60 a 90 días desde que se anuncia hasta el cierre: unas semanas de mercadeo y luego de 30 a 45 días de escrow. Cada venta es diferente, y el precio, el financiamiento del comprador y la revisión del comprador pueden mover la fecha, pero ese rango es un número útil para planear.',
					'Si cuenta hacia atrás desde ahí, el panorama de fin de año se aclara. Si anuncia ahora, un cierre el 31 de diciembre es realista. Si espera hasta noviembre, es probable que cierre en 2027.',
				],
			},
			{
				heading: 'Cierre en diciembre o cierre en enero',
				visual: 'findeanoCols',
				paragraphs: [
					'Ninguno es mejor automáticamente. Un cierre en diciembre pone la ganancia en su declaración de 2026. Un cierre en enero aplaza esa factura de impuestos un año completo. Cuál le conviene depende de sus ingresos de este año y del próximo, de sus otras deducciones y planes, y de adónde quiere que vaya el dinero, una conversación que debe tener con su contador antes de anunciar el edificio, no después de estar en contrato.',
				],
			},
			{
				heading: 'Si planea un intercambio 1031, el calendario importa todavía más',
				paragraphs: [
					'Un intercambio 1031 le da 45 días desde el cierre para identificar una propiedad de reemplazo y 180 días para cerrar su compra. Hay una trampa en las ventas de fin de año: los 180 días terminan antes si la fecha de entrega de su declaración de impuestos del año de la venta llega primero, a menos que presente una prórroga. Con una venta en diciembre, los 180 días pasarían de la fecha límite de abril, así que pregunte a su contador sobre presentar una prórroga para conservar el plazo completo.',
					`Para ver con más detalle cómo funcionan los intercambios, vea nuestra guía de [intercambios 1031](/es/intercambios-1031/) y nuestro artículo sobre [por qué los dueños de apartamentos en Los Ángeles hacen intercambios hacia propiedades triple net](${p('intercambio')}).`,
				],
			},
			{
				heading: 'Empiece con sus metas y luego arme el calendario',
				paragraphs: [
					`El calendario correcto empieza con lo que usted quiere lograr con la venta: un año fiscal en particular, un precio en particular o un paso sin problemas a un intercambio 1031. De ahí, el primer paso es saber cuánto vale su edificio. Puede obtener un rango rápido con nuestra [calculadora gratuita de valor de propiedad](/property-value/) (en inglés), y una [opinión de valor](${BOV}) gratis le da un número basado en las rentas, el estado y la mezcla de unidades reales de su edificio.`,
					'Si quiere un calendario de venta armado alrededor de sus metas, con gusto lo trazamos con usted. Comuníquese con Troy Lucero, que le atiende en español, o con Josh Kaplan, de Highlight Multifamily Group.',
					'Este artículo es información general, no asesoría legal ni de impuestos. Hable con su contador o con su abogado de impuestos sobre cómo le afecta el momento de una venta.',
				],
			},
		],
		faqs: [
			{
				q: '¿En qué año se reporta la venta de mi edificio, cuando lo anuncio o cuando cierra?',
				a: 'En general, una venta se reporta en el año en que cierra, no en el año en que se anuncia ni en el que se firma el contrato. Por eso el calendario importa más de lo que muchos dueños esperan.',
			},
			{
				q: '¿Cuánto tarda vender un edificio de apartamentos en Los Ángeles?',
				a: 'Una venta típica toma de 60 a 90 días desde que se anuncia hasta el cierre: unas semanas de mercadeo y luego de 30 a 45 días de escrow. Cada venta es diferente, pero ese rango es un número útil para planear.',
			},
			{
				q: '¿Si anuncio mi edificio ahora, puedo cerrar antes de fin de año?',
				a: 'Si anuncia ahora, un cierre el 31 de diciembre es realista. Si espera hasta noviembre, es probable que cierre en 2027.',
			},
			{
				q: '¿Me conviene más cerrar en diciembre o en enero?',
				a: 'Ninguno es mejor automáticamente. Un cierre en diciembre pone la ganancia en su declaración de 2026, y uno en enero aplaza esa factura de impuestos un año. Depende de sus ingresos de este año y del próximo, de sus deducciones y de sus planes, y conviene conversarlo con su contador antes de anunciar el edificio.',
			},
			{
				q: '¿Cómo afecta una venta de fin de año a un intercambio 1031?',
				a: 'Un intercambio 1031 da 45 días para identificar una propiedad de reemplazo y 180 días para cerrar. En una venta de fin de año, los 180 días terminan antes si la fecha de entrega de su declaración de impuestos llega primero, a menos que presente una prórroga. Pregunte a su contador al respecto.',
			},
			{
				q: '¿Por dónde empiezo si quiero vender antes de fin de año?',
				a: `Empiece con sus metas, y luego averigüe cuánto vale su edificio. Una [opinión de valor](${BOV}) gratis le da un número basado en las rentas, el estado y la mezcla de unidades reales de su edificio.`,
			},
		],
	},
	{
		slug: ES.fourplex,
		enSlug: 'selling-a-fourplex-or-small-apartment-building-in-los-angeles',
		title: 'Vender un fourplex o un edificio de apartamentos pequeño en Los Ángeles',
		seoTitle: 'Vender un Fourplex o Edificio Pequeño en Los Ángeles',
		description: 'Cómo difieren los compradores, el financiamiento, el control de rentas y el precio al vender un fourplex o un edificio pequeño frente a uno grande.',
		date: '2026-11-03',
		image: {
			src: '/images/insights/es/vender-fourplex.webp',
			alt: 'Gráfica: un fourplex se vende de otra manera. Hay dos tipos de compradores, quienes vivirán en el edificio e inversionistas. Los edificios de una a cuatro unidades muchas veces usan préstamos residenciales. Fije el precio con ventas comparables locales.',
			width: 1200,
			height: 900,
		},
		related: [ES.valorar, ES.inquilinos, ES.paso],
		sections: [
			{
				heading: 'Lo más importante',
				paragraphs: [
					'Los edificios de dos a cuatro unidades se venden de forma distinta a los edificios de apartamentos más grandes. Los compradores, el financiamiento y la forma de fijar el precio son diferentes.',
					'Muchos compradores de edificios pequeños son personas que van a vivir en una de las unidades o inversionistas más pequeños que se financian con un préstamo residencial, mientras que los edificios de cinco unidades o más se financian con préstamos comerciales y se valoran sobre todo por su ingreso.',
					'Las rentas exactas, los registros en orden y un panorama claro del estado del edificio importan tanto en una venta pequeña como en una grande.',
				],
			},
			{
				heading: 'Quién compra un fourplex',
				paragraphs: [
					'Los fourplex y otros edificios de dos a cuatro unidades atraen a dos tipos principales de compradores. Quienes van a vivir en el edificio ocupan una unidad y rentan las demás, lo que a veces les permite dar menos de enganche que un inversionista. Los inversionistas más pequeños, incluidos dueños que hacen un intercambio desde otra propiedad, compran por el ingreso y la apreciación a largo plazo.',
					'Como el grupo de compradores incluye a personas que quieren la propiedad como lugar donde vivir, los edificios pequeños a veces pueden venderse por más de lo que su ingreso por sí solo sustentaría.',
				],
			},
			{
				heading: 'Cómo difiere el financiamiento',
				visual: 'fourplexTabla',
				paragraphs: [
					'En general, los edificios de hasta cuatro unidades pueden financiarse con hipotecas residenciales, mientras que los edificios de cinco unidades o más necesitan préstamos comerciales. Un préstamo residencial depende mucho de los ingresos y el crédito del comprador, y el ingreso de la propiedad pesa menos. Un préstamo comercial examina con cuidado el ingreso operativo neto y la tasa de capitalización del edificio.',
					'Esa diferencia cambia quién puede comprar su edificio y cómo lo tratará el avalúo del prestamista, así que conviene saber de qué lado de la línea está su edificio.',
				],
			},
			{
				heading: 'Cómo se fija el precio',
				paragraphs: [
					'Los edificios pequeños normalmente se valoran comparando ventas recientes de edificios parecidos cercanos, con el precio por unidad, el precio por pie cuadrado y el multiplicador de renta bruta, que es el precio dividido entre la renta anual. Los edificios más grandes dependen más del ingreso operativo neto y de la tasa de capitalización.',
					`Para un fourplex, las comparables más útiles son otros edificios pequeños del mismo vecindario, no complejos grandes de apartamentos. Una [opinión de valor](${BOV}) basada en esas comparables y en sus propias rentas es la forma más confiable de fijar un precio, y nuestro artículo sobre [cómo valoran los compradores un edificio de apartamentos](${p('valorar')}) explica las medidas principales.`,
				],
			},
			{
				heading: 'El control de rentas sigue aplicando',
				paragraphs: [
					`Ser pequeño no saca a un edificio de las reglas de renta. En la Ciudad de Los Ángeles, la Ordenanza de Estabilización de Rentas generalmente cubre los edificios de varias unidades con certificado de ocupación emitido antes del 1 de octubre de 1978, incluidos los más pequeños, y los edificios más nuevos normalmente caen bajo el límite estatal de la AB 1482, a menos que estén exentos. Nuestros artículos sobre [vender con inquilinos bajo control de rentas](${p('inquilinos')}) y el [límite de rentas de la AB 1482 en 2026](${p('ab1482')}) explican cómo esas reglas afectan el precio.`,
				],
			},
			{
				heading: 'Cómo preparar un edificio pequeño para la venta',
				paragraphs: [
					'Con pocas unidades, cada una cuenta. Una sola unidad vacía, o un inquilino que paga mucho menos que el mercado, puede cambiar los números de forma notable. Los compradores examinarán con cuidado la mezcla de unidades, el estado del techo, la plomería y el sistema eléctrico, y la edad de los sistemas principales.',
					`Arreglar primero los problemas pequeños, confirmar sus rentas y los términos de los contratos, y organizar sus contratos de renta y sus registros de gastos mantienen la venta en marcha. Los pasos son los mismos que en una venta más grande, y los explicamos en nuestra guía del [proceso paso a paso para vender un edificio de apartamentos en Los Ángeles](${p('paso')}).`,
				],
			},
			{
				heading: 'Un ejemplo de nuestras ventas cerradas',
				paragraphs: [
					'Hemos vendido edificios pequeños en todo Los Ángeles. En [14654 Gault St en Van Nuys](/closed-sales/14654-gault-st-van-nuys-ca-91405/) (en inglés), un edificio de cuatro unidades, nuestro cliente vendedor usó un [intercambio 1031](/es/intercambios-1031/) para pasar a un fourplex más nuevo en North Hollywood. Puede ver el resto de nuestras ventas en la página de [ventas cerradas](/closed-sales/) (en inglés).',
				],
			},
			{
				heading: 'Próximos pasos',
				paragraphs: [
					`Si usted es dueño de un fourplex o de un edificio de apartamentos pequeño en Los Ángeles y quiere saber por cuánto se vendería, pida una [opinión de valor](${BOV}) gratis y confidencial. Este artículo es información general, no asesoría legal ni de impuestos. Hable con su abogado y su contador sobre su situación.`,
				],
			},
		],
		faqs: [
			{
				q: '¿En qué se diferencia vender un fourplex de vender un edificio de apartamentos grande?',
				a: 'Los compradores, el financiamiento y la forma de fijar el precio son diferentes. Muchos compradores de edificios pequeños van a vivir en una de las unidades o son inversionistas más pequeños con un préstamo residencial, mientras que los edificios de cinco unidades o más se financian con préstamos comerciales y se valoran sobre todo por su ingreso.',
			},
			{
				q: '¿Quién compra un fourplex?',
				a: 'Dos tipos principales de compradores: quienes van a vivir en una unidad y rentan las demás, que a veces dan menos de enganche, e inversionistas más pequeños, incluidos dueños que hacen un intercambio desde otra propiedad.',
			},
			{
				q: '¿Se puede financiar un fourplex con una hipoteca residencial?',
				a: 'En general, los edificios de hasta cuatro unidades pueden financiarse con hipotecas residenciales, mientras que los de cinco unidades o más necesitan préstamos comerciales. Eso cambia quién puede comprar su edificio y cómo lo tratará el avalúo del prestamista.',
			},
			{
				q: '¿Cómo se fija el precio de un fourplex?',
				a: 'Normalmente se compara con ventas recientes de edificios pequeños parecidos y cercanos, usando el precio por unidad, el precio por pie cuadrado y el multiplicador de renta bruta (el precio dividido entre la renta anual). Una opinión de valor basada en esas comparables y en sus propias rentas es la forma más confiable.',
			},
			{
				q: '¿El control de rentas aplica a un edificio pequeño?',
				a: 'Sí. En la Ciudad de Los Ángeles, la Ordenanza de Estabilización de Rentas generalmente cubre los edificios de varias unidades con certificado de ocupación anterior al 1 de octubre de 1978, incluidos los pequeños, y los más nuevos normalmente caen bajo el límite estatal de la AB 1482, a menos que estén exentos.',
			},
			{
				q: '¿Cómo preparo mi edificio pequeño para la venta?',
				a: 'Arregle primero los problemas pequeños, confirme sus rentas y los términos de los contratos, y organice sus contratos de renta y sus registros de gastos. Con pocas unidades, cada una cuenta: una sola unidad vacía o un inquilino que paga mucho menos que el mercado puede cambiar los números de forma notable.',
			},
		],
	},
];
