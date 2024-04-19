import React, { useState, useEffect } from 'react';
import "../styles/loading.css"



function LoadingPage() {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="loading-animation"></div>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default LoadingPage;