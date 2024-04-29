import  { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const  Loadingreact = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the progress by 25% every second until it reaches 100%
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 25;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Make the container take up the entire viewport height
      }}
    >
      <div style={{ marginBottom: '20px' }}>Loading...</div>
      <div className="progress" style={{ width: '50%' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${progress}%`,
            height: '20px', // Set height of the progress bar
            backgroundColor: '#007bff', // Set background color of the progress bar
          }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default  Loadingreact;