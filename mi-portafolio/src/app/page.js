"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Inicio from "../components/Inicio"
import Sobremi from "../components/Sobremi"
import Tecnologias from "../components/Tecnologias"
// import Proyectos from "../components/Proyectos"
// import Experiencia from "../components/Experiencia"
// import Certificados from "../components/Certificados"
import Footer from "../components/Footer"
import styles from "./page.module.css"

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
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Inicio />
      <Sobremi />
      <Tecnologias />
      {/* <Proyectos />
      <Experiencia />
      <Certificados /> */}
      <Footer />
    </main>
  )
}
