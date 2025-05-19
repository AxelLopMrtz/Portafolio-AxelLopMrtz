"use client"

import styles from "./ThemeToggle.module.css"

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <div className={styles.themeToggle}>
            <button
                onClick={toggleTheme}
                className={`${styles.toggleBtn} ${theme === "dark" ? styles.dark : ""}`}
                aria-label="Cambiar tema"
            >
                <div className={styles.toggleThumb}></div>
                <div className={styles.toggleIcons}>
                    <span className={styles.sunIcon}>☀️</span>
                    <span className={styles.moonIcon}>🌙</span>
                </div>
            </button>
        </div>
    )
}
