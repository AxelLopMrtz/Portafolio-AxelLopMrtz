"use client"

import { useState, useEffect } from "react"
import styles from "./page.module.css"

// Importar componentes correctamente
import Navbar from "../components/Navbar"
import Inicio from "../components/Inicio"
import Sobremi from "../components/Sobremi"
// import Tecnologias from "../components/Tecnologias"
// import Proyectos from "../components/Proyectos"
// import Experiencia from "../components/Experiencia"
// import Certificados from "../components/Certificados"
import Footer from "../components/Footer"
import ThemeToggle from "../components/ThemeToggle"

export default function Home() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.className = savedTheme
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.body.className = newTheme
  }

  return (
    <main className={styles.main}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navbar />
      <Inicio />
      <Sobremi />
      {/* <Tecnologias />
      <Proyectos />
      <Experiencia />
      <Certificados /> */}
      <Footer />
    </main>
  )
}
