import './globals.css'
import { Inter } from 'next/font/google'
import { ReactProvider } from './ReactProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jet protocol',
  description: 'Provides the list of movies using third party api',
  icons:{
    icon: '/next.svg'
  }
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
