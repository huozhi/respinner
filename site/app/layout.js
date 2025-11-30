import './styles.css'
import { JetBrains_Mono, Space_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export default function layout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceMono.variable}`}>
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Respinner | SVG react spinners',
  description: 'Pretty and customizable SVG spinners for React.js',
}
