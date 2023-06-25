import './styles.css'

export default function layout({ children }) {
  return (
    <html>
      <head>
        {/* <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"> */}
        {/* <meta property="og:image" content="https://repository-images.githubusercontent.com/69757325/82b6b3cf-548f-4afe-a2f3-d1f7a2fd7874">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image:src" content="https://repository-images.githubusercontent.com/69757325/82b6b3cf-548f-4afe-a2f3-d1f7a2fd7874">
<meta name="twitter:title" content="huozhi/respinner: Pretty and customizable svg spinners for React.js">
<meta name="twitter:site" content="@huozhi">
<title>Respinner | SVG react spinners</title> */}

        <style type="text/css">
          {`

`}
        </style>
      </head>
      <body>
        {children}
        {/* <script type="module" src="./app.jsx"></script> */}
      </body>
    </html>
  )
}
