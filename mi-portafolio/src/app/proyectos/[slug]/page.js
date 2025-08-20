"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import { useTheme } from "../../../components/ThemeContext"
import styles from "./proyecto.module.css"

// Datos de tus proyectos reales
const projectsData = {
    "automatizacion-whatsapp": {
        title: "Automatización de WhatsApp",
        subtitle: "Sistema automatizado para envío masivo de mensajes de WhatsApp",
        longDescription: [
            {
                type: "paragraph",
                content:
                    "Este proyecto es un sistema de automatización para WhatsApp en Android, desarrollado en Python utilizando ADB, Appium y Tkinter. Al usar estas tecnologías requiere asignar ADB a las variables de entorno del sistema, instalar appium y otras librerías adicionales.",
            },
            {
                type: "paragraph",
                content:
                    "Permite enviar mensajes (texto, imagen, audio y video) de forma masiva a múltiples chats detectados en dispositivos o emuladores Android conectados. Está orientado a facilitar campañas de difusión o gestión de grupos."
            },
            {
                type: "image",
                src: "/images/proyectos/whatsapp-auto.png",
                alt: "Interfaz inicial del sistema de automatización de WhatsApp"
            },
            {
                type: "paragraph",
                content:
                    "La interfaz gráfica permite personalizar el contenido, el orden de envío y los dispositivos utilizados. También se pueden extraer datos de grupos como el total de miembros o los nombres, y generar un reporte en Word con los resultados."
            },
            {
                type: "image",
                src: "/images/proyectos/whatsapp-auto2.png",
                alt: "Interfaz de contenidos de mensajes"
            },
            {
                type: "image",
                src: "/images/proyectos/whatsapp-auto3.png",
                alt: "Interfaz de contenidos de orden de envío"
            },
            {
                type: "image",
                src: "/images/proyectos/whatsapp-auto4.png",
                alt: "Interfaz de contenidos de dispositivos"
            },
        ],
        images: ["images/proyectos/whatsapp-auto.png"],
        technologies: ["Python", "Appium", "ADB", "Selenium", "Android SDK"],
        features: [
            "Envío automatizado de mensajes",
            "Soporte para múltiples contactos",
            "Programación de envíos",
            "Personalización de mensajes",
            "Interfaz de usuario intuitiva",
            "Logs detallados de actividad",
        ],
        challenges: [
            "Manejo de la API no oficial de WhatsApp",
            "Sincronización con la interfaz móvil",
            "Gestión de límites de envío",
            "Compatibilidad con diferentes versiones de Android",
        ],
        status: "Completado",
        duration: "2 meses",
        year: "2023",
    },
    "dashboard-registros": {
        title: "Dashboard de Registros",
        subtitle: "Panel de control para análisis de datos de formularios",
        description:
            "Dashboard alimentado mediante registros de formularios, limpiados y procesados mediante scripts en Python.",
        longDescription: `
      Dashboard completo desarrollado para visualizar y analizar datos provenientes de formularios web.
      
      El sistema incluye scripts de Python para la limpieza y procesamiento de datos, asegurando la calidad
      e integridad de la información antes de su visualización.
      
      La interfaz permite generar reportes personalizados, filtrar información por diferentes criterios
      y exportar datos en múltiples formatos.
    `,
        images: ["images/proyectos/dashboard-comites.png", "/placeholder.svg", "/placeholder.svg"],
        technologies: ["PHP", "CSS", "JavaScript", "MySQL", "Python", "Chart.js"],
        features: [
            "Procesamiento automático de datos",
            "Visualización interactiva",
            "Filtros avanzados",
            "Exportación de reportes",
            "Limpieza automática de datos",
            "Interfaz responsive",
        ],
        challenges: [
            "Limpieza de datos inconsistentes",
            "Optimización de consultas SQL",
            "Visualización de grandes volúmenes de datos",
            "Integración entre Python y PHP",
        ],
        status: "Completado",
        duration: "3 meses",
        year: "2023",
    },
    "wordpress-informativo": {
        title: "WordPress Informativo",
        subtitle: "Sitio web con chatbot integrado",
        description:
            "Sitio web informativo desarrollado en WordPress, con un chatbot integrado para resolver dudas relacionadas al sitio.",
        longDescription: `
      Desarrollo de un sitio web informativo completo utilizando WordPress como CMS principal.
      
      La característica destacada es la integración de un chatbot inteligente que puede responder
      preguntas frecuentes y guiar a los usuarios a través del contenido del sitio.
      
      El diseño es completamente responsive y optimizado para SEO, garantizando una excelente
      experiencia de usuario en todos los dispositivos.
    `,
        images: ["images/proyectos/csp2430.png", "/placeholder.svg", "/placeholder.svg"],
        technologies: ["WordPress", "CSS", "JavaScript", "PHP", "Chatbot API"],
        features: [
            "Diseño responsive",
            "Chatbot inteligente",
            "Optimización SEO",
            "Panel de administración",
            "Formularios de contacto",
            "Integración con redes sociales",
        ],
        challenges: [
            "Integración del chatbot con WordPress",
            "Optimización de velocidad de carga",
            "Personalización avanzada del tema",
            "Compatibilidad cross-browser",
        ],
        status: "Completado",
        duration: "1 mes",
        year: "2023",
    },
    "neoradia-prototipo": {
        title: "NeoRadia - Prototipo plataforma de radiología",
        subtitle: "Solución innovadora para el sector salud",
        description:
            "Prototipo de una plataforma de radiología, desarrollada en Hackathon TalentLand en el track de Salud Digna.",
        longDescription: `
      Prototipo desarrollado durante el Hackathon TalentLand 2023 en el track de Salud Digna.
      
      NeoRadia es una plataforma innovadora diseñada para digitalizar y optimizar los procesos
      de radiología, permitiendo a los profesionales de la salud gestionar estudios radiológicos
      de manera más eficiente.
      
      La solución incluye almacenamiento en la nube, visualización de imágenes médicas y
      herramientas de colaboración entre especialistas.
    `,
        images: ["images/proyectos/NeoRadia.png", "/placeholder.svg", "/placeholder.svg"],
        technologies: ["ReactJS", "Amazon S3", "NodeJS", "Express", "MongoDB"],
        features: [
            "Almacenamiento seguro en la nube",
            "Visualización de imágenes DICOM",
            "Colaboración entre especialistas",
            "Historial de pacientes",
            "Reportes automatizados",
            "Interfaz intuitiva",
        ],
        challenges: [
            "Manejo de archivos DICOM",
            "Seguridad de datos médicos",
            "Optimización para imágenes de alta resolución",
            "Desarrollo en tiempo limitado (hackathon)",
        ],
        status: "Prototipo",
        duration: "48 horas",
        year: "2023",
    },
    "dashboard-cancunfc": {
        title: "Dashboard para el análisis financiero de Cancún FC",
        subtitle: "Análisis de datos deportivos y financieros",
        description: "Dashboard para el análisis financiero de un equipo de fútbol, Cancún FC.",
        longDescription: [
            {
                type: "paragraph",
                content:
                    "Dashboard especializado desarrollado para el análisis financiero del equipo de fútbol Cancún FC."
            },
            {
                type: "image",
                src: "/images/proyectos/dashboard-cancunfc.png",
                alt: "Vista general del dashboard financiero"
            },
            {
                type: "paragraph",
                content:
                    "La plataforma integra datos financieros, estadísticas de jugadores y métricas de rendimiento para proporcionar insights valiosos para la toma de decisiones estratégicas."
            },
            {
                type: "paragraph",
                content:
                    "Incluye módulos para análisis de costos, proyecciones financieras y evaluación del ROI en fichajes y operaciones del club."
            },
            {
                type: "image",
                src: "/images/proyectos/dashboard-cancunfc.png",
                alt: "Vista general del dashboard financiero"
            },
        ],
        technologies: ["ReactJS", "NodeJS", "Python", "MySQL", "ExpressJS", "Postman"],
        features: [
            "Análisis financiero detallado",
            "Métricas de rendimiento",
            "Proyecciones y forecasting",
            "Reportes automatizados",
            "API REST completa",
            "Visualización de datos interactiva"
        ],
        challenges: [
            "Integración de múltiples fuentes de datos",
            "Cálculos financieros complejos",
            "Visualización de datos deportivos",
            "Optimización de rendimiento"
        ],
        status: "Completado",
        duration: "4 meses",
        year: "2023"
    },

}

