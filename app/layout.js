import './globals.css'
import { Inter } from 'next/font/google'
import { ReactProvider } from './ReactProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies-API',
  description: 'Provides the list of movies using third party api',
}

export default function RootLayout({ children }) {
  return (
    <ReactProvider>
      <html lang="en">
       <body className={inter.className}>{children}</body>
      </html>
    </ReactProvider>
  )
}
