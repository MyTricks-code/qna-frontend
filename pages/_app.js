import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
