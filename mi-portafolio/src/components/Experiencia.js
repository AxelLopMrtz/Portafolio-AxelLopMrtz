import styles from "./Experiencia.module.css"

export default function Experiencia() {
    const experiences = [
        {
            position: "Desarrollador Full Stack",
            company: "FarFay Group",
            period: "Agosto 2022 - Presente",
            description:
                "Desarrollo de aplicaciones web, automatización de procesos y soluciones digitales personalizadas.",
            achievements: [
                "Desarrollo de de un sistema de automatización para WhatsApp",
                "Desarrollo de sitios web en WordPress y React",
                "Creación de formularios y dashboards para la gestión de datos",
            ],
        },
        {
            position: "Desarrollador Web Junior",
            company: "Fibrax",
            period: "Diciembre 2023 - Enero 2024",
            description:
                "Prácticas en desarrollo web utilizando HTML, CSS, PHP y JavaScript. Mantenimiento y actualización de sitios existentes.",
            achievements: [
                "Apoyo en el desarrollo de un sitio web corporativo",
                "Participación en la creación de interfaces",
                "Uso de bases de datos MySQL para la gestión de contenido",
            ],
        },
        // Agrega más experiencias según sea necesario
    ]

    return (
        <section id="experiencia" className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Experiencia</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionDescription}>Mi trayectoria profesional en el desarrollo web</p>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineDot}></div>
                                <span className={styles.period}>{exp.period}</span>
                                <h3 className={styles.position}>{exp.position}</h3>
                                <h4 className={styles.company}>{exp.company}</h4>
                                <p className={styles.description}>{exp.description}</p>
                                <ul className={styles.achievements}>
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
