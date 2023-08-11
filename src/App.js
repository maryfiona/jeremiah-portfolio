
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import About from './components/About'; 
import Navbar from './components/Navbar';
import Section1 from './sections/Section1';
import Playground from './sections/Playground';
import Hobbies from './sections/Hobbies';
import Footer from './components/Footer'
import Marketing from './sections/Marketing';
import Intro from './components/Intro';

function App() {
  return (
    <Router>
      <Intro />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Section1" element={<Section1 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Playground" element={<Playground />} />
        <Route path="/HObbies" element={<Hobbies />} />
        <Route path="/Marketing" element={<Marketing/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

