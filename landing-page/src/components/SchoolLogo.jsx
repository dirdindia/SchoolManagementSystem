import React from 'react';

export const SchoolLogo = ({ className = "w-11 h-11", animated = true }) => {
  return (
    <div className={`relative shrink-0 select-none ${className}`}>
      <img 
        src="/school-logo.svg" 
        alt="Gurukul International School Emblem" 
        className={`w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 ${
          animated ? 'group-hover:scale-105' : ''
        }`}
      />
    </div>
  );
};

export default SchoolLogo;

