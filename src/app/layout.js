import './globals.css'

export const metadata = {
  title: 'Nikki Mehrjerdian — Product Designer',
  description: 'Product designer based in Atlanta, Georgia. Currently at Roadie, leading design for the Driver app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
