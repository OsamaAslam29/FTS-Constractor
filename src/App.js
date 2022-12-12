import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NewTestimonials from './Components/NewTestimonials/NewTestimonials';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Contact />
      <NewTestimonials />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
