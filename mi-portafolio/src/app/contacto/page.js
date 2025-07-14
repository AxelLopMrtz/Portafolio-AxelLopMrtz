"use client"

import { useState } from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useTheme } from "../../components/ThemeContext"
import styles from "./contacto.module.css"

export default function Contacto() {
    const { theme, toggleTheme } = useTheme()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulación de envío de formulario
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitMessage({
                type: "success",
                text: "¡Mensaje enviado con éxito! Te responderé lo antes posible.",
            })

            // Resetear el formulario después de enviar
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
        }, 2000)
    }

    return (
        <main className={styles.main}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h1 className={styles.sectionTitle}>Contacto</h1>
                        <div className={styles.underline}></div>
                        <p className={styles.sectionDescription}>¡Contáctame!</p>
                    </div>

                    <div className={styles.contactContent}>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
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
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>Teléfono</h3>
                                    <p>+52 998 404 0734</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
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
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>Email</h3>
                                    <p>axel.82011@gmail.com</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
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
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>Ubicación</h3>
                                    <p>Cancún, Quintana Roo, México</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contactForm}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Asunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                                </button>

                                {submitMessage && (
                                    <div className={`${styles.message} ${styles[submitMessage.type]}`}>{submitMessage.text}</div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