export default function ProyectoDetalle({ params }) {
    // ✅ Usar React.use() para unwrap la Promise de params
    const resolvedParams = use(params)
    const { slug } = resolvedParams
    const project = projectsData[slug]
    const { theme, toggleTheme } = useTheme()

    if (!project) {
        notFound()
    }

    return (
        <main className={styles.main}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.breadcrumb}>
                        <Link href="/#proyectos">Proyectos</Link>
                        <span>/</span>
                        <span>{project.title}</span>
                    </div>

                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.subtitle}>{project.subtitle}</p>

                    <div className={styles.projectMeta}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Estado:</span>
                            <span className={styles.metaValue}>{project.status}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Duración:</span>
                            <span className={styles.metaValue}>{project.duration}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Año:</span>
                            <span className={styles.metaValue}>{project.year}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.projectContent}>
                        <div className={styles.description}>
                            <h2>Descripción del Proyecto</h2>
                            <p>{project.description}</p>
                            <div className={styles.longDescription}>
                                {Array.isArray(project.longDescription) &&
                                    project.longDescription.map((block, index) => {
                                        if (block.type === "paragraph") {
                                            return <p key={index}>{block.content}</p>;
                                        }
                                        if (block.type === "image") {
                                            return (
                                                <div key={index} className={styles.imageBlock}>
                                                    <img src={block.src} alt={block.alt || "Imagen del proyecto"} />
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                            </div>

                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.technologies}>
                                <h3>Tecnologías Utilizadas</h3>
                                <div className={styles.techList}>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.features}>
                        <h2>Características Principales</h2>
                        <div className={styles.featureGrid}>
                            {project.features.map((feature, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20,6 9,17 4,12"></polyline>
                                    </svg>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className={styles.challenges}>
                        <h2>Desafíos y Soluciones</h2>
                        <div className={styles.challengeList}>
                            {project.challenges.map((challenge, index) => (
                                <div key={index} className={styles.challengeItem}>
                                    <h4>Desafío {index + 1}</h4>
                                    <p>{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className={styles.otherProjects}>
                        <h3>Otros proyectos:</h3>
                        <div className={styles.otherProjectsLinks}>
                            {Object.entries(projectsData)
                                .filter(([projectSlug]) => projectSlug !== slug) // Excluir el proyecto actual
                                .map(([projectSlug, projectData], index, array) => (
                                    <span key={projectSlug}>
                                        <Link href={`/proyectos/${projectSlug}`} className={styles.otherProjectLink}>
                                            {projectData.title}
                                        </Link>
                                        {index < array.length - 1 && <span className={styles.separator}> • </span>}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
