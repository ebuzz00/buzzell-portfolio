import React, { useState } from 'react'
import Navbar from './UI/Navbar'
import MobileMenu from './UI/MobileMenu';
import LoadingScreen from './UI/LoadingScreen';
import Home from './sections/home';
import AnimationWaves from './UI/AnimationWaves';
import About from './sections/About';
import Contact from './sections/contact';
import Edu from './sections/edu';
import Future from './sections/future';
import Work from './sections/work';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <AnimationWaves />
      <About />
      <Edu />
      <Work />
      <Future />
      <Contact />
    </>
  );
}
