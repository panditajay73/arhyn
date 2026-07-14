import { projectAssets, serviceStacks, teamAssets } from "./data.assets";
import type { SiteData } from "./data.types";

const serviceCopy = [
  {
    title: "Desarrollo de sitios web",
    problem: "La mayoría de los negocios locales no tiene sitio web, o tiene uno que no se actualiza desde 2016.",
    solution: "Sitios rápidos, modernos y mobile-first, diseñados para convertir visitantes en clientes.",
    benefit: "Un escaparate digital que trabaja 24/7, incluso cuando la tienda está cerrada.",
  },
  {
    title: "Desarrollo de software a medida",
    problem: "Las herramientas estándar rara vez encajan con la forma real en que opera un negocio específico.",
    solution: "Herramientas internas y plataformas a medida, construidas alrededor de flujos reales, no plantillas genéricas.",
    benefit: "Software que se adapta al negocio, en lugar de obligar al negocio a adaptarse al software.",
  },
  {
    title: "Automatización con IA",
    problem: "El trabajo administrativo repetitivo - agenda, seguimientos, entrada de datos - consume horas cada semana.",
    solution: "Automatizaciones con IA que manejan tareas operativas repetitivas en segundo plano.",
    benefit: "Los dueños recuperan tiempo para enfocarse en clientes, no en papeleo.",
  },
  {
    title: "Chatbots con IA",
    problem: "Las llamadas perdidas y las respuestas lentas hacen perder reservas todos los días.",
    solution: "Asistentes conversacionales entrenados para sitios web, WhatsApp e Instagram DMs.",
    benefit: "Respuestas instantáneas y siempre activas que convierten consultas en reservas confirmadas.",
  },
  {
    title: "Desarrollo de CRM",
    problem: "Los datos de clientes quedan dispersos entre cuadernos, hojas de cálculo y la memoria de alguien.",
    solution: "Un CRM simple y único, creado según cómo el equipo realmente hace seguimiento.",
    benefit: "Ningún cliente, lead o seguimiento vuelve a perderse.",
  },
  {
    title: "Sistemas ERP",
    problem: "Inventario, personal, facturación y pedidos viven en herramientas desconectadas.",
    solution: "Sistemas ERP unificados que conectan cada parte operativa.",
    benefit: "Una sola fuente de verdad para todo el negocio, actualizada en tiempo real.",
  },
  {
    title: "Automatización empresarial",
    problem: "Los procesos manuales no escalan más allá de cierto punto sin contratar más personas.",
    solution: "Automatización integral de flujos de trabajo en reservas, facturación y comunicación.",
    benefit: "Crecimiento sin que los costos operativos crezcan en la misma proporción.",
  },
  {
    title: "Optimización de Google Business",
    problem: "Los perfiles de Google Business incompletos o inactivos reducen la visibilidad en búsquedas locales.",
    solution: "Configuración, optimización y gestión continua de la presencia en Google Business.",
    benefit: "Mayor visibilidad justo cuando clientes cercanos están buscando.",
  },
  {
    title: "SEO",
    problem: "Un sitio bonito que nadie encuentra es un sitio que no funciona.",
    solution: "SEO técnico y de contenido integrado desde el primer día, no añadido al final.",
    benefit: "Tráfico orgánico constante y acumulativo en lugar de dependencia de anuncios pagados.",
  },
  {
    title: "Aplicaciones en la nube",
    problem: "Los sistemas locales fallan, no escalan y son difíciles de acceder de forma remota.",
    solution: "Aplicaciones cloud-native diseñadas para fiabilidad y acceso remoto desde cualquier lugar.",
    benefit: "Sistemas de negocio que permanecen online y accesibles, esté donde esté el dueño.",
  },
  {
    title: "Soluciones de bases de datos",
    problem: "Años de datos del negocio atrapados en hojas de cálculo, difíciles de consultar e inseguros.",
    solution: "Bases de datos estructuradas y seguras, diseñadas según cómo el negocio reporta y crece.",
    benefit: "Datos finalmente útiles para decisiones reales, no solo para almacenamiento.",
  },
  {
    title: "Aplicaciones móviles",
    problem: "Los clientes esperan una experiencia similar a una app, no solo una pestaña móvil del navegador.",
    solution: "Apps móviles con sensación nativa para reservas, fidelización e interacción con clientes.",
    benefit: "Un canal directo a la pantalla principal de los clientes.",
  },
  {
    title: "Diseño UI/UX",
    problem: "Interfaces torpes y confusas empujan silenciosamente a los clientes hacia la competencia.",
    solution: "Interfaces diseñadas según comportamiento real de usuarios y probadas para claridad, no solo apariencia.",
    benefit: "Cada interacción se siente simple, lo que construye confianza en la marca.",
  },
  {
    title: "Desarrollo de APIs",
    problem: "Las herramientas que no se comunican entre sí crean trabajo duplicado y errores.",
    solution: "APIs limpias y documentadas que conectan sistemas internos y herramientas de terceros.",
    benefit: "Un ecosistema conectado en lugar de un mosaico de apps aisladas.",
  },
  {
    title: "Dashboards y analítica",
    problem: "Los dueños deciden por intuición porque los datos no están visibles en ninguna parte.",
    solution: "Dashboards en tiempo real que muestran los números que realmente importan.",
    benefit: "Decisiones claras y seguras respaldadas por datos vivos del negocio.",
  },
] as const;

