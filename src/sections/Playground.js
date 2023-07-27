import React from "react";
import './Playground.css'
import Navbar from '../components/Navbar'
import image1 from '../Assets/image1.png';
import image11 from '../Assets/image11.png';
import image2 from '../Assets/image2.png';
import image22 from '../Assets/image22.png';
import mask11 from '../Assets/mask11.png';
import mask1 from '../Assets/mask1.png';
import mask2 from '../Assets/mask2.png';
import mask22  from '../Assets/mask22.png';


const Playground = () => {
return (
   <React.Fragment>
        <Navbar/>
    <div>
         <div className="container">
        <h1 className="text-success">My Playground </h1>
        <p>My Creativity is not a one day job lot of ideas came in, with a lot of listing to
           people for ideas and attention...</p>
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
              <img className="image22" src={image22} alt="photo5" />
            </div>
            <div className="col-md-4">
              <img className="image2" src={image2} alt="photo5" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img  className="back" src={mask1} alt="photo5" />
            </div>
            <div className="col-md-6">
              <img className="mask" height={455} src={mask11} alt="photo5" />
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img  className="back2" src={mask2} alt="photo5" />
            </div>
            <div className="col-md-6">
              <img className="mask2" height={455} src={mask22} alt="photo5" />
            </div>
          </div>
        </div>
      </section>
      <div className="container text-center">
        <h4 className="hov">See More on my Dribbble page and figma community</h4>
      </div>

    </div>
    </React.Fragment>
)


};
export default Playground;