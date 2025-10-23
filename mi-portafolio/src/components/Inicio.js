import styles from "./Inicio.module.css"

export default function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hola, soy <span className={styles.highlight}>Axel López</span>
                    </h1>
                    <h2 className={styles.subtitle}>Ingeniero en Datos | Desarrollador web</h2>
                    <p className={styles.description}>
                        Ingeniero en Datos con experiencia en desarrollo web utilizando
                        tecnologias como React.js y Node. Me gusta combinar la lógica del
                        análisis con el diseño de interfaces modernas para ofrecer soluciones
                        funcionales y atractivas.
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
                        <div className={styles.shape} style={{ backgroundImage: "url('/images/yo2.jpg')" }}></div>
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