import { CVData } from '@/types/cv';

export const CV_DATA: CVData = {
    image: "/media/profile.jpg", // Placeholder - User can replace this later
    name: "LUCAS ZAGAR",
    title: "Administrativo y Desarrollador Web jr",
    email: "lucaszagar1@hotmail.com",
    location: "Buenos Aires, Argentina (Zona Norte)",
    phone: "+5491168575717",
    about: "Desarrollador Web orientado a resultados con sólida experiencia en la transformación digital de procesos administrativos y comerciales. Especializado en la implementación de soluciones e-commerce (Odoo), automatización con chatbots (Botmaker) y optimización de flujos de trabajo. Combino habilidades técnicas en desarrollo frontend con una fuerte capacidad de gestión y visión de negocio, habiendo liderado integraciones tecnológicas que mejoran la eficiencia operativa y la experiencia del cliente.",
    skills: [
        "JavaScript (ES6+)", "Node.js",
        "HTML5 / CSS3 / SASS",
        "Odoo ERP Development", "Botmaker Automation",
        "SEO Tech & Analytics", "Git / GitHub", "Word", "Excel", "Canva"
    ],
    experience: [
        {
            company: "Herrajes Bonzini",
            role: "Administrativo y desarrollo web",
            period: "Marzo 2025 – Febrero 2026",
            description: [
                "Lideré la transformación digital del canal de ventas, desarrollando e implementando el e-commerce de la empresa en Odoo, gestionando un catálogo de +300 productos.",
                "Desarrollé y lancé un Bot de WhatsApp inteligente (Botmaker) en un periodo de 3 semanas, automatizando la atención de primer nivel y consultas de clientes, reduciendo tiempos de respuesta en gran medida gracias a la centralización de lineas de atención. ",
                "Integré herramientas de analítica (Google Analytics, Gtag) para monitorear KPIs de ventas y comportamiento de usuario.",
                "Atendía a 15 vendedores gestionando los pedidos y facturas de sus clientes"
            ]
        },
        {
            company: "Municipalidad de San Isidro",
            role: "Administrativo - Gestión de Licencias",
            period: "2022 – 2025",
            description: [
                "Gestioné expedientes administrativos, manejando situaciones complejas y resolviendo conflictos.",
                "Participé en cada sector de atención ciudadana, incluyendo datos biométricos y trámites digitales.",
                "Supervisé canales de comunicación digital (email corporativo), asegurando respuestas ágiles a solicitudes excepcionales."
            ]
        },
        {
            company: "Arcos Dorados S.A. (McDonald’s)",
            role: "Crew",
            period: "2018 – 2021",
            description: [
                "Desarrollé habilidades de trabajo bajo alta presión y cumplimiento estricto de estándares operativos y de seguridad.",
                "Fomenté el trabajo en equipo en un entorno dinámico, asegurando tiempos de entrega óptimos.",
                "Participé en todos los puestos de trabajo, demostrando adaptabilidad y habilidades técnicas."
            ]
        }
    ],
    education: [
        {
            institution: "Coderhouse",
            degree: "Curso de Desarrollo Web",
            year: "2022",
            description: "Promedio: 9/10. Enfoque en arquitectura web, maquetado responsive y preprocesadores.",
            certificateUrl: "https://drive.google.com/file/d/12NGXuBNdfzZxlcwAXgKCzeOaZUe3vq0A/view?usp=sharing"
        },
        {
            institution: "Instituto Cervantes",
            degree: "Bachiller en Economía y Administración",
            year: "2019"
        }
    ],
    links: {
        email: "lucaszagar1@hotmail.com",
        github: "https://github.com/zagarlucas",
        linkedin: "https://www.linkedin.com/in/lucas-zagar-03ba0a189/"
    },
    languages: [
        "Español: Nativo",
        "Inglés: Intermedio (B1/B2) - Lectura técnica fluida",
        "Portugués: Básico"
    ],
    softSkills: [
        "Resolución de Problemas",
        "Pensamiento Analítico",
        "Gestión de Tiempo",
        "Comunicación Efectiva",
        "Adaptabilidad Tecnológica"
    ]
};
