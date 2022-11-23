import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      <ScrollButton/>
    </>
  );
}

export default App;
