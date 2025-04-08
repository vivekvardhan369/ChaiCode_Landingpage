import React from "react";
import privateEquityLogo from "../images/private-equity-logo.svg";
import logo from "../images/logo_new.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0B0D1F] text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background gradient effect similar to HeroHome */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A3F] to-[#0B0D1F] opacity-80"></div>
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hubfs/hero-bg-v1.svg')" }}
        ></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          
          {/* Left Section */}
          <div className="w-full md:w-1/2 max-w-md">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  const heroSection = document.getElementById("heroHomeSection");
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                aria-label="Go to homepage"
              >
                <img src={logo} alt="Quanfia Logo" className="w-24 sm:w-28" />
              </Link>
            </div>

            {/* Description */}
            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-200 leading-relaxed max-w-lg">
              Quanfia liberates finance industry professionals from time-consuming manual tasks so they can focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">higher-value work</span> and make faster, more informed strategic decisions.
            </p>

            {/* Private Equity Logo */}
            {/* <div className="mb-6 sm:mb-8">
              <img
                src={privateEquityLogo}
                alt="Private Equity Logo"
                className="w-40 sm:w-56"
              />
            </div> */}

            {/* Get a Demo Button */}
            <div className="mt-4 sm:mt-6">
              <button 
                onClick={() => {
                  document.dispatchEvent(
                    new CustomEvent('requestDemo', { 
                      detail: { action: 'openDemoPopup' } 
                    })
                  );
                }}
                className="group relative w-36 sm:w-40 cursor-pointer overflow-hidden rounded-full border border-gray-600 bg-transparent p-2 text-center font-medium"
              >
                <span className="inline-block text-sm sm:text-base transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                  Get a demo
                </span>
                <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                  <span>Get a demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                <div className="absolute left-[20%] top-[40%] h-0 w-0 scale-0 rounded-lg bg-[#F8BB38] transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#F8BB38]"></div>
              </button>
            </div>
          </div>

          {/* Right Section - Navigation and Info */}
          <div className="w-full md:w-1/2 flex flex-wrap gap-x-8 gap-y-8 mt-8 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Navigation Links */}
            <div className="w-full sm:w-auto">
              <h4 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mb-3 sm:mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/" className="text-sm sm:text-base text-gray-200 hover:text-blue-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm sm:text-base text-gray-200 hover:text-blue-300 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="text-sm sm:text-base text-gray-200 hover:text-blue-300 transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm sm:text-base text-gray-200 hover:text-blue-300 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="w-full sm:w-auto">
              <h4 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mb-3 sm:mb-4">
                Social
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a 
                    href="https://www.linkedin.com/company/quanfia/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm sm:text-base text-gray-200 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                  >
                    LinkedIn
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/quanfia_" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm sm:text-base text-gray-200 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                  >
                    X
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            </div>
  
            {/* Contact - NEW SECTION */}
            <div className="w-full sm:w-auto">
              <h4 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mb-3 sm:mb-4">
                Contact
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a 
                    href="mailto:info@quanfia.com" 
                    className="text-sm sm:text-base text-gray-200 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                  >
                    info@quanfia.com
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} QUANFIA. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="/privacy-policy" className="text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;