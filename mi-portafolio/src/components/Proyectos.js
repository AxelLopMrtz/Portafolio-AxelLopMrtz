import styles from "./Proyectos.module.css"

export default function Proyectos() {
    const projects = [
        {
            title: "Automatización de WhatsApp",
            description: "Un proyecto que permite automatizar el envío de mensajes de WhatsApp a grupos en dispositivos móviles.",
            image: "images/proyectos/whatsapp-auto.png",
            tags: ["Python", "Appium", "ADB"],
            demoLink: "#", // Cambiado a un enlace seguro
        },
        {
            title: "Dashboard de Registros",
            description: "Dashboard alimentado mediante registros de formularios, limpiados y procesados mediante scripts en python.",
            image: "images/proyectos/dashboard-comites.png",
            tags: ["PHP", "CSS", "JavaScript", "MySQL", "Python"],
            demoLink: "#", // Cambiado a un enlace seguro
        },
        {
            title: "WordPress informativo",
            description: "Sitio web informativo desarrollado en WordPress, con un chatbot integrado para resolver dudas relacionadas al sitio.",
            image: "images/proyectos/csp2430.png",
            tags: ["WordPress", "CSS"],
            demoLink: "#", // Cambiado a un enlace seguro
        },
        {
            title: "NeoRadia - Prototipo plataforma de radiología",
            description: "Prototipo de una plataforma de radiología, desarrollada en Hackathon TalentLand en el track de Salud Digna",
            image: "images/proyectos/NeoRadia.png",
            tags: ["ReactJS", "Amazon S3", "NodeJS"],
            demoLink: "#", // Cambiado a un enlace seguro
        },
        {
            title: "Dashboard para el análisis financiero de Cancún FC",
            description: "Dashboard para el análisis financiero de un equipo de fútbol, Cancún FC.",
            image: "images/proyectos/dashboard-cancunfc.png",
            tags: ["ReactJS", "NodeJS", "Python", "MySQL", "ExpressJS", "Postman"],
            demoLink: "#", // Cambiado a un enlace seguro
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
                                <div className={styles.projectLinks}>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                        Demo
                                    </a>
                                </div>
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
