import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Testimonial/>
      <Footer/>
      <ScrollButton/>
    </>
  );
}

export default App;
