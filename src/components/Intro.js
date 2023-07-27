// import React, { useState, useEffect } from "react";
// import './Intro.css';
// import intro from '../Assets/intro.png'





// const Intro = () => {
    
//     const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Update the counter value
//       setCounter((prevCounter) => {
//         const newCounter = prevCounter + 1;
//         if (newCounter === 100) {
//           clearInterval(interval); // Clear the interval when counter reaches 100
//         }
//         return newCounter;
//       });
//     }, 100); // Interval in milliseconds (adjust as desired)

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   // Check if the counter reached 100
//   useEffect(() => {
//     if (counter === 100) {
//       console.log('Counter/Loader completed!');
//     }
//   }, [counter]);
//     // const [loadingTimer, setLoadingTimer] = useState('100%')
//     return(
//         <React.Fragment>
//         <div className="container-fluid introcol text-center padd">
//             <img  className="mt-5" src={intro} alt="intro-img" /> <br /> ;
//             <span className="white">Loading...{counter}%</span>


//         </div>
        
//         </React.Fragment>

//     )
// };
// export default Intro;
// src/Intro.js
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'; // Import useHistory
import './Intro.css';
import intro from '../Assets/intro.png';

const Intro = () => {
  const [counter, setCounter] = useState(0);
  const history = useHistory(); // Initialize useHistory

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the counter value
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        if (newCounter === 100) {
          clearInterval(interval); // Clear the interval when counter reaches 100
          // Navigate to the MainPage once loading completes
          history.push('/main');
        }
        return newCounter;
      });
    }, 100); // Interval in milliseconds (adjust as desired)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [history]);

  // ... rest of the component code
};
export default Intro;