export const services = serviceCopy.map((service, index) => ({
  ...service,
  stack: serviceStacks[index],
})) satisfies SiteData["services"];

export const whyChoose = [
  { title: "Entrega rápida", desc: "Software funcionando en semanas, no en trimestres." },
  { title: "Arquitectura escalable", desc: "Construida para soportar crecimiento desde el primer día, no para rehacerla después." },
  { title: "Mentalidad AI-first", desc: "La automatización se diseña desde el inicio, no se añade como parche." },
  { title: "Enfoque de negocio", desc: "Cada desarrollo empieza con el problema del negocio, no con la tecnología." },
  { title: "Listo para la nube", desc: "Desplegado en infraestructura que se mantiene online y escala bajo demanda." },
  { title: "Optimizado para SEO", desc: "La visibilidad se integra en la base del sitio." },
  { title: "Seguro por defecto", desc: "Prácticas modernas de seguridad aplicadas a cada sistema que entregamos." },
  { title: "Totalmente responsive", desc: "Una experiencia perfeccionada para teléfono, tablet y escritorio." },
  { title: "Soporte a largo plazo", desc: "Seguimos después del lanzamiento - los sistemas se mantienen, no se abandonan." },
  { title: "Soluciones a medida", desc: "Sin plantillas que pretendan ser plataformas. Construido específicamente para ti." },
] as const satisfies SiteData["whyChoose"];

export const industries = [
  {
    name: "Restaurantes",
    problems: "Reservas manuales, sin pedidos online, presencia inconsistente en Google.",
    solution: "Pedidos online, reserva de mesas y un perfil de Google que realmente convierte.",
  },
  {
    name: "Cafeterías",
    problems: "Dependencia del tráfico peatonal con poco o ningún canal digital para clientes recurrentes.",
    solution: "Sitios pensados para fidelización y menús listos para redes que hacen volver a los clientes.",
  },
  {
    name: "Clínicas de salud",
    problems: "La reserva solo por teléfono provoca citas perdidas y largos tiempos de espera.",
    solution: "Sistemas de citas online con recordatorios automáticos y registros de pacientes.",
  },
  {
    name: "Salones de belleza",
    problems: "Reservas duplicadas y ausencias por agenda manual en cuaderno.",
    solution: "Calendarios digitales de reservas con confirmaciones y recordatorios automáticos.",
  },
  {
    name: "Gimnasios y estudios fitness",
    problems: "Seguimiento manual de membresías y sin forma de gestionar capacidad de clases.",
    solution: "CRMs de membresías, programación de clases y recordatorios automáticos de renovación.",
  },
  {
    name: "Tiendas minoristas",
    problems: "Sin escaparate online, todas las ventas se detienen cuando se cierran las puertas.",
    solution: "Tiendas e-commerce conectadas a inventario real y recogida local.",
  },
  {
    name: "Institutos educativos",
    problems: "Admisiones y comunicación con padres gestionadas completamente en papel.",
    solution: "Portales de admisión, seguimiento de pagos y comunicación automatizada con padres.",
  },
  {
    name: "Fabricantes",
    problems: "Inventario y pedidos distribuidos en hojas de cálculo desconectadas.",
    solution: "Dashboards ERP que unifican inventario, pedidos y estado de producción.",
  },
  {
    name: "Agencias inmobiliarias",
    problems: "Listados dispersos en plataformas sin una tubería central de leads.",
    solution: "Sitios de listados con CRM integrado para seguir cada lead comprador.",
  },
  {
    name: "Negocios de logística",
    problems: "Despacho y seguimiento manuales provocan retrasos y clientes insatisfechos.",
    solution: "Dashboards de despacho y actualizaciones automáticas de estado para cada envío.",
  },
  {
    name: "Agencias de viajes",
    problems: "Itinerarios y pagos gestionados manualmente entre chats y llamadas.",
    solution: "Plataformas de reservas con generadores de itinerarios y pagos integrados.",
  },
  {
    name: "Servicios profesionales",
    problems: "La captación de clientes y la facturación consumen horas que deberían facturarse a clientes.",
    solution: "Portales de clientes que automatizan intake, agenda y facturación.",
  },
] as const satisfies SiteData["industries"];

