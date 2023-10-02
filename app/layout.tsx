import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ToastProvider } from '@/providers/toaster-provider'
import { ConfettiProvider } from '@/providers/confetti-provider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MasteryMe',
  description: 'Unlock Your Potential with MasteryMe: Your Path to Knowledge and Success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <ToastProvider />
          <ConfettiProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
