import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Phoenix Host - High Performance Minecraft & VPS Hosting',
    description: 'Experience top-tier Minecraft and VPS hosting with Phoenix Host. Enjoy high performance, low latency, and 24/7 support for your gaming needs.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="min-h-screen bg-[#0a0b14]">
            {children}
        </main>
        </body>
        </html>
    )
}

