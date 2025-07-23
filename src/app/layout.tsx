import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'

// Pisahkan viewport ke export terpisah
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://muhamadjaya.dev'),
  title: 'Muhamad Jaya Kusuma - Web Developer Portfolio',
  description: 'Portfolio profesional Muhamad Jaya Kusuma, seorang Web Developer berpengalaman dalam React, Next.js, Node.js, dan teknologi web modern lainnya. Spesialisasi dalam pengembangan aplikasi web yang responsif dan performant.',
  keywords: 'Muhamad Jaya Kusuma, Web Developer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Portfolio, Indonesia Developer, Frontend Developer, Fullstack Developer',
  authors: [{ name: 'Muhamad Jaya Kusuma', url: 'https://muhamadjaya.dev' }],
  creator: 'Muhamad Jaya Kusuma',
  publisher: 'Muhamad Jaya Kusuma',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://muhamadjaya.dev',
    siteName: 'Muhamad Jaya Kusuma Portfolio',
    title: 'Muhamad Jaya Kusuma - Web Developer Portfolio',
    description: 'Portfolio profesional Web Developer dengan pengalaman 3+ tahun dalam pengembangan aplikasi web modern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhamad Jaya Kusuma - Web Developer',
    description: 'Portfolio profesional Web Developer Indonesia',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden">
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
import { useTheme } from '@/components/ThemeProvider'
import { useLanguage } from '@/components/LanguageProvider'

function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const { isLoaded: themeLoaded } = useTheme()
  const { isLoaded: languageLoaded } = useLanguage()
  
  if (!themeLoaded || !languageLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }
  
  return <>{children}</>
}
