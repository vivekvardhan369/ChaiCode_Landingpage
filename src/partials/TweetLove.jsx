import React from 'react';

export default function TweetLove() {
  return (
    <div className="bg-[#000001] py-12 sm:py-16 md:py-20 text-center text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-400 mb-2">Love that we get from our community</p>
        
        <h2 className="text-4xl font-bold mb-8 text-amber-300">Tweet Love</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* First Twitter Card */}
          <div className="border border-gray-700 rounded-lg p-6 flex items-center justify-center bg-[#0B0C1F] shadow-lg">
            <p className="text-gray-300">
              Twitter cards<br />
              with course reviews
            </p>
          </div>
          
          {/* Second Twitter Card */}
          <div className="border border-gray-700 rounded-lg p-6 flex items-center justify-center bg-[#0B0C1F] shadow-lg">
            <p className="text-gray-300">
              Twitter cards<br />
              with course reviews
            </p>
          </div>
          
          {/* Third Twitter Card */}
          <div className="border border-gray-700 rounded-lg p-6 flex items-center justify-center bg-[#0B0C1F] shadow-lg">
            <p className="text-gray-300">
              Twitter cards<br />
              with course reviews
            </p>
          </div>
        </div>
        
        <button className="px-6 py-3 border border-amber-500 text-amber-300 rounded-md hover:bg-amber-500 hover:text-black transition-colors">
          Join Cohorts Live Classes
        </button>
      </div>
    </div>
  );
}