import './globals.css'
import { Luckiest_Guy } from 'next/font/google'
import Footer from './components/footer' 
import Image from 'next/image'

const font = Luckiest_Guy({ 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'] })      

export const metadata = {
  title: 'Ludimino',
  description: 'Ludimino Jeu de Société',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">    
      <body className={font.className} style={{backgroundImage: `url("/Ludimino_background3-grey-white.png")`}}>
        {children}
        <Footer/>
      </body> 
    </html>
  )
}
