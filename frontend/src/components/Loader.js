// Loader.js
import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from './loader.json'; // Adjust the path if necessary
import './Loader.css'; // Optional: add custom styling

const Loader = () => {
  return (
    <div className="loader-container">
      <Lottie animationData={loaderAnimation} style={{ height: '300px', width: '300px' }} />
    </div>
  );
};

export default Loader;
