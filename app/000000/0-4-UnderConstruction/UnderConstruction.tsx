import React from 'react';
import './UnderConstruction.css';

const UnderConstruction: React.FC = () => {
  return (
    <div className="Construction-floating-card">
      <div className="Construction-container">
        {/* Gears */}
        <div className="Construction-gear-container">
          <div className="Construction-gear Construction-gear1" />
          <div className="Construction-gear Construction-gear2" />
          <div className="Construction-gear Construction-gear3" />
        </div>

        {/* Messages */}
        <p className="Construction-message">Under construction or does not exist.</p>
        <p className="Construction-message">Check back soon!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;