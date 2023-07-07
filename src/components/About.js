import React from "react";
import './About.css';
import Navbar from "./Navbar";




const About = () =>{
    return(
        <React.Fragment>
   <Navbar />

   <div className="text-success">
    About us
   </div>
   <div className="container"> 
                <div className="pa">Hello, 👋</div>
                <h1 className="p">i’m Olorunfemi Damilare  <br />
                    Product & brand Designer <br />
                    and Design instructor</h1>
                <p className="pp">I’m a Product & brand  designer base in Lagos NG, Passionate about Creativity  <br />
                    in Product with over  4years of Experience in experiential now, <br />
                    brand strategy and UI/UX design. I've helped build up upcoming brands <br />
                    and create meaningful and memorable user-centered  solutions that <br />
                    develop intuition between technology and people.</p>

            </div>
   

        </React.Fragment>
    )
    

};
export default About;