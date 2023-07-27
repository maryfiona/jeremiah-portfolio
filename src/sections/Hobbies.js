import React from "react";
import './Hobbies.css'
import Navbar from '../components/Navbar'
import photograph from '../Assets/photograph.png'
import guitar from '../Assets/guitar.png'
import event from '../Assets/event.png'





const Hobbies = () => {
return(
    <React.Fragment>
        <Navbar/>
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

    </React.Fragment>
)


}

export default Hobbies;