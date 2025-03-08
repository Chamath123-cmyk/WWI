
import Header from '../components/Home/Header'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServicesSection from '../components/Home/ServicesSection'
import ContactSection from '../components/Home/ContactSection'
import News from '../components/Home/news'
import QuickLinks from '../components/Home/QuickLinks';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <News />
      <QuickLinks />
    </>
  )
}

export default Home
