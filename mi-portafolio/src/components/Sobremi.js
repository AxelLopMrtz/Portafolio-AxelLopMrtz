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
                            {/* Aquí puedes agregar tu foto */}
                            <img src="/images/sobremi.jpg" alt="Mi foto personal" className={styles.profileImage} />
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h3>
                            ¡Hola! Soy <span className={styles.highlight}>Axel López</span>
                        </h3>
                        <p>
                            Tengo 22 años y soy recién egresado de la carrera de Ingeniería en Datos e Inteligencia Organizacional.
                        </p>
                        <p>
                            Tengo experiencia en desarrollo web, especialmente con tecnologías como React y Node.js. Además he trabajado
                            en proyectos de análisis de datos y visualización, lo que me ha permitido combinar mis habilidades técnicas
                            con mi pasión por resolver problemas.
                        </p>
                        <p>
                            Me interesa seguir aprendiendo y creciendo en el campo del desarrollo web y el análisis de datos. Conociendo
                            nuevas tecnologías y herramientas que me ayuden a mejorar mis habilidades y aportar valor a los proyectos en
                            los que trabajo.
                        </p>

                        {/* <div className={styles.details}>
                            <div className={styles.detail}>
                                <span className={styles.label}>Ubicación:</span>
                                <span className={styles.value}>Tu Ciudad, País</span>
                            </div>
                            <div className={styles.detail}>
                                <span className={styles.label}>Disponibilidad:</span>
                                <span className={styles.value}>Disponible para proyectos</span>
                            </div>
                        </div> */}

                        <a href="/cv.pdf" download className={styles.downloadBtn}>
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}