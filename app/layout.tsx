import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { VercelAnalytics } from './lib/analytics/analytics'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'leslie - home',
  description:
    'Software engineer based in Toronto, Canada. Full stack developer at North One.',
  keywords: [
    'software engineer',
    'software developer',
    'developer',
    'Toronto',
    'full stack',
    'React',
    'TypeScript',
    'AWS',
    'aws',
  ],
  authors: [{ name: 'Leslie Al-Hassan' }],
  creator: 'Leslie Al-Hassan',
  openGraph: {
    title: 'Leslie Al-Hassan - Software Engineer',
    description: 'Software engineer based in Toronto, Canada',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={inter.variable}
      // Suppress hydration warning being emitted by next-themes.
      // This property only applies one level deep, so it won't block hydration warnings on other elements.
      suppressHydrationWarning
    >
      <body className={'antialiased'}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
        <VercelAnalytics />
      </body>
    </html>
  )
}
