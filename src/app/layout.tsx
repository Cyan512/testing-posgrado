import './globals.css'
import { Merriweather } from 'next/font/google'
import { cn } from '@/lib/utils'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn('h-full antialiased', 'font-serif', merriweather.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
