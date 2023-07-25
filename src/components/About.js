import React from "react";
import './About.css';
import photograph from '../Assets/photograph.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// import { faUser } from '@fortawesome/free-brands-svg-icons';
import Navbar from "./Navbar";
import profile1 from '../Assets/profile1.png';





const About = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="text-center h">
        About us

      </div>
      <div className="container">

        <div className="row">
          <div className="col-md-6">
            <h1 className="pics">i’m Olorunfemi Damilare  <br />
            </h1>
            <h4 className="pic">Hello! I'm Olorunfemi Damilare, passionate about creativity <br />
              on product and brand with over 4years of experience in <br /> experiential now, brand strategy, and UX design. I've helped <br />
              build up brands and create meaningful and memorable user <br /> experiences with impactful  and visual design solutions.<br />
              I currently work with an agency of Government on  <br />
              skill acquisition, and my job is to Train women in tech skills, <br />
              especially on the desktop package, design, and UX UI design. <br />
              I often work as a UI designer, but sometimes I am that guy  <br />
              who likes to design and  get the best out of the product while <br />
              ensuring the user makes an effort to take the following action. <br />  So yeah call me a remote UXUI designer.
              <br /> I love what I do, and  <br /> I'm
              not scared  to roll up my sleeves when it comes to doing  <br />
              the digging😊.</h4>

          </div>
          <div className="col-md-6">
            <img src={profile1} alt="experience" />
          </div>

        </div>



      </div>
     
      
      <div className="container pt">
        <div className="container text-center h">MY EXPERIENCE</div>
        <div className="row">
          <div className="col-md-6">
            <section>
              <h1> 1. Product designer (Web3.0)</h1>
              <h5>caption lion</h5>
              <hr className="line" />


            </section>
            <section>
              <h1> 2. UI designer Instructor   </h1>
              <h5>Women Development Center</h5>
              <hr className="line" />


            </section>
            <section>
              <h1> 3. Product designer </h1>
              <h5>Whitecanvas</h5>
              <hr className="line" />

            </section>
            <section>
              <h1> 4. Graphic designer  </h1>
              <h5>Imaginaruim</h5>
              <hr className="line" />

            </section>
            <section>
              <h1> Download My Resume </h1>
              <button className="download"> 
                <li>
                  <a href="/">
                    <FontAwesomeIcon className='fau' icon={faUser} />
                    </a>
                    </li>
                    </button>

            </section>


          </div>
          <div className="col-md-6">
            <section>
              <h5>Nov 2022 Till date</h5>
              <h5>San Francisco</h5>

            </section>
            <section className="sept">
              <h5>Sep 2021
                Till date</h5>
              <h5>Lagos Pen cinema</h5>

            </section>
            <section className="may">
              <h5>May 2018 Till
                Dec 2018</h5>
              <h5>Lagos Opebi</h5>

            </section>
            <section className="nov">
              <h5>Nov 2015 Till
                Jan 2016</h5>
              <h5>Lagos Gbagada</h5>

            </section>
            <section>
              <h4 className="mt-5"> cover letter </h4>
              <button className="download"> 
                <li>
                  <a href="/">
                    <FontAwesomeIcon className='fau' icon={faUser} />
                    </a>
                    </li>
                    </button>

            </section>

          </div>
        </div>
      </div>



      <h1>MY HOBBIES</h1>
     
     
<div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
  
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

 
  <div className="carousel-inner">
   
    <div className="carousel-item active">
      <img src={photograph} className="d-block w-100" alt="Sunset Over the City"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>PHOTOGRAPHER</h2>
      </div>
    </div>

    
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>PHOTOGRAPHER</h2>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="Cliff Above a Stormy Sea"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>


  
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>









    </React.Fragment>
  )


};
export default About;