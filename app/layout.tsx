import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const inter = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to music on Go',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Sidebar>
        {children}
        </Sidebar>
    </html>
  )
}
