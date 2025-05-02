import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../images/bg_image.png';
import BlurText from "../components/BlurText";
import ShimmerButton from '../components/ShimmerButton';
import ProductDemoVideo from '../components/ProductDemoVideo.jsx'; // Import the video component

function HeroHome({ productDemoRef }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

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
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: isMobile ? 'center center' : '50% center',
            backgroundSize: 'cover',
            filter: 'brightness(1.3) sepia(0.2) hue-rotate(3deg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
  
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center flex flex-col items-center justify-center mt-5">
        <div className="mb-4 px-4 py-2 border border-amber-500 text-amber-200 text-sm font-medium rounded-md inline-block text-center">
          Trusted by 1.5M Code Learners
        </div>
        <h1 className="text-5xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-tight mb-6 md:mb-8 text-center text-amber-200 max-w-5xl ml-12">
          <BlurText
            text="Consistency and Community Learning for coding courses."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="inline-block"
          />
        </h1>
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-4 text-center text-amber-300">
          An unmatched Learning Experience for coding courses.
        </h4>
        <div className="mt-4 md:mt-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-center">
            Content is everywhere, we provide a learning experience that is unmatched. Bounties, peer learning, peer code reviews, Virtual hostel, Alumni Network, Doubt sessions, Group projects, and so many other activities to keep you on track.
          </p>
        </div>
  
        {/* Call to action buttons */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <ShimmerButton 
            className="font-semibold text-base md:text-lg w-full sm:w-auto py-4 px-8" 
            shimmerColor="#F59E0B"
            background="transparent" 
            borderRadius="1.8rem"
            onClick={() => {
              // Redirect to the login page
              window.location.href = "https://courses.chaicode.com/learn/view-all?show=batch&type=17";
            }}
            >
            <span className="text-center font-semibold leading-none tracking-tight">
              Check All Live Courses
            </span>
          </ShimmerButton>
        </div>
      </div>
  
      {/* Product Demo Video Section */}
      <div className="w-full">
        <ProductDemoVideo forwardedRef={productDemoRef} />
      </div>
    </section>
  );
}

export default HeroHome;