"use client"

import { useState } from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useTheme } from "../../components/ThemeContext"
import emailjs from "@emailjs/browser"
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
    const [honeypot, setHoneypot] = useState("")
    const [lastSubmit, setLastSubmit] = useState(0)
    const COOLDOWN_TIME = 30000 // 30 segundos (más amigable que 1 minuto)

    // 🔍 Función de validación mejorada
    const validateForm = () => {
        // Validar longitud mínima del nombre
        if (formData.name.length < 2) {
            setSubmitMessage({
                type: "error",
                text: "El nombre debe tener al menos 2 caracteres.",
            })
            return false
        }

        // Validar que el nombre no sea solo números o caracteres especiales
        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(formData.name)) {
            setSubmitMessage({
                type: "error",
                text: "Por favor ingresa un nombre válido (solo letras).",
            })
            return false
        }

        // Validar email con regex más estricto
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(formData.email)) {
            setSubmitMessage({
                type: "error",
                text: "Por favor ingresa un email válido.",
            })
            return false
        }

        // Validar longitud del mensaje
        if (formData.message.length < 10) {
            setSubmitMessage({
                type: "error",
                text: "El mensaje debe tener al menos 10 caracteres.",
            })
            return false
        }

        // Validar que el mensaje no sea muy largo
        if (formData.message.length > 1500) {
            setSubmitMessage({
                type: "error",
                text: "El mensaje es demasiado largo. Máximo 1500 caracteres.",
            })
            return false
        }

        // Lista ampliada de palabras spam
        const spamWords = [
            "viagra",
            "casino",
            "lottery",
            "winner",
            "congratulations",
            "click here",
            "free money",
            "make money",
            "earn $",
            "bitcoin",
            "crypto investment",
            "loan",
            "credit card",
            "debt",
            "insurance",
            "weight loss",
            "buy now",
            "limited time",
            "act now",
            "urgent",
        ]

        const messageText = formData.message.toLowerCase()
        const subjectText = formData.subject.toLowerCase()
        const nameText = formData.name.toLowerCase()

        if (spamWords.some((word) => messageText.includes(word) || subjectText.includes(word) || nameText.includes(word))) {
            setSubmitMessage({
                type: "error",
                text: "Tu mensaje contiene contenido no permitido.",
            })
            return false
        }

        // Detectar demasiados enlaces
        const urlRegex = /(https?:\/\/[^\s]+)/g
        const urls = messageText.match(urlRegex) || []
        if (urls.length > 1) {
            setSubmitMessage({
                type: "error",
                text: "Solo se permite un enlace por mensaje.",
            })
            return false
        }

        // Detectar texto repetitivo
        const words = formData.message.split(" ")
        const uniqueWords = new Set(words)
        if (words.length > 15 && uniqueWords.size / words.length < 0.6) {
            setSubmitMessage({
                type: "error",
                text: "El mensaje parece contener texto repetitivo.",
            })
            return false
        }

        // Detectar MAYÚSCULAS excesivas (típico de spam)
        const uppercaseRatio = (formData.message.match(/[A-Z]/g) || []).length / formData.message.length
        if (uppercaseRatio > 0.5 && formData.message.length > 20) {
            setSubmitMessage({
                type: "error",
                text: "Por favor, evita escribir en mayúsculas.",
            })
            return false
        }

        return true
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // 🍯 HONEYPOT - Si el campo oculto tiene contenido, es un bot
        if (honeypot) {
            console.log("🤖 Bot detectado por honeypot")
            // Simular éxito para confundir al bot
            setSubmitMessage({
                type: "success",
                text: "Mensaje enviado correctamente.",
            })
            return
        }

        // ⏱️ RATE LIMITING - Verificar tiempo entre envíos
        const now = Date.now()
        if (now - lastSubmit < COOLDOWN_TIME) {
            const remainingTime = Math.ceil((COOLDOWN_TIME - (now - lastSubmit)) / 1000)
            setSubmitMessage({
                type: "error",
                text: `⏰ Por favor espera ${remainingTime} segundos antes de enviar otro mensaje.`,
            })
            return
        }

        // 🔍 VALIDAR FORMULARIO
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitMessage(null)

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: "Axel López",
                // Información adicional para monitoreo
                timestamp: new Date().toISOString(),
                user_agent: navigator.userAgent.substring(0, 100), // Limitar longitud
            }

            await emailjs.send(
                "service_op8m53k",
                "template_d5f729j",
                templateParams,
                "72cHIeECj_f50UP5o",
            )

            setSubmitMessage({
                type: "success",
                text: "✅ ¡Mensaje enviado con éxito! Te responderé lo antes posible.",
            })

            // Actualizar timestamp del último envío
            setLastSubmit(Date.now())

            // 📊 CONTADOR MEJORADO de emails enviados
            const currentMonth = new Date().getMonth()
            const currentYear = new Date().getFullYear()
            const monthKey = `${currentYear}-${currentMonth}`

            const lastMonthKey = localStorage.getItem("lastMonthKey")
            let emailsSent = 1

            if (lastMonthKey === monthKey) {
                emailsSent = Number.parseInt(localStorage.getItem("emailsSent") || "0") + 1
            }

            localStorage.setItem("emailsSent", emailsSent.toString())
            localStorage.setItem("lastMonthKey", monthKey)

            console.log(`📧 Emails enviados este mes: ${emailsSent}/200`)

            // Alerta si se acerca al límite
            if (emailsSent >= 150) {
                console.warn("⚠️ Te quedan pocos créditos de EmailJS!")
                setSubmitMessage({
                    type: "success",
                    text: "✅ Mensaje enviado. Nota: Te quedan pocos créditos de EmailJS este mes.",
                })
            }

            // Resetear formulario
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
            setHoneypot("")
        } catch (error) {
            console.error("❌ Error al enviar el email:", error)
            setSubmitMessage({
                type: "error",
                text: "❌ Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.",
            })
        } finally {
            setIsSubmitting(false)
        }
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

                            <div className={styles.socialLinks}>
                                <h3>Sígueme en:</h3>
                                <div className={styles.socialIcons}>
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
                                    <a
                                        href="https://www.linkedin.com/in/axel-jahir-l%C3%B3pez-mart%C3%ADnez-25a4b5365/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
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
                        </div>

                        <div className={styles.contactForm}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Nombre *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        maxLength="50"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        maxLength="100"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Asunto *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        maxLength="100"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Mensaje *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        maxLength="1500"
                                    ></textarea>
                                    <small className={styles.charCounter}>{formData.message.length}/1500 caracteres</small>
                                </div>

                                {/* 🍯 HONEYPOT - Campo oculto para detectar bots */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "-9999px",
                                        opacity: 0,
                                        pointerEvents: "none",
                                    }}
                                >
                                    <label htmlFor="website">Website (no llenar este campo)</label>
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        tabIndex="-1"
                                        autoComplete="off"
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <span className={styles.spinner}></span>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Mensaje
                                        </>
                                    )}
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
