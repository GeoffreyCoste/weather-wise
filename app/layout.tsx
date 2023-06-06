"use client"

// TODO: try createPortal with '#modal-root' element

import './globals.css';
import Header from './components/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather Wise',
  description: 'Weather forecast app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* <div id="modal-root"></div> */}
      </body>
    </html>
  )
}
