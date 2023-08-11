import React from "react"
import './Navbar.css'
import intro from '../Assets/intro.png'
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }


  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div>
      <div className="container-fluid">
        <img className="pad pt-5" width={100} src={intro} alt="intro-img" />
      </div>


      <div id="mySidenav" className="sidenav">
        <a href="/" className="closebtn" onClick={closeNav}>&times;</a>
        <Link to="/">Home</Link>
        <Link to="/Section1">Section1</Link>
        <Link to="/About">About</Link>
        <Link to="/Playground">Playground</Link>
        <Link to="/Hobbies">Hobbies</Link>
        <Link to="/Marketing">Marketing</Link>

      </div>


      <span className="opener glyphicon glyphicon-align-right pad " onClick={openNav}></span>


      <div id="main">

      </div>


    </div>
  )


};
export default Navbar;