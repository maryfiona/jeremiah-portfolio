import React from "react";
import './About.css';
import Navbar from "./Navbar";




const About = () =>{
    return(
        <React.Fragment>
   <Navbar />

   <div className="text">
    About us
   </div>
   <div className="container"> 
                
                <h1>i’m Olorunfemi Damilare  <br />
                    </h1>
                <p>Hello! I'm Olorunfemi Damilare, passionate about creativity <br />
on product and brand with over 4years of experience in <br /> experiential now, brand strategy, and UX design. I've helped <br /> 
 build up brands and create meaningful and memorable user <br /> experiences with impactful  and visual design solutions.<br /> 
                 I currently work with an agency of Government on  <br />
                 skill acquisition, and my job is to Train women in tech skills, <br />
                  especially on the desktop package, design, and UX UI design. <br />
 I often work as a UI designer, but sometimes I am that guy  <br />
  who likes to design and  get the best out of the product while <br />
   ensuring the user makes an effort to take the following action. <br />  So yeah call me a remote UXUI designer.
 <br /> I love what I do, and  <br /> I'm not scared  to roll up my sleeves when it comes to doing  <br /> 
 the digging😊.</p>

            </div>
   

        </React.Fragment>
    )
    

};
export default About;