import './styles.css'

export default function layout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Respinner | SVG react spinners',
  description: 'Pretty and customizable SVG spinners for React.js',
  openGraph: {
    url: 'https://respinner.vercel.app',
    title: 'Respinner | SVG react spinners',
    description: 'Pretty and customizable SVG spinners for React.js',
    images: 'https://repository-images.githubusercontent.com/69757325/82b6b3cf-548f-4afe-a2f3-d1f7a2fd7874',
  },
  twitter: {
    card: 'summary_large_image',
  }
}
