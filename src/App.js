import React from 'react';
import './App.css';
import Home from './sections/Home';
import Footer from './components/Footer';
import Section1 from './sections/Section1';
import About from './components/About';
import Playground from './sections/Playground';
import Hobbies from './sections/Hobbies';
import Intro from './components/Intro';

function App() {
  return (
    <div>
      <Intro />
      <Home />
      <Section1 />
      <About />
      <Hobbies />
      <Playground />
      
      <Footer />
    </div>
  )
};

export default App;
