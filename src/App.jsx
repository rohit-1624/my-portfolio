import React from "react";
import 'animate.css';
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Home from './components/Home'
import About from './components/About'
import Skills from "./components/Skills";
import Projects from './components/Projects'
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  useEffect(() => {
    AOS.init({
       duration: 1000, 
       once: true,
       easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-[#09101A]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

// now use icon <i className: "ri-menu-line"></i> on top-left corner and create a sidebar which opens and close for that give close icon
