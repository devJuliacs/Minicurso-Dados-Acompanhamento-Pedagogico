import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Atkinson_Hyperlegible, Lexend } from 'next/font/google'
import './globals.css'

const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-atkinson',
})

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: 'Análise de dados para acompanhamento na EaD | Minicurso',
  description:
    'Minicurso para docentes e tutores de EaD: organize, visualize e interprete dados de participação, entregas e desempenho com o Google Sheets.',
  authors: [{ name: 'Julia Carvalho de Souza Silva' }],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b5563',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${atkinson.variable} ${lexend.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
