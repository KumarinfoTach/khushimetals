import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../Components/Layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
 
  return <Layout>
  <Component {...pageProps} />
</Layout>
}

export default MyApp
