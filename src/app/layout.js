import './globals.css'
import { Shojumaru } from 'next/font/google'
import Footer from './components/footer' 
import Image from 'next/image'

const font = Shojumaru({ 
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
      <body className={font.className} style={{backgroundImage: `url("/Ludimino_background3-grey-white.png")`, maxHeight:'100%'}}>
        {children}
        <Footer/>
      </body> 
    </html>
  )
}
