import { DM_Sans } from 'next/font/google'

import '../styles/globals.css'
import type { Metadata } from 'next'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bhawani Tech',
  description: 'Task done for the bhawani tech.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
