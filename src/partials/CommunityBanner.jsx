import { useState } from 'react';
import hcImage from "../images/hc-discord.jpg"; // Update with the correct path to the image

export default function CommunityBanner() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="w-full bg-[#000001] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-[#0B0C1F]">
          <div className="flex flex-col md:flex-row">
            {/* Left section */}
            <div className="flex-1 flex flex-col justify-center space-y-6 p-8">
              
              <h2 className="text-3xl font-bold text-amber-300">
                Join our community where creativity thrives.
              </h2>
              
              <div 
                className="mt-auto bg-gradient-to-r from-amber-500 to-amber-600 rounded-md p-3 text-center text-black font-medium self-start md:self-auto shadow-md"
              >
                80,000 Active coders in Discord
              </div>
            </div>
            
            {/* Right section */}
            <div className="flex-1 md:border-l border-gray-700 flex flex-col">
              {/* Image Header */}
              <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-900">
                <img 
                  src={hcImage} 
                  alt="Discord Community" 
                  className="min-w-fit h-auto object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 p-8 bg-gray-900/50 flex flex-col items-center justify-center">
                <a
                  href="https://discord.com/invite/WDrH3zuWFb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-md flex items-center space-x-3 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-1"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" width="24" height="18" fill="currentColor">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                  </svg>
                  <span className="font-medium">Join Discord</span>
                </a>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400 mb-2">
                    Connect with fellow coders & mentors
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
        </div>
      </div>
    </section>
  );
}