// // before code 

// import type { Metadata } from 'next'
// import { Inter, Playfair_Display } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'
// import { Poppins } from "next/font/google"



// const inter = Inter({ 
//   subsets: ["latin"],
//   variable: '--font-inter'
// })

// const playfair = Playfair_Display({ 
//   subsets: ["latin"],
//   variable: '--font-playfair'
// })

// export const metadata: Metadata = {
//   title: 'High Professional Trading & Services | Quality Materials & Professional Solutions',
//   description: 'High Professional Trading and Services is a trusted Qatar-based company specializing in building material trading and construction services. We provide high-quality products and professional solutions for residential, commercial, and industrial projects.',
//   keywords: 'trading, contracting, building materials, construction, Qatar, tiles, marble, granite, AC maintenance, interior design',
// }

// export const viewport = {
//   themeColor: '#1e3a5f',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
//       <body className="font-sans antialiased">
//         {children}
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }


//after code

import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Body font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

// Heading font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'High Professional Trading & Services',
  description: '...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={`${poppins.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}