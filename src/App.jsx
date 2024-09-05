import './App.css'
import Header from './Components/Header'
import Companies from './Components/Companies'
import Solutions from './Components/Solutions'
import Info from './Components/Info'
import Certificates from './Components/Certificates'
import Benefits from './Components/Benefits'
import About from './Components/About'
import WhyCards from './Components/Why_card'
import Testimonials from './Components/Testimonials'
import Promo from './Components/Promo'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'
import Companies_slide from './Components/Companies_slide'


function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Companies></Companies>
        <Solutions></Solutions>
        <Certificates></Certificates>
        <Info></Info>
        <Companies_slide></Companies_slide>
        <Benefits></Benefits>
        <WhyCards></WhyCards>
        <About></About>
        <Testimonials></Testimonials>
        <Promo></Promo>
        <Faqs></Faqs>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
