import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <span className={styles.highlight}>Axel</span>López
                        </Link>
                    </div>

                    <div className={styles.social}>
                        <a href="https://github.com/AxelLopMrtz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/axel-jahir-l%C3%B3pez-mart%C3%ADnez-25a4b5365/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <h3>Navegación</h3>
                        <ul>
                            <li>
                                <a href="#inicio">Inicio</a>
                            </li>
                            <li>
                                <a href="#sobre-mi">Sobre Mí</a>
                            </li>
                            <li>
                                <a href="#tecnologias">Tecnologías</a>
                            </li>
                            <li>
                                <a href="#proyectos">Proyectos</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.linkGroup}>
                        <h3>Más</h3>
                        <ul>
                            <li>
                                <a href="#experiencia">Experiencia</a>
                            </li>
                            <li>
                                <a href="#certificados">Certificados</a>
                            </li>
                            <li>
                                <Link href="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
            </div> */}
        </footer>
    )
}
