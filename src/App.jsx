import { useState } from 'react';
import { ThemeContext } from "./ThemeContext";
// import Card from "./components/Cards.jsx";
import './App.css';

// components
import Header from './components/Navbar/Header.jsx';
import Sidebar from './components/Navbar/Sidebar.jsx';
import Hero from './components/Pages/Home/Hero.jsx';
import About from './components/Pages/About/About.jsx';
import Skills from './components/Pages/Skills/Skills.jsx';
import Work from './components/Pages/Work/Work.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';
import Footer from './components/Pages/Footer/Footer.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="app">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />

      <Sidebar isOpen={isOpen} closeMenu={closeMenu} />

      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
