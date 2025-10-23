import Link from "next/link"
import styles from "./Proyectos.module.css"

export default function Proyectos() {
    const projects = [
        {
            slug: "automatizacion-whatsapp",
            title: "Automatización de WhatsApp",
            description:
                "Un proyecto que permite automatizar el envío de mensajes de WhatsApp a grupos en dispositivos móviles.",
            image: "images/proyectos/whatsapp-auto.png",
            tags: ["Python", "Appium", "ADB"],
        },
        {
            slug: "dashboard-cancunfc",
            title: "Dashboard para el análisis financiero de Cancún FC",
            description: "Dashboard para el análisis financiero de un equipo de fútbol, Cancún FC.",
            image: "images/proyectos/dashboard-cancunfc.png",
            tags: ["ReactJS", "NodeJS", "Python", "MySQL", "ExpressJS", "Postman"],
        },
        {
            slug: "dashboard-registros",
            title: "Dashboard de Registros",
            description:
                "Dashboard alimentado mediante registros de formularios, limpiados y procesados mediante scripts en python.",
            image: "images/proyectos/dashboard-comites.png",
            tags: ["PHP", "CSS", "JavaScript", "MySQL", "Python"],
        },
        {
            slug: "wordpress-informativo",
            title: "WordPress informativo",
            description:
                "Sitio web informativo desarrollado en WordPress, con un chatbot integrado para resolver dudas relacionadas al sitio.",
            image: "images/proyectos/csp2430.png",
            tags: ["WordPress", "CSS"],
        },
        {
            slug: "neoradia-prototipo",
            title: "NeoRadia - Prototipo plataforma de radiología",
            description:
                "Prototipo de una plataforma de radiología, desarrollada en Hackathon TalentLand en el track de Salud Digna",
            image: "images/proyectos/NeoRadia.png",
            tags: ["ReactJS", "Amazon S3", "NodeJS"],
        },
    ]

    return (
        <section id="proyectos" className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Mis Proyectos</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionDescription}>Estos son algunos de los proyectos en los que he trabajado</p>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                                {/* <div className={styles.projectLinks}>
                                    <Link href={`/proyectos/${project.slug}`} className={styles.projectLink}>
                                        Ver más
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M7 17L17 7"></path>
                                            <path d="M7 7h10v10"></path>
                                        </svg>
                                    </Link>
                                </div> */}
                            </div>
                            <div className={styles.projectInfo}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={styles.projectTag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
