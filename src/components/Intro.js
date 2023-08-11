import React, { useState, useEffect } from 'react';
import './Intro.css'; // Import your CSS styles here
import intro from '../Assets/intro.png'
const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 500); // Simulate progress update every 0.5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div>
      {/* Conditionally render the preloader based on isLoading state */}
      {isLoading && (
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-circle" style={{ strokeDashoffset: 314 - (314 * progress) / 100 }}></div>
            <img  src={intro} alt='introImg'/>
            <div className="preloader-text">{progress}%</div>
          </div>
        </div>
      )}

      {/* Your content here */}
    </div>
  );
};

export default Intro;
