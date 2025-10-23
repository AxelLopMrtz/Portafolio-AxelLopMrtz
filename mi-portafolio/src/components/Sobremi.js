import styles from "./Sobremi.module.css"

export default function Sobremi() {
    return (
        <section id="sobre-mi" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Sobre Mí</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <img src="/images/sobremi.jpg" alt="Mi foto personal" className={styles.profileImage} />
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h3>
                            ¡Hola! Soy <span className={styles.highlight}>Axel López</span>
                        </h3>
                        <p>
                            Soy Ingeniero en Datos con experiencia en desarrollo web y análisis de datos. He trabajado en la creación de
                            plataformas interactivas, chatbots y dashboards utilizando tecnologías como React.js, Node.js, Python y SQL.
                        </p>
                        <p>
                            Durante mi experiencia profesional he desarrollado soluciones integrales que combinan frontend, backend y manejo
                            de datos, además de participar en proyectos de automatización y análisis con herramientas como Flask y Selenium.
                        </p>
                        <p>
                            También he participado en eventos tecnológicos como el Talent Land Hackathon 2025, donde fortalecí mis habilidades
                            en trabajo en equipo y resolución de problemas.
                        </p>

                        <a href="/Docs/cv_axel_lopez.pdf" download className={styles.downloadBtn}>
                            Descargar CV
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}