import styles from "./Inicio.module.css"

export default function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hola, soy <span className={styles.highlight}>Axel López</span>
                    </h1>
                    <h2 className={styles.subtitle}>Ingeniero en Datos</h2>
                    <p className={styles.description}>
                        Soy recién egresado de la carrera de Ingeniería en Datos. <br />
                        Tengo experiencia trabajando con tecnologías de desarrollo web
                        como React y Node.js, ademas de conocimientos en bases de datos y
                        análisis de datos.
                    </p>
                    <div className={styles.buttons}>
                        <a href="#proyectos" className={`${styles.btn} ${styles.primary}`}>
                            Ver Proyectos
                        </a>
                        <a href="#sobre-mi" className={`${styles.btn} ${styles.secondary}`}>
                            Sobre Mí
                        </a>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.heroImage}>
                        <div className={styles.shape}></div>
                    </div>
                </div>
            </div>
            <div className={styles.scrollDown}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div>
                    <span className={styles.scrollText}>Scroll Down</span>
                </div>
            </div>
        </section>
    )
}
