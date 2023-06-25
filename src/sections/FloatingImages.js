import React from 'react';
import './FloatingImages.css';
import profile2 from '../Assets/profile2.png'
import profile1 from '../Assets/profile1.png'


const FloatingImages = () => {
  return (
    <>


      <div className="image-container">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <img width='200' src={profile1} alt="Levitating" />
            </div>
            <div className='col-md-6 text-center'>
              <img width="200" src={profile2} alt="Levitating" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FloatingImages;
