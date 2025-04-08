import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import infoworldLogo from "../images/infoworld-logo.svg";
import environmentFinanceLogo from "../images/enviroment-finance-logo.svg";
// import financialTimesLogo from "../images/financial-times-logo";
import TechCrunchLogo from "../images/techcrunch-logo.svg";
import Modal from "../utils/Modal";
import { Play } from "lucide-react";
import HeroImage from '../images/hero-image-01.jpg';
import ShimmerButton from '../components/ShimmerButton';
import StarBorderButton from '../components/StarBorderButton';
import ProductDemoVideo from '../partials/ProductDemoVideo';


const HeroSection = ({productDemoRef}) => {
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
    <section className="relative bg-[#0B0D1F] text-white py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
  {/* Optional background elements for enhanced visual appeal */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-transparent"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('/hubfs/hero-bg-v1.svg')] bg-no-repeat bg-cover bg-center opacity-20"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="flex flex-col items-center text-center">
      {/* Hero Content with responsive width */}
      <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 max-w-4xl mx-auto">
        {/* Responsive title with improved spacing */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 leading-tight mb-3 sm:mb-4 md:mb-5">
          Unlocking the full potential of the brightest minds in finance — with AI
        </h1>
        
        {/* Responsive paragraph with conditional line break */}
        <p className="text-base sm:text-lg text-white mt-3 sm:mt-4 px-2 sm:px-4">
          We're freeing finance professionals to focus on what attracted them to the industry in the first place:
          {/* Line break only on larger screens */}
          <span className="hidden sm:inline"><br /></span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100"> strategic insights and consequential decisions</span>.
        </p>
        
        {/* Responsive button container with proper spacing */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          {/* First button - fixed width on mobile, auto width on larger screens */}
          <div className="w-full sm:w-auto">
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
              className="w-full sm:w-auto"
            >
              Schedule Demo
            </StarBorderButton>
          </div>
          
          {/* Second button - fixed width on mobile, auto width on larger screens */}
          <div className="w-full sm:w-auto">
            <ShimmerButton 
              className="font-semibold text-sm sm:text-base md:text-lg w-full py-3 sm:py-4 px-6 sm:px-8" 
              shimmerColor="#F59E0B"
              background="transparent" 
              borderRadius="1.8rem"
              onClick={scrollToProductDemo}
            >
              <span className="text-center font-semibold leading-none tracking-tight">
                Watch Demo
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};


const AboutSection = () => {
  return (
    <section className="relative bg-[#0B0D1F] text-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A3F] via-[#0E1235] to-[#0B0D1F]"></div>
        
      </div>
      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 mb-4">
            Our Purpose
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap items-center gap-8">
          {/* Left Column - Vision */}
          <div className="w-full md:w-[calc(50%-16px)] mb-8 md:mb-0">
            <div className="p-6 bg-[#0D1128] bg-opacity-50 rounded-lg border border-[#1A2144] shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#0B1A3F] rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Our Vision
                </h3>
              </div>
              
              <p className="text-lg mb-6 text-gray-200 leading-relaxed">
                Work should transcend mere productivity—it should inspire and fulfill. Yet in the financial sector, professionals often find themselves caught in monotonous cycles of routine tasks. At Quanfia, we're pioneering a transformation that liberates talent from mundane processes, enabling a return to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 font-medium">meaningful, strategic contribution</span> that revitalizes the essence of financial expertise.
              </p>
              
              
            </div>
          </div>
          
          {/* Right Column - Mission */}
          <div className="w-full md:w-[calc(50%-16px)]">
            <div className="p-6 bg-[#0D1128] bg-opacity-50 rounded-lg border border-[#1A2144] shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#0B1A3F] rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Our Mission
                </h3>
              </div>
              
              <div className="text-lg space-y-4 text-gray-200">
                <p className="leading-relaxed">
                  In today's financial landscape, exceptional talent is too often consumed by repetitive processes rather than strategic innovation. Quanfia is fundamentally redefining this paradigm.
                </p>
                <p className="leading-relaxed">
                  Through sophisticated AI agents, we're automating the labor-intensive components of knowledge work, catalyzing a renaissance in financial services that emphasizes human insight and creativity.
                </p>
                <p className="leading-relaxed">
                  Our impact is measurable: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-yellow-200 font-bold">25%</span> of the world's leading financial institutions now leverage Quanfia's technology, enabling their professionals to address critical challenges with unprecedented speed and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



// Venn Diagram

// const VennDiagram = () => {
//   const [hoveredSection, setHoveredSection] = useState(null);
  
//   // Helper function to determine if a section should be zoomed
//   const isZoomed = (section) => hoveredSection === section;
  
//   const baseCircleClasses = "absolute box-border w-[21rem] h-[21rem] rounded-full text-white transition-all duration-500 ease-in-out hover:shadow-2xl";
//   const intersectionClasses = "absolute z-50 transition-all duration-500 ease-in-out";
  
//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-[#f5f5f7]">
//         <div className=" font-sans relative w-full max-w-[50rem] h-[42rem] mx-auto my-5 text-base">
//       {/* Desktop version */}
//       <div className="hidden md:block">
//         {/* Circle 1 - Students */}
//         <div 
//           className={`${baseCircleClasses} z-10 bg-[rgba(173,53,45,0.7)]
//                     top-[4.5rem] left-[6.5rem]
//                     ${isZoomed('students') ? 'scale-110 z-20 shadow-[0_0_30px_rgba(173,53,45,0.4)]' : 'hover:scale-105'}`}
//           onMouseEnter={() => setHoveredSection('students')}
//           onMouseLeave={() => setHoveredSection(null)}
//         >
//           <h3 className="absolute -top-12 w-full pr-16 text-[rgb(173,53,53)] font-bold">Students</h3>
//           <ul className="absolute top-16 left-10 w-[9rem] space-y-2">
//             <li className="text-sm">Create a scholarship</li>
//             <li className="text-sm pr-4">Support a student organization</li>
//             <li className="text-sm pr-8">Sponsor a capstone project</li>
//           </ul>
//         </div>
        
//         {/* Circle 2 - Faculty */}
//         <div 
//           className={`${baseCircleClasses} z-30 bg-[rgba(0,108,119,0.5)]
//                     top-[4.5rem] right-[6.5rem]
//                     ${isZoomed('faculty') ? 'scale-110 z-40 shadow-[0_0_30px_rgba(0,108,119,0.4)]' : 'hover:scale-105'}`}
//           onMouseEnter={() => setHoveredSection('faculty')}
//           onMouseLeave={() => setHoveredSection(null)}
//         >
//           <h3 className="absolute -top-12 w-full pr-8 text-[rgb(53,161,172)] text-right font-bold">Faculty</h3>
//           <ul className="absolute top-16 right-4 w-[9rem] text-right space-y-2">
//             <li className="text-sm">Join a research consortium</li>
//             <li className="text-sm">Support or initiate an endowment</li>
//             <li className="text-sm">License new technology</li>
//           </ul>
//         </div>
        
//         {/* Circle 3 - Infrastructure */}
//         <div 
//           className={`${baseCircleClasses} z-0 bg-[rgba(220,153,71,0.7)]
//                     bottom-[4.5rem] left-[12.5rem]
//                     ${isZoomed('infrastructure') ? 'scale-110 z-20 shadow-[0_0_30px_rgba(220,153,71,0.4)]' : 'hover:scale-105'}`}
//           onMouseEnter={() => setHoveredSection('infrastructure')}
//           onMouseLeave={() => setHoveredSection(null)}
//         >
//           <h3 className="absolute -bottom-12 w-full text-[rgb(242,141,40)] text-center font-bold">Infrastructure</h3>
//           <ul className="absolute top-48 left-24 w-[9rem] space-y-2">
//             <li className="text-sm">Provide a capital gift</li>
//             <li className="text-sm">Name the college</li>
//             <li className="text-sm">Name the deanship</li>
//           </ul>
//         </div>
        
//         {/* Intersections */}
//         <div 
//           className={`${intersectionClasses} w-[20rem] left-1/2 -translate-x-1/2 top-24
//                     ${isZoomed('students-faculty') ? 'scale-110 z-60' : 'hover:scale-105'}`}
//           onMouseEnter={() => setHoveredSection('students-faculty')}
//           onMouseLeave={() => setHoveredSection(null)}
//         >
//           <ul className="text-[#40617f] space-y-2 text-center">
//             {/* <li className="text-sm font-medium">Support a fellowship</li>
//             <li className="text-sm font-medium">Fund a research project</li> */}
//           </ul>
//         </div>
        
//         <div 
//           className={`${intersectionClasses} top-[calc(21rem+4rem)] right-4 w-64
//                     ${isZoomed('faculty-infrastructure') ? 'scale-110 z-60' : 'hover:scale-105'}`}
//           onMouseEnter={() => setHoveredSection('faculty-infrastructure')}
//           onMouseLeave={() => setHoveredSection(null)}
//         >
//           <ul className="text-[#649540] space-y-2 text-center">
//             {/* <li className="text-sm font-medium">Endow a faculty chair</li> */}
//             {/* <li className="text-sm font-medium">Join an affiliate center</li> */}
//           </ul>
//         </div>
        
//         <div 
//           className={`${intersectionClasses} top-[calc(21rem+4rem)] left-4 w-64
//                     ${isZoomed('infrastructure-students') ? 'scale-110 z-60' : 'hover:scale-105'}`}
//           onMouseEnter={() => setHoveredSection('infrastructure-students')}
//           onMouseLeave={() => setHoveredSection(null)}
//         >
//           {/* <ul className="text-[#c5674c] space-y-2 text-center">
//             <li className="text-sm font-medium">Support a fund or lecture series</li>
//           </ul> */}
//         </div>
        
//         <div 
//           className={`${intersectionClasses} top-1/2 left-1/2 w-48 -translate-x-1/2 -translate-y-1/2 text-center
//                     ${isZoomed('all') ? 'scale-110 z-60' : 'hover:scale-105'}`}
//           onMouseEnter={() => setHoveredSection('all')}
//           onMouseLeave={() => setHoveredSection(null)}
//         >
//           <p className="text-sm text-[#141313] font-medium">
//             Name a lab or learning space
//           </p>
//         </div>
//       </div>

//       {/* Mobile version */}
//       <div className="md:hidden space-y-6 pt-4 px-4">
//         {[
//           {
//             title: 'Students',
//             color: 'be4c45',
//             textColor: 'rgb(173,53,53)',
//             items: ['Create a scholarship', 'Support a student organization', 'Sponsor a capstone project']
//           },
//           {
//             title: 'Students and Faculty',
//             color: '40617f',
//             items: ['Support a fellowship', 'Fund a research project']
//           },
//           {
//             title: 'Faculty',
//             color: '2b929e',
//             textColor: 'rgb(51,133,146)',
//             items: ['Join a research consortium', 'Support or initiate an endowment', 'License new technology']
//           },
//           {
//             title: 'Faculty and Infrastructure',
//             color: '649540',
//             items: ['Endow a faculty chair', 'Join an affiliate center']
//           },
//           {
//             title: 'Infrastructure',
//             color: 'dc9947',
//             textColor: 'rgb(200,133,51)',
//             items: ['Provide a capital gift', 'Name the college', 'Name the deanship']
//           },
//           {
//             title: 'Infrastructure and Students',
//             color: 'c5674c',
//             textColor: '#bb5335',
//             items: ['Support a fund or lecture series']
//           },
//           {
//             title: 'Students, Faculty and Infrastructure',
//             color: '444',
//             items: ['Name a lab or learning space']
//           }
//         ].map((section, index) => (
//           <div 
//             key={index}
//             className="relative border-l-2 pl-6 pt-4 pb-3 transition-all duration-300 hover:pl-8"
//             style={{ borderColor: `#${section.color}` }}
//           >
//             <h3 
//               className="mb-3 font-bold"
//               style={{ color: section.textColor || `#${section.color}` }}
//             >
//               {section.title}
//             </h3>
//             {/* <ul className="list-disc pl-6 space-y-2">
//               {section.items.map((item, itemIndex) => (
//                 <li key={itemIndex} className="mb-1">{item}</li>
//               ))}
//             </ul> */}
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
    
//   );
// };

//Layered Diagram

// const LayeredCirclesDiagram = () => {
//   const [visibleLayers, setVisibleLayers] = useState(0);
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setVisibleLayers(prev => {
//         if (prev < 5) return prev + 1;
//         clearInterval(timer);
//         return prev;
//       });
//     }, 700); // Time between each circle appearing
    
//     return () => clearInterval(timer);
//   }, []);
  
//   return (
//     <section className="flex items-center justify-center min-h-screen bg-[#0B0D1F] py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-white mb-4">Our Security Approach</h2>
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//             We employ a multi-layered approach to protect your data and applications.
//           </p>
//         </div>
        
//         <div className="relative flex items-end justify-center w-full h-96">
//           {/* Outer Circle (Perimeter) */}
//           <div className={`circle absolute bottom-0 w-96 h-96 bg-[#6e4fa3] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
//           <span className={`absolute top-1 text-white font-bold text-lg bg-[#6e4fa3] px-4 py-2 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 5 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
//             Perimeter
//           </span>

//           {/* Second Circle (Network) */}
//           <div className={`circle absolute bottom-0 w-80 h-80 bg-[#8467b7] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
//           <span className={`absolute bottom-72 text-white font-bold text-lg bg-[#8467b7] px-2 py-1 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 4 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
//             Network
//           </span>

//           {/* Third Circle (Host) */}
//           <div className={`circle absolute bottom-0 w-64 h-64 bg-[#9971de] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
//           <span className={`absolute bottom-52 text-white font-bold text-lg bg-[#9971de] px-2 py-1 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 3 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
//             Host
//           </span>

//           {/* Fourth Circle (Application) */}
//           <div className={`circle absolute bottom-0 w-48 h-48 bg-[#4A90B3] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
//           <span className={`absolute bottom-36 text-white font-bold text-lg bg-[#4A90B3] px-2 py-1 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 2 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
//             Application
//           </span>

//           {/* Innermost Circle (Data) */}
//           <div className={`circle absolute bottom-0 w-32 h-32 bg-[#40E0D0] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
//           <span className={`absolute bottom-11 text-white font-bold text-lg bg-[#40E0D0] px-4 py-2 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 1 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
//             Data
//           </span>
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//         .circle:not(.opacity-0) {
//           animation: float 4s ease-in-out infinite;
//         }
//         .circle:hover {
//           animation: none;
//           transform: scale(1.05);
//           transition: transform 0.3s ease;
//         }
//       `}</style>
//     </section>
//   );
// };

// Combined Diagrams

const CombinedDiagrams = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2">
        <VennDiagram />
      </div>
      <div className="w-full md:w-1/2">
        <LayeredCirclesDiagram />
      </div>
    </div>
  );
};

// First Component: Venn Diagram
const VennDiagram = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  
  // Helper function to determine if a section should be zoomed
  const isZoomed = (section) => hoveredSection === section;
  
  const baseCircleClasses = "absolute box-border w-[21rem] h-[21rem] rounded-full text-white transition-all duration-500 ease-in-out hover:shadow-2xl";
  const intersectionClasses = "absolute z-50 transition-all duration-500 ease-in-out";
  
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0B0D1F]">
      <div className="absolute top-20 left-0 right-0 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400">
          Our Core Capabilities
        </h3>
      </div>
      
      <div className="font-sans relative w-full max-w-[50rem] h-[42rem] mx-auto my-5 text-base">
        {/* Desktop version */}
        <div className="hidden md:block">
          {/* Circle 1 - Tech (formerly Students) */}
          <div 
            className={`${baseCircleClasses} z-10 bg-[rgba(173,53,45,0.7)]
                      top-[4.5rem] left-[6.5rem]
                      ${isZoomed('students') ? 'scale-110 z-20 shadow-[0_0_30px_rgba(173,53,45,0.4)]' : 'hover:scale-105'}`}
            onMouseEnter={() => setHoveredSection('students')}
            onMouseLeave={() => setHoveredSection(null)}>
            {/* Centered Tech text with larger font */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">Tech</span>
            </div>
          </div>
          
          {/* Circle 2 - AI (formerly Faculty) */}
          <div 
            className={`${baseCircleClasses} z-30 bg-[rgba(0,108,119,0.5)]
                      top-[4.5rem] right-[6.5rem]
                      ${isZoomed('faculty') ? 'scale-110 z-40 shadow-[0_0_30px_rgba(0,108,119,0.4)]' : 'hover:scale-105'}`}
            onMouseEnter={() => setHoveredSection('faculty')}
            onMouseLeave={() => setHoveredSection(null)}>
            {/* Centered AI text with larger font */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">AI</span>
            </div>
          </div>
          
          {/* Circle 3 - Finance (formerly Infrastructure) */}
          <div 
            className={`${baseCircleClasses} z-0 bg-[rgba(220,153,71,0.7)]
                      bottom-[4.5rem] left-[12.5rem]
                      ${isZoomed('infrastructure') ? 'scale-110 z-20 shadow-[0_0_30px_rgba(220,153,71,0.4)]' : 'hover:scale-105'}`}
            onMouseEnter={() => setHoveredSection('infrastructure')}
            onMouseLeave={() => setHoveredSection(null)}>
            {/* Centered Finance text with larger font */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">Finance</span>
            </div>
          </div>
          
          {/* Intersections */}
          <div 
            className={`${intersectionClasses} w-[20rem] left-1/2 -translate-x-1/2 top-24
                      ${isZoomed('students-faculty') ? 'scale-110 z-60' : 'hover:scale-105'}`}
            onMouseEnter={() => setHoveredSection('students-faculty')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <ul className="text-[#40617f] space-y-2 text-center">
              {/* <li className="text-sm font-medium">Support a fellowship</li>
              <li className="text-sm font-medium">Fund a research project</li> */}
            </ul>
          </div>
          
          <div 
            className={`${intersectionClasses} top-[calc(21rem+4rem)] right-4 w-64
                      ${isZoomed('faculty-infrastructure') ? 'scale-110 z-60' : 'hover:scale-105'}`}
            onMouseEnter={() => setHoveredSection('faculty-infrastructure')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <ul className="text-[#649540] space-y-2 text-center">
              {/* <li className="text-sm font-medium">Endow a faculty chair</li>
              <li className="text-sm font-medium">Join an affiliate center</li> */}
            </ul>
          </div>
          
          <div 
            className={`${intersectionClasses} top-[calc(21rem+4rem)] left-4 w-64
                      ${isZoomed('infrastructure-students') ? 'scale-110 z-60' : 'hover:scale-105'}`}
            onMouseEnter={() => setHoveredSection('infrastructure-students')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* <ul className="text-[#c5674c] space-y-2 text-center">
              <li className="text-sm font-medium">Support a fund or lecture series</li>
            </ul> */}
          </div>
          
          <div 
            className={`${intersectionClasses} top-1/2 left-1/2 w-48 -translate-x-1/2 -translate-y-1/2 text-center
                      ${isZoomed('all') ? 'scale-110 z-60' : 'hover:scale-105'}`}
            onMouseEnter={() => setHoveredSection('all')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <p className="text-sm text-[#141313] font-medium">
              {/* Name a lab or learning space */}
            </p>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden w-full px-6 py-8">
          <div className="space-y-4">
            {/* Tech Card */}
            <div className="bg-[rgba(173,53,45,0.7)] p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white text-center mb-2">Tech</h3>
              <p className="text-white text-sm text-center opacity-90">
                Cloud infrastructure & advanced technologies
              </p>
            </div>
            
            {/* AI Card */}
            <div className="bg-[rgba(0,108,119,0.5)] p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white text-center mb-2">AI</h3>
              <p className="text-white text-sm text-center opacity-90">
                Machine learning & intelligent automation
              </p>
            </div>
            
            {/* Finance Card */}
            <div className="bg-[rgba(220,153,71,0.7)] p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white text-center mb-2">Finance</h3>
              <p className="text-white text-sm text-center opacity-90">
                Industry expertise & domain knowledge
              </p>
            </div>
            
            {/* Quanfia Card */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <h3 className="text-xl font-bold text-white text-center">Quanfia</h3>
              <div className="flex justify-center mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="text-white text-sm text-center mt-2 opacity-90">
                The convergence of technology, AI, and finance expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Second Component: Layered Circles Diagram
const LayeredCirclesDiagram = () => {
  const [visibleLayers, setVisibleLayers] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLayers(prev => {
        if (prev < 5) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 700); // Time between each circle appearing
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#0B0D1F] py-16">
      <div className="max-w-6xl mx-auto px-2">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">Our Security Approach</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We employ a multi-layered approach to protect your data and applications.
          </p>
        </div>
        
        <div className="relative flex items-end justify-center w-full h-96">
          {/* Outer Circle (Perimeter) */}
          <div className={`circle absolute bottom-0 w-96 h-96 bg-[#6e4fa3] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <span className={`absolute top-1 text-white font-bold text-lg bg-[#6e4fa3] px-4 py-2 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 5 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
            Perimeter
          </span>

          {/* Second Circle (Network) */}
          <div className={`circle absolute bottom-0 w-80 h-80 bg-[#8467b7] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <span className={`absolute bottom-72 text-white font-bold text-lg bg-[#8467b7] px-2 py-1 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 4 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
            Network
          </span>

          {/* Third Circle (Host) */}
          <div className={`circle absolute bottom-0 w-64 h-64 bg-[#9971de] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <span className={`absolute bottom-52 text-white font-bold text-lg bg-[#9971de] px-2 py-1 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 3 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
            Host
          </span>

          {/* Fourth Circle (Application) */}
          <div className={`circle absolute bottom-0 w-48 h-48 bg-[#4A90B3] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <span className={`absolute bottom-36 text-white font-bold text-lg bg-[#4A90B3] px-2 py-1 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 2 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
            Application
          </span>

          {/* Innermost Circle (Data) */}
          <div className={`circle absolute bottom-0 w-32 h-32 bg-[#40E0D0] rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 ${visibleLayers >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <span className={`absolute bottom-11 text-white font-bold text-lg bg-[#40E0D0] px-4 py-2 rounded-full shadow-md transition-all duration-500 ${visibleLayers >= 1 ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'}`}>
            Data
          </span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .circle:not(.opacity-0) {
          animation: float 4s ease-in-out infinite;
        }
        .circle:hover {
          animation: none;
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};




// Team section
const TeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      name: "",
      role: "Co-Founder",
      bio: "Tech lead(4 years experience in Cloud Engineering at leading MNC).",
      image: ""
    },
    {
      name: "",
      role: "Co-Founder",
      bio: "AI lead(4 years experience in AI at leading MNC).",
      image: ""
    },
    {
      name: "",
      role: "Co-Founder",
      bio: "Finance lead(25 years experience as CIO at leading Investment firm).",
      image: ""
    }
  ];

  return (
    <section className="relative py-16 bg-[#0B0D1F] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A3F] to-[#0B0D1F]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 leading-tight mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            We've assembled a team of experts in finance, AI, and machine learning to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100"> transform how financial institutions operate</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
        {/* Team Member Cards */}
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-[#0A0B1C] rounded-lg p-6 shadow-lg border border-blue-900/30 hover:shadow-blue-900/20 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Member content without the empty space div */}
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 text-center mb-2">
              {member.name }
            </h3>
            <p className="text-[#FFC038] text-center mb-4 font-medium">
              {member.role}
            </p>
            <p className="text-white/80 text-center">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
        
        {/* <div className="mt-14 text-center">
          <a 
            href="/careers" 
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-400 font-medium rounded-lg shadow-md transition hover:bg-blue-400 hover:text-white hover:border-blue-500"
          >
            Join our team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

// Values section
// const ValuesSection = () => {
//   const values = [
//     {
//       title: "Innovation",
//       description: "We constantly push the boundaries of what's possible in financial technology."
//     },
//     {
//       title: "Integrity",
//       description: "We maintain the highest ethical standards and transparency in all of our operations."
//     },
//     {
//       title: "Impact",
//       description: "We focus on creating solutions that deliver meaningful business outcomes."
//     }
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-b from-[#111326] to-[#0B0D1F]">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//             The principles that guide everything we do at Quanfia.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           {values.map((value, index) => (
//             <div key={index} className="bg-opacity-20 bg-white backdrop-blur-sm rounded-lg p-6 shadow-lg">
//               <div className="w-12 h-12 bg-[#FFC038] rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <span className="text-[#0B0D1F] font-bold text-xl">{index + 1}</span>
//               </div>
//               <h3 className="text-xl font-semibold text-white text-center mb-2">{value.title}</h3>
//               <p className="text-gray-300 text-center">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Contact CTA section
const ContactSection = () => {
  return (
    <section className="py-16 bg-[#0B0D1F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Learn More?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Get in touch with our team to discover how Quanfia can transform your financial operations.
        </p>
                <button onClick={() => {
                    document.dispatchEvent(
                      new CustomEvent('requestDemo', { 
                        detail: { action: 'openDemoPopup' } 
                      })
                    );
                  }}
                  className="btn-sm text-[#F8BB38] border-b-2 border-yellow-400 hover:bg-yellow-400 hover:text-[#0B0D1F] ml-3 px-4 py-2 rounded-md shadow-md transition-all duration-200 cursor-pointer">
                  Get a demo
                </button>
      </div>
    </section>
  );
};

// Product Demo Video

const ProductDemoVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    setIsPlaying(true);
  };


return (
  <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-base font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          Transform Your Experience with{" "}
          <span className="text-emerald-600">Our Services</span>
        </h1>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden bg-white shadow-2xl">
          {!isPlaying && (
            <div
              className="absolute inset-0 cursor-pointer group"
              onClick={handlePlay}
            >
              {/* Thumbnail Image */}
              <img
                src={HeroImage}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer circle */}
                  <div className="w-16 h-16 rounded-full bg-emerald-500 bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110" />
                  
                  {/* Inner play icon */}
                  <Play 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" 
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            </div>
          )}
          
          {isPlaying && (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/IaBxV-6F42k?si=nBWQHLh0a7fOLxFL?autoplay=1"
              title="Product Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video Caption */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
          Just 4-minutes of demo to see how Quanfia can help transform your financial workflows
          </p>
        </div>
      </div>
    </div>
  </section>
);
};




// Main About component that brings together all sections
const About = () => {
  const productDemoRef = useRef(null);
  return (
    <>
       <Helmet>
        <title>About Quanfia</title>
        <meta name="description" content="Learn about Quanfia's unique approach combining finance expertise, AI, and cutting-edge technology to transform financial services." />
      </Helmet>
      <HeroSection productDemoRef={productDemoRef} />
      {/* <VennDiagram />
      <LayeredCirclesDiagram /> */}
      <CombinedDiagrams />
      <AboutSection />
      {/* <TeamSection /> */}
      {/* <ValuesSection /> */}
      <ContactSection />
      {/* <NewsSection /> */}
      <ProductDemoVideo forwardedRef={productDemoRef} />
    </>
  );
};

export default About;