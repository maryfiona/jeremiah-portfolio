import React from 'react';
import './FloatingImages.css';
import profile2 from '../Assets/profile2.png'
import profile1 from '../Assets/profile1.png'


const FloatingImages = () => {
  return (
    <React.Fragment>


      
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              
              <img width='80%' src={profile1} alt="Levitating" />
            </div>
            <div className='col-md-6 '>
              <img width="80%" src={profile2} alt="Levitating" />
            </div>
          </div>
        </div>
      

    </React.Fragment>
  );
};

export default FloatingImages;
