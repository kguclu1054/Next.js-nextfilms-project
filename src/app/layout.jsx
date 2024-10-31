// src/app/layout.jsx

import{Inter} from 'next/font/google' 

import '../../styles/reset.css';  // reset.css dosyasını doğru yerden içe aktar
import './globals.css';           // globals.css dosyasını içe aktar

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const interFontFamily = Inter({ subsets: ['latin'] });

export const metadata = {
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className = {interFontFamily.className}>
      <body className= "container">
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
