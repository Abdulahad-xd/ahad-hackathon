import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Events from './sections/event'
import Product from './sections/product'
import Feature from './sections/feature'
import Newsletter from './sections/newsletter'
import Footer from './sections/footer'
import AllProducts from './pages/allproduct/page'
import Male from './pages/male/page'

export default function Home() {
  return (
    <section className="px-20">
    <Male/>
    <Navbar/>
    <Hero />
    
    <Events/>
    <Product _id={undefined} product={{
        image: undefined,
        name: '',
        slug: {
          current: ''
        },
        price: 0
      }}/>
    <Feature/>
    <Male/>
    <Newsletter/>
    <Footer/>
    
    </section>
  )
}
