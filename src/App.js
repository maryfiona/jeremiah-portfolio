import React from 'react';
import './App.css';
import Home from './sections/Home';
import Footer from './components/Footer';
import Section1 from './sections/Section1';
import About from './components/About';
import Playground from './sections/Playground';
import Hobbies from './sections/Hobbies';
import Marketing from './sections/Marketing';


function App() {
  return (
    <div>
      
      <Home />
      <Section1 />
      <About />
      <Hobbies />
      <Playground />
      <Marketing />
      <Footer />
    </div>
  )
};

export default App;
