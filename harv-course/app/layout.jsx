import './globals.css'
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Harv Courses',
  description: 'Frontend web development',
  keywords: "web development, frontend, web design, responsive design, react, javascript, node, css, html"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
