import React from 'react';

export default function FreeAPILanding() {
  return (
    <section className="bg-[#000001] w-full py-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-amber-300">FreeAPI - Open Source</h1>
          <p className="text-gray-400">Powerful backend APIs for your next project</p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-amber-300">Unlock Your Potential with Our API Hub</h2>
            <p className="mb-4 text-gray-300">
              Our API Hub is designed to streamline your backend development processes across
              various programming languages.
            </p>
            <p className="mb-4 text-gray-300">
              With free resources, you can affordably build and
              implement powerful applications for both web and mobile applications.
            </p>
            <p className="mb-6 text-gray-300">
              Join us to enhance your skills and take your coding projects to the next level!
            </p>
            
            <a 
              href="https://freeapi.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              <span>Check FreeAPI Docs</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="flex-1 border-2 border-gray-700 rounded-lg overflow-hidden bg-[#0B0C1F] shadow-lg">
            <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/DxedlhTyR7Q?si=yQzaFVtvYfMivOgV"
                title="FreeAPI Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-4 border-t border-gray-700 bg-gray-900/50">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-300">FreeAPI</h3>
                  <p className="text-xs text-gray-400">YouTube Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}