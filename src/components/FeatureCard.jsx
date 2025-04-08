import React from 'react';
import { Grid } from './Grid';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Grid size={20} isDark={true} />
      <div className="relative z-10">
        <h3 className="text-base font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-neutral-400 text-base font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;