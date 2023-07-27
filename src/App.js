import React from 'react';
import './App.css';
import Home from './sections/Home';
import Footer from './components/Footer';
import Section1 from './sections/Section1';
import About from './components/About';
import Playground from './sections/Playground';
import Hobbies from './sections/Hobbies';


function App() {
  return (
    <div>
      
      
      <Section1 />
      <About />
      <Hobbies />
      <Playground />
      
      <Footer />
    </div>
  )
};

export default App;
