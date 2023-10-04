import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '@components/Nav';

export const metadata = {
  title: 'OGi Calculator',
  description: 'Oil and Gas Interactive Hydocarbon Volume Calculator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-blue-900'>
        <main className='bg-gray-300 ml-2 mr-2'>
          {children}
        </main>
      </body>
    </html>
  )
}
