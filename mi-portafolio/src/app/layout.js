import "./globals.css"

export const metadata = {
  title: "Axel López | Portafolio",
  description: "Portafolio personal mostrando mis proyectos y habilidades como desarrollador web",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}