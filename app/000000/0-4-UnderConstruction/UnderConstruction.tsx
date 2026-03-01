import React from 'react';
import './UnderConstruction.css';

const UnderConstruction: React.FC = () => {
  return (
    <div className="under-floating-card">
      <div className="under-construction-container">
        <div className="under-gear-container">
          <div className="under-gear under-gear1"></div>
          <div className="under-gear under-gear2"></div>
          <div className="under-gear under-gear3"></div>
        </div>
        <p className="under-message">This page is being built right now. Check back soon!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
