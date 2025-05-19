"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Navbar.module.css"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const isHomePage = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span>Axel</span>López
                </Link>

                <div className={styles.menuButton} onClick={toggleMenu}>
                    <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
                    <li>
                        {isHomePage ? (
                            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
                                Inicio
                            </a>
                        ) : (
                            <Link href="/#inicio" onClick={() => setIsMenuOpen(false)}>
                                Inicio
                            </Link>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)}>
                                Sobre Mí
                            </a>
                        ) : (
                            <Link href="/#sobre-mi" onClick={() => setIsMenuOpen(false)}>
                                Sobre Mí
                            </Link>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <a href="#tecnologias" onClick={() => setIsMenuOpen(false)}>
                                Tecnologías
                            </a>
                        ) : (
                            <Link href="/#tecnologias" onClick={() => setIsMenuOpen(false)}>
                                Tecnologías
                            </Link>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <a href="#proyectos" onClick={() => setIsMenuOpen(false)}>
                                Proyectos
                            </a>
                        ) : (
                            <Link href="/#proyectos" onClick={() => setIsMenuOpen(false)}>
                                Proyectos
                            </Link>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <a href="#experiencia" onClick={() => setIsMenuOpen(false)}>
                                Experiencia
                            </a>
                        ) : (
                            <Link href="/#experiencia" onClick={() => setIsMenuOpen(false)}>
                                Experiencia
                            </Link>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <a href="#certificados" onClick={() => setIsMenuOpen(false)}>
                                Certificados
                            </a>
                        ) : (
                            <Link href="/#certificados" onClick={() => setIsMenuOpen(false)}>
                                Certificados
                            </Link>
                        )}
                    </li>
                    <li>
                        <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
