import "./globals.css"
import { ThemeProvider } from "../components/ThemeContext"

export const metadata = {
  title: "Axel López | Portafolio",
  description: "Portafolio personal mostrando mis proyectos y habilidades profesionales.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
