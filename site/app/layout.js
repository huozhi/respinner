import './styles.css'

export default function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
