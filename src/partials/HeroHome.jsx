import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../images/bg_image.png';
import BlurText from "../components/BlurText";
import ShimmerButton from '../components/ShimmerButton';
import StarBorderButton from '../components/StarBorderButton';

function HeroHome({ productDemoRef }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Animation completion handler
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  
  // Check screen size for responsive adjustments
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToProductDemo = () => {
    if (productDemoRef && productDemoRef.current) {
      const yOffset = -100;
      const element = productDemoRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background image - full screen with mobile optimization */}
      <div className="absolute inset-0 z-0">
        {/* Full screen background with golden effect */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: isMobile ? 'center center' : '50% center', // Adjust focus point based on screen size
            backgroundSize: 'cover',
            filter: 'brightness(1.5) sepia(0.2) hue-rotate(3deg)' // Golden effect
          }}
        ></div>
        
        {/* Add an overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content container with improved centering */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center justify-center">
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 text-center w-full max-w-5xl mx-auto  '>
          <BlurText
            text="AI Agents for Deep Work in Finance."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="inline-block text-amber-200" // Removed mx-auto as parent has centering
          />
        </h1>
       
        
        {/* Subheading with better contrast and spacing */}
        <div className="mt-4 md:mt-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Focus on insights that drive outperformance.
            <br className="hidden sm:block" />
            Let Quanfia handle the grunt work.
          </p>
        </div>
        
        {/* Call to action buttons - improved layout and hover states */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0      
          sm:space-x-6">

           {/* Updated Schedule Demo button using StarBorderButton */}
           <StarBorderButton
            onClick={() => {
              document.dispatchEvent(
                new CustomEvent('requestDemo', { 
                  detail: { action: 'openDemoPopup' } 
                })
              );
            }}
            color="#FFD700"
            speed="3s"
          >
            Schedule Demo
          </StarBorderButton>
          
          
          <ShimmerButton 
          className="font-semibold text-base md:text-lg w-full sm:w-auto py-4 px-8" 
          shimmerColor="#F59E0B"
          background="transparent" 
          borderRadius="1.8rem"
          onClick={scrollToProductDemo}>
          <span className="text-center font-semibold  leading-none tracking-tight">
            Watch Demo
          </span>
        </ShimmerButton>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
    </section>
  );
}

export default HeroHome;