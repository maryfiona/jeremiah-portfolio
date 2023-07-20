import React from "react"
import './Navbar.css'
import intro from '../Assets/intro.png'

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
    <img  className="pad pt-5" width={100} src={intro} alt="intro-img" />
    </div>
    

<div id="mySidenav" className="sidenav">
  <a href="/" className="closebtn" onClick={closeNav}>&times;</a>
  <a href="About.js">About</a>
  <a  href="/">Services</a>
  <a href="/">Clients</a>
  <a href="/">Contact</a>
</div>


<span className="opener glyphicon glyphicon-align-right pad " onClick={openNav}></span>


<div id="main">

</div>


    </div>
  )


};
export default Navbar;