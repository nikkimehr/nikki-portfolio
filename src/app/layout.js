import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Nikki Mehrjerdian',
  description: 'Product designer based in Atlanta, Georgia. Currently leading design for the Driver app at Roadie.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z4FQCJCFNL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z4FQCJCFNL');
          `}
        </Script>
      </body>
    </html>
  )
}
