import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import NextNProgress from "nextjs-progressbar";
import {AuthProvider} from "@/context/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <AuthProvider>
    <NextNProgress 
    color="#4b0082"
    startPosition={0.3}
    stopDelayMs={200}
    height={3}
    showOnShallow={true}
    />
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </AuthProvider>
    </>
  )
}

export default MyApp