export const journey = [
  { step: "Negocio offline", detail: "Funciona bien, pero es invisible online y está enterrado en trabajo manual." },
  { step: "Consulta gratuita", detail: "Mapeamos el negocio, los cuellos de botella y la oportunidad." },
  { step: "Estrategia", detail: "Un plan claro: qué construir primero y por qué importa." },
  { step: "Diseño", detail: "Interfaces formadas alrededor de clientes reales y personal real." },
  { step: "Desarrollo", detail: "Software de producción, construido y probado correctamente." },
  { step: "Automatización", detail: "El trabajo repetitivo pasa a los sistemas, no al personal." },
  { step: "Lanzamiento", detail: "En vivo, monitoreado y con soporte - no enviado y olvidado." },
  { step: "Crecimiento", detail: "Una base digital sobre la que el negocio puede seguir construyendo." },
] as const satisfies SiteData["journey"];

const projectCopy = [
  {
    description: "Plataforma de películas y portfolio cinematográfico para mostrar trabajos premium.",
    problem: "Un estudio fotográfico premium no tenía una plataforma a la altura de su propio trabajo.",
  },
  {
    description: "Workspace de productividad para desarrolladores con herramientas y dashboards impulsados por IA.",
    problem: "Los flujos de ingeniería estaban fragmentados entre múltiples herramientas desconectadas.",
  },
  {
    description: "Plataforma de generación de leads para descubrir negocios locales.",
    problem: "Las agencias necesitaban una forma escalable de identificar negocios sin presencia digital.",
  },
  {
    description: "Plataforma eSports con torneos, brackets, equipos y eventos gaming.",
    problem: "Los organizadores necesitaban una plataforma central para torneos y gestión de eventos.",
  },
  {
    description: "Aplicación de planificación fitness con rutinas personalizadas.",
    problem: "Los planes genéricos no se adaptaban a objetivos fitness individuales.",
  },
  {
    description: "Escaparate eCommerce responsive con una experiencia de compra moderna.",
    problem: "Pequeños minoristas necesitaban una plataforma online atractiva para vender.",
  },
] as const;

export const projects = projectAssets.map((project, index) => ({
  ...project,
  ...projectCopy[index],
})) satisfies SiteData["projects"];

const teamCopy = [
  {
    role: "Ingeniero de software, Wipro",
    focus: ["Backend", "IA", "Nube", "Automatización", ".NET", "Python"],
  },
  {
    role: "Ingeniero de software, Wipro",
    focus: ["Frontend", "React", "Ingeniería UI", "Aplicaciones web modernas"],
  },
  {
    role: "Ingeniero de datos, Wipro",
    focus: ["Ingeniería de datos", "ETL", "Plataformas de datos en la nube", "Analítica"],
  },
] as const;

export const team = teamAssets.map((member, index) => ({
  ...member,
  ...teamCopy[index],
})) satisfies SiteData["team"];

export const faqs = [
  {
    q: "¿Cuánto tarda un proyecto típico?",
    a: "Un sitio web empresarial estándar tarda 2-3 semanas. Software a medida, CRMs o sistemas de automatización suelen tomar 4-10 semanas según el alcance. Después de la consulta gratuita damos una timeline específica, no un rango genérico.",
  },
  {
    q: "¿Cómo funciona el precio?",
    a: "Cada negocio es diferente, así que definimos alcance y presupuesto por proyecto después de entender qué se necesita realmente. No hay paquete fijo - solo pagas por lo que impulsa tu negocio.",
  },
  {
    q: "¿Qué pasa después del lanzamiento del sitio o sistema?",
    a: "Seguimos presentes. El soporte a largo plazo significa que monitoreo, actualizaciones y correcciones son parte de la relación, no una entrega única.",
  },
  {
    q: "¿Con qué tecnologías construyen?",
    a: "Depende del proyecto: Next.js, React y TypeScript para web; Python y .NET para backend; PostgreSQL, SQL Server y MongoDB para datos; y AWS, Azure o Google Cloud para hosting.",
  },
  {
    q: "¿Soy dueño del sitio o software final?",
    a: "Sí. Una vez entregado y pagado el proyecto, el código, diseño y configuración de infraestructura son tuyos. También podemos entregar documentación completa y accesos.",
  },
  {
    q: "¿Puede integrarse IA en un pequeño negocio?",
    a: "Sí - normalmente como un chatbot que responde consultas o una automatización que gestiona agenda, recordatorios y seguimientos en segundo plano. No tiene que ser complicado para ser útil.",
  },
  {
    q: "¿Qué pasa si mi negocio ya tiene un sitio web?",
    a: "Primero auditamos lo existente. A veces necesita reconstruirse; otras veces bastan mejoras puntuales de velocidad, SEO o flujo de reservas. La auditoría digital gratuita te dice cuál, con honestidad.",
  },
] as const satisfies SiteData["faqs"];
