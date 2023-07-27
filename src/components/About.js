import React from "react";
import './About.css';
import photograph from '../Assets/photograph.png'
import guitar from '../Assets/guitar.png'
import event from '../Assets/event.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar";
import profile1 from '../Assets/profile1.png';
import image1 from '../Assets/image1.png';
import image11 from '../Assets/image11.png';





const About = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div class="text-center h">
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



      <h1 className="text-center">MY HOBBIES</h1>
      <div className="container contain">
        <div className="bo">
          <img src={photograph} alt="photo1" />
          <span>PHOTOGRAPH</span>
        </div>
        <div className="bo">
          <img src={guitar} alt="photo2" />
          <span>PLAYING GUITAR</span>
        </div>
        <div className="bo">
          <img src={event} alt="photo3" />
          <span>EVENT</span>
        </div>
        <div className="bo">
          <img src={photograph} alt="photo4" />
          <span>BASKETBALL</span>
        </div>
        <div className="bo">
          <img src={photograph} alt="photo5" />
          <span>Effect</span>
        </div>
      </div>
      <div className="container">
        <h1 className="text-success">My Playground </h1>
        <p>My Creativity is not a one day job lot of ideas came in, with a lot of listing to people for ideas and attention...</p>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img height={455} src={image1} alt="photo5" />
            </div>
            <div className="col-md-6">
              <img className="image1" src={image11} alt="photo5" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 pt-3">
              <img className="image22" src={image1} alt="photo5" />
            </div>
            <div className="col-md-4">
              <img className="image2" src={photograph} alt="photo5" />
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  )


};
export default About;