import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI',
  description: 'VidNexus - Create Stunning AI Videos',
  keywords: ['technology', 'AI', 'videos', 'modern', 'VidNexus'],
  authors: [{ name: 'AI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function