import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import corporate logos
import microsoftLogo from "../images/microsoft-logo.png";
import amazonLogo from "../images/amazon-logo.png";
import googleLogo from "../images/google-logo.png";
import metaLogo from "../images/meta-logo.jpg";
import appleLogo from "../images/apple-logo.png";
import netflixLogo from "../images/netflix-logo.png";

const logos = [
  { src: microsoftLogo, alt: "Microsoft", width: 140, height: 40 },
  { src: amazonLogo, alt: "Amazon", width: 140, height: 40 },
  { src: googleLogo, alt: "Google", width: 140, height: 40 },
  { src: metaLogo, alt: "Meta", width: 120, height: 40 },
  { src: appleLogo, alt: "Apple", width: 120, height: 40 },
  { src: netflixLogo, alt: "Netflix", width: 140, height: 40 },
];

const FeaturesBlocks = () => {
  // Create duplicates to ensure continuous flow
  const extendedLogos = Array(5).fill(logos).flat();

  // For logos - make sure Autoplay module is properly configured
  const swiperSettings = {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 5000,
    loop: true,
    loopFillGroupWithBlank: true,
    loopAdditionalSlides: 10,
    slidesPerView: 'auto',
    spaceBetween: 80,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
    grabCursor: false,
  };

  return (
    <section className="bg-[#000001] flex flex-col items-center justify-center py-16 px-4 overflow-hidden border-t border-gray-800">
      {/* Logo Section with increased height */}
      <div className="flex flex-col items-center justify-center py-10 w-full">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-amber-300">
            Where Our Students Work
          </h2>
          <p className="text-lg font-medium text-gray-300 mb-2">
            Our graduates have been hired by top tech companies worldwide
          </p>
          <p className="text-base text-gray-400">
            From startups to Fortune 500 companies, ChaiCode alumni are making an impact everywhere
          </p>
        </div>
        
        {/* Logo Marquee with Swiper - Increased height and improved visuals */}
        <div className="w-full overflow-hidden relative py-8 bg-[#0B0C1F] ">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000001] via-transparent to-[#000001] z-10 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              {...swiperSettings}
              className="logo-swiper py-8"
              wrapperClass="items-center"
            >
              {extendedLogos.map((logo, index) => (
                <SwiperSlide 
                  key={index} 
                  className="swiper-slide" 
                  style={{ width: 'auto' }}
                >
                  <div className="flex flex-col items-center justify-center px-8 py-4 mx-4 h-32">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-16 w-auto opacity-60 hover:opacity-100 transition-all duration-500 filter grayscale hover:grayscale-0 mb-3"
                    />
                    <span className="text-amber-400/70 text-sm font-medium mt-2">{logo.alt}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturesBlocks;