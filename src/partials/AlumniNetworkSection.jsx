import React from 'react';

function AlumniNetworkSection() {
  return (
    <div className="bg-[#000001] p-4 md:p-10 lg:p-16"> {/* Outer black background */}
      <div className="bg-[#0B0C1F] rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-gray-800"> {/* Inner container with dark bg */}

        {/* Left Side: Network Visualization */}
        <div className="w-full md:w-5/12 lg:w-4/12 bg-gray-900 rounded-lg p-6 aspect-square md:aspect-auto md:h-80 relative overflow-hidden border border-gray-700">
          {/* SVG for network nodes and lines */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0"
          >
            {/* Define reusable circle styles or elements if needed */}
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              </filter>
            </defs>

            {/* Lines - Using amber/gold colors */}
            <line x1="25" y1="20" x2="38" y2="40" stroke="#d97706" strokeWidth="0.8" /> {/* Amber */}
            <line x1="38" y1="40" x2="50" y2="60" stroke="#d97706" strokeWidth="0.8" />
            <line x1="50" y1="60" x2="62" y2="80" stroke="#d97706" strokeWidth="0.8" />
            <line x1="62" y1="80" x2="75" y2="85" stroke="#d97706" strokeWidth="0.8" />
            <line x1="38" y1="40" x2="80" y2="25" stroke="#d97706" strokeWidth="0.8" />

            {/* Amber/Gold Nodes */}
            <circle cx="25" cy="20" r="7" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="50" cy="60" r="7" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="75" cy="85" r="7" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />

            {/* Dark Blue/Gray Nodes */}
            <circle cx="38" cy="40" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="1.5" />
            <circle cx="62" cy="80" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="1.5" />
            <circle cx="80" cy="25" r="7" fill="#1f2937" stroke="#4b5563" strokeWidth="1.5" />

            {/* Adding glow effect for amber nodes */}
            <circle cx="25" cy="20" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" filter="url(#glow)" opacity="0.4" />
            <circle cx="50" cy="60" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" filter="url(#glow)" opacity="0.4" />
            <circle cx="75" cy="85" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" filter="url(#glow)" opacity="0.4" />
          </svg>
          
          {/* Subtle background grid */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="border-r border-b border-gray-700/10"></div>
            ))}
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">
            Alumni Network and Job Listings
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our HR team also posts regular job updates that you can apply directly whenever you are ready.
          </p>
          
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-5 py-2 rounded transition-colors"
            onClick={() => {
              window.location.href = "https://alumni.chaicode.com/auth/login?redirect=%2Fipj-1";
            }}>
              Join Network
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AlumniNetworkSection;