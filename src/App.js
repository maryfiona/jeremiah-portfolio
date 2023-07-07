import React from 'react';
import './App.css';
import Home from './sections/Home';
import Footer from './components/Footer';
import Section1 from './sections/Section1';
import About from './components/About';


function App() {
  return (
    <div>

      <Home />

      <Section1 />
      <About />
      
      <Footer />
    </div>
  )
};

export default App;
