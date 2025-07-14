"use client"

import Navbar from "../components/Navbar"
import Inicio from "../components/Inicio"
import Sobremi from "../components/Sobremi"
import Tecnologias from "../components/Tecnologias"
import Proyectos from "../components/Proyectos"
import Experiencia from "../components/Experiencia"
import Certificados from "../components/Certificados"
import Footer from "../components/Footer"
import { useTheme } from "../components/ThemeContext"
import styles from "./page.module.css"

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className={styles.main}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Inicio />
      <Sobremi />
      <Tecnologias />
      <Proyectos />
      <Experiencia />
      <Certificados />
      <Footer />
    </main>
  )
}
