import React from 'react';
import './matrix.css';

const MatrixCard = ({ children, className }) => {
  return (
    <div className={`relative overflow-hidden rounded-[30px] shadow-[15px_15px_30px_rgb(15,15,15),-15px_-15px_30px_rgb(45,45,45)] ${className}`}>
      {/* Background Matrix Animation */}
      <div className="absolute inset-0 z-0">
        <div className="matrix-container">
          <div className="matrix-pattern">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={`p1-${i}`} className="matrix-column"></div>
            ))}
          </div>
          <div className="matrix-pattern">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={`p2-${i}`} className="matrix-column"></div>
            ))}
          </div>
          <div className="matrix-pattern">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={`p3-${i}`} className="matrix-column"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full bg-black/60 backdrop-blur-[2px] flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
};

export default MatrixCard;
