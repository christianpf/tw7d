import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className='sticky top-0 z-30 bg-inherit'>
          <Navbar />
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
