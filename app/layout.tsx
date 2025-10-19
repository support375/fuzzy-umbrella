import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ToInvested - Investment Tracking & Portfolio Management',
  description: 'Track your investments and manage your portfolio with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
