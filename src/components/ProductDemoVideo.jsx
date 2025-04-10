import React, { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

const ProductDemoVideo = ({ forwardedRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoContainerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Logic to handle clicks outside the video
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only check when video is playing
      if (isPlaying) {
        // Check if the click is outside the video container
        if (videoContainerRef.current && !videoContainerRef.current.contains(event.target)) {
          setIsPlaying(false);
        }
      }
    };

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPlaying]);

  return (
    <section 
      ref={forwardedRef} 
      className="py-12 sm:py-16 md:py-20 bg-[#000001] min-h-[80vh] md:min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mt-8 sm:mt-12 md:mt-16 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div 
            ref={videoContainerRef} 
            className="relative w-full h-0 pb-[56.25%] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-[#0B0C1F] shadow-xl md:shadow-2xl border border-blue-900/30"
          >
            {!isPlaying && (
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={handlePlay}
                aria-label="Play video"
                role="button"
              >
                {/* YouTube Default Thumbnail */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/W43v7ePnjAA"
                  title="Product Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-500 bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg" />
                    <Play
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            )}

            {isPlaying && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/W43v7ePnjAA?autoplay=1"
                title="Product Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemoVideo;