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
                            <img src="/images/yo.jpg" alt="Mi foto personal" className={styles.profileImage} />
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h3>
                            ¡Hola! Soy <span className={styles.highlight}>Tu Nombre</span>
                        </h3>
                        <p>
                            Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Me
                            especializo en el desarrollo frontend y tengo experiencia trabajando con diversas tecnologías web.
                        </p>
                        <p>
                            Mi objetivo es combinar diseño y funcionalidad para crear sitios web que no solo se vean bien, sino que
                            también proporcionen una excelente experiencia de usuario. Me encanta aprender nuevas tecnologías y
                            mantenerme actualizado con las últimas tendencias en desarrollo web.
                        </p>
                        <p>
                            Cuando no estoy codificando, disfruto [tus hobbies o intereses]. Creo que mantener un equilibrio entre el
                            trabajo y la vida personal es clave para la creatividad y la productividad.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detail}>
                                <span className={styles.label}>Nombre:</span>
                                <span className={styles.value}>Tu Nombre Completo</span>
                            </div>
                            <div className={styles.detail}>
                                <span className={styles.label}>Email:</span>
                                <span className={styles.value}>tu@email.com</span>
                            </div>
                            <div className={styles.detail}>
                                <span className={styles.label}>Ubicación:</span>
                                <span className={styles.value}>Tu Ciudad, País</span>
                            </div>
                            <div className={styles.detail}>
                                <span className={styles.label}>Disponibilidad:</span>
                                <span className={styles.value}>Disponible para proyectos</span>
                            </div>
                        </div>

                        <a href="/cv.pdf" download className={styles.downloadBtn}>
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}