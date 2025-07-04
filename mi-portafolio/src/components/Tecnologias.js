"use client"

import styles from "./Tecnologias.module.css"
// Importamos de React Icons para la mayoría
import {
    SiPython,
    SiMysql,
    SiReact,
    SiNodedotjs,
    SiPhp,
    SiJavascript,
    SiCss3,
    SiGithub,
    SiWordpress,
    SiHtml5,
    SiNextdotjs,
} from "react-icons/si"

// Importamos Iconify para Power BI
import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"

export default function Tecnologias() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Detectar si está en modo oscuro
        const checkDarkMode = () => {
            setIsDark(document.body.classList.contains("dark"))
        }

        checkDarkMode()

        // Observer para detectar cambios en el modo oscuro
        const observer = new MutationObserver(checkDarkMode)
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })

        return () => observer.disconnect()
    }, [])

    const technologies = [
        { name: "Python", icon: SiPython, color: "#3776AB", type: "react-icon" },
        { name: "SQL", icon: SiMysql, color: "#4479A1", type: "react-icon" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26", type: "react-icon" },
        { name: "CSS", icon: SiCss3, color: "#1572B6", type: "react-icon" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", type: "react-icon" },
        { name: "ReactJS", icon: SiReact, color: "#61DAFB", type: "react-icon" },
        { name: "Next.js", icon: SiNextdotjs, color: isDark ? "#FFFFFF" : "#000000", type: "react-icon", darkMode: true },
        { name: "NodeJS", icon: SiNodedotjs, color: "#339933", type: "react-icon" },
        { name: "PHP", icon: SiPhp, color: "#777BB4", type: "react-icon" },
        { name: "Power BI", icon: "logos:microsoft-power-bi", color: "#F2C811", type: "iconify" },
        { name: "GitHub", icon: SiGithub, color: isDark ? "#FFFFFF" : "#181717", type: "react-icon", darkMode: true },
        { name: "WordPress", icon: SiWordpress, color: "#21759B", type: "react-icon" },
    ]

    return (
        <section id="tecnologias" className={styles.technologies}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Tecnologías</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionDescription}>Estas son las tecnologías y herramientas con las que he trabajado</p>
                </div>

                <div className={styles.techGrid}>
                    {technologies.map((tech, index) => {
                        return (
                            <div key={index} className={styles.techItem}>
                                <div className={styles.techIcon}>
                                    {tech.type === "iconify" ? (
                                        <Icon icon={tech.icon} width={60} height={60} className={styles.iconSvg} />
                                    ) : (
                                        <tech.icon
                                            size={60}
                                            color={tech.color}
                                            className={`${styles.iconSvg} ${tech.darkMode ? styles.darkModeIcon : ""}`}
                                        />
                                    )}
                                </div>
                                <p className={styles.techName}>{tech.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
