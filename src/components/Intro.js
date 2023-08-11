import React, { useState } from 'react';
import './Intro.css'; // Import your CSS styles here

const Intro = () => {
  const [isLoading, setIsLoading] = useState(false);

  const someAsyncAction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an asynchronous action (e.g., API request) that takes some time
    await someAsyncAction();

    setIsLoading(false);
  };

  return (
    <div>
      {/* Conditionally render the preloader based on isLoading state */}
      {isLoading && (
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src="assets/intro.PNG" alt="introimage" />
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Your form inputs and elements */}
        
      </form>
    </div>
  );
};

export default Intro;
