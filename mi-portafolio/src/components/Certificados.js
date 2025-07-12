"use client"

import { useState, useEffect } from "react"
import styles from "./Certificados.module.css"

export default function Certificados() {
    const [showAll, setShowAll] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detectar si es móvil
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const certificates = [
        {
            title: "Participación en Talent Land 2025",
            issuer: "Talent Network",
            date: "Abril 2025",
            image: "images/certificados/certificado-talent.png",
            link: "images/certificados/certificado-talent.png",
        },
        {
            title: "Fundamentos de Power BI",
            issuer: "DataCamp",
            date: "Julio 2025",
            image: "/images/certificados/certificado-fundamentos-powerbi.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/97a3ad06094ed8ef782212e215dbcf8a90050a8c?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink",
        },
        {
            title: "Introducción a Power BI",
            issuer: "DataCamp",
            date: "Junio 2025",
            image: "/images/certificados/certificado-introduccion-powerbi.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0e66a42dde72467d3bf258a5dea1f2614a603c0f",
        },
        {
            title: "Introducción a DAX en Power BI",
            issuer: "DataCamp",
            date: "Junio 2025",
            image: "/images/certificados/certificado-introduccion-dax-powerbi.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/09f81b8a7caaa89ae02f9e0cee321f2b9fb38e15",
        },
        {
            title: "Caso de práctico: Analizar la rotación de clientes en Power BI",
            issuer: "DataCamp",
            date: "Junio 2025",
            image: "/images/certificados/certificado-caso-estudio-powerbi.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a278fc6799adf9f10aec724821afa352acc1811a",
        },
        {
            title: "Preparación de datos en Power BI",
            issuer: "DataCamp",
            date: "Junio 2025",
            image: "/images/certificados/certificado-preparacion-datos-powerbi.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f34d4ae180a700a0f360b5a6756116bf146fcd05",
        },
        {
            title: "Transformación de datos en Power BI",
            issuer: "DataCamp",
            date: "Junio 2025",
            image: "/images/certificados/certificado-transformacion-datos-powerbi.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/e7ba53eda00166439d26daf7db949010173ca380",
        },
        {
            title: "Modelado de datos en Power BI",
            issuer: "DataCamp",
            date: "Junio 2025",
            image: "/images/certificados/certificado-modelado-datos-powerbi.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/14c5ea1ac1b0bb3f82290bd51c75cc435eef7c76",
        },
        {
            title: "Manipulación de datos con pandas",
            issuer: "DataCamp",
            date: "Marzo 2025",
            image: "/images/certificados/certificado-manipulacion-datos-pandas.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/d281139c7ad6a8b632fab6bbf3a5233df8524df7",
        },
        {
            title: "Limpieza de datos en python",
            issuer: "DataCamp",
            date: "Febrero 2025",
            image: "/images/certificados/certificado-limpieza-datos-python.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/070d4bf91cecfeea9f5088bf85e11f939f4fff30",
        },
        {
            title: "Toma de decisiones basada en datos con SQL",
            issuer: "DataCamp",
            date: "Enero 2025",
            image: "/images/certificados/certificado-toma-decisiones-basada-datos.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0d7febb3c3be370898b17b7c90e78ed995d9642c",
        },
        {
            title: "Tecnología y servicios de AWS Cloud",
            issuer: "DataCamp",
            date: "Octubre 2024",
            image: "/images/certificados/certificado-tecnologia-servicios-aws.png",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/1accfbcb3e57ebb04271926b7a6c16c9e90f36b1",
        },
    ]

    // Lógica adaptativa para móvil vs desktop
    const visibleCertificates = certificates.slice(0, 3) // Primeros 3 siempre visibles
    const previewCertificates = isMobile
        ? certificates.slice(3, 4) // Solo 1 en móvil
        : certificates.slice(3, 6) // 3 en desktop
    const hasMoreCertificates = certificates.length > 3

    const toggleShowAll = () => {
        setShowAll(!showAll)
    }

    return (
        <section id="certificados" className={styles.certificates}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Certificados</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionDescription}>Certificaciones y cursos que he completado</p>
                </div>

                <div className={styles.certificatesContainer}>
                    {/* Primeros 3 certificados - siempre visibles */}
                    <div className={styles.certificatesGrid}>
                        {visibleCertificates.map((cert, index) => (
                            <div key={index} className={styles.certificateCard}>
                                <div className={styles.certificateImage}>
                                    <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
                                </div>
                                <div className={styles.certificateInfo}>
                                    <h3 className={styles.certificateTitle}>{cert.title}</h3>
                                    <p className={styles.certificateIssuer}>{cert.issuer}</p>
                                    <p className={styles.certificateDate}>{cert.date}</p>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certificateLink}>
                                        Ver Certificado
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Preview - 1 en móvil, 3 en desktop */}
                    {!showAll && previewCertificates.length > 0 && (
                        <div className={`${styles.previewGrid} ${isMobile ? styles.mobilePreview : ""}`}>
                            {previewCertificates.map((cert, index) => (
                                <div key={index + 3} className={`${styles.certificateCard} ${styles.previewCard}`}>
                                    <div className={styles.certificateImage}>
                                        <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
                                    </div>
                                    <div className={styles.certificateInfo}>
                                        <h3 className={styles.certificateTitle}>{cert.title}</h3>
                                        <p className={styles.certificateIssuer}>{cert.issuer}</p>
                                        <p className={styles.certificateDate}>{cert.date}</p>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certificateLink}>
                                            Ver Certificado
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Todos los certificados adicionales - solo cuando está expandido */}
                    {showAll && (
                        <div className={styles.certificatesGrid}>
                            {certificates.slice(3).map((cert, index) => (
                                <div key={index + 3} className={styles.certificateCard}>
                                    <div className={styles.certificateImage}>
                                        <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
                                    </div>
                                    <div className={styles.certificateInfo}>
                                        <h3 className={styles.certificateTitle}>{cert.title}</h3>
                                        <p className={styles.certificateIssuer}>{cert.issuer}</p>
                                        <p className={styles.certificateDate}>{cert.date}</p>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certificateLink}>
                                            Ver Certificado
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Botón Ver más/Ver menos */}
                    {hasMoreCertificates && (
                        <div className={styles.toggleButtonContainer}>
                            <button onClick={toggleShowAll} className={styles.toggleButton}>
                                {showAll ? (
                                    <>
                                        <span>Ver menos</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="18,15 12,9 6,15"></polyline>
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span>Ver todos</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6,9 12,15 18,9"></polyline>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}