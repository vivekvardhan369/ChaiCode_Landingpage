import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import all necessary Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import singaporeLogo from "../images/SingaporeLogo.svg";
import middleEast from "../images/MiddleEast.svg";

const logos = [
  { src: singaporeLogo, alt: "Singapore based multi family office", width: 157, height: 32 },
  { src: middleEast, alt: "Middle East Investment Firm", width: 128, height: 20 },
];

const testimonials = [
  {
    quote:
      "Having these reports prepared in advance is a significant benefit. Our analysts can dedicate more time to developing insightful conclusions rather than gathering information.",
    author: "Singapore based multi family office",
  },
  {
    quote:
      "Quanfia effectively meets our credit pre-diligence needs. Previously, we encountered multiple false signals, as well as missing crucial information.",
    author: "Middle East based multi family office",
  }
];

const FeaturesBlocks = () => {
  // Create many more duplicates to ensure continuous flow
  const extendedLogos = Array(10).fill(logos).flat();

  // For logos - make sure Autoplay module is properly configured
  const swiperSettings = {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 5000,
    loop: true,
    loopFillGroupWithBlank: true,
    loopAdditionalSlides: 10,
    slidesPerView: 'auto',
    spaceBetween: 60,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
    grabCursor: false,
  };

  // For testimonials
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1081,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // ADDED THE RETURN STATEMENT THAT WAS MISSING
  return (
    <section className="bg-[#0B0D1F] flex flex-col items-center justify-center py-0 px-4 overflow-hidden">
      {/* Logo Section */}
      <div className="hero__logo-wrap flex flex-col items-center justify-center py-8 w-full">
        <div className="hero__lg-cnt text-center mb-6">
          <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
            Our students are not only working in big tech companies but are now founders of funded startups and product creators.
          </p>
        </div>
        
        {/* Logo Marquee with Swiper */}
        <div className="hero__lg-list w-full overflow-hidden relative">
          <div className="max-w-5xl mx-auto">
            <Swiper
              {...swiperSettings}
              className="logo-swiper py-4"
              wrapperClass="items-center"
            >
              {extendedLogos.map((logo, index) => (
                <SwiperSlide 
                  key={index} 
                  className="swiper-slide" 
                  style={{ width: 'auto' }}
                >
                  <div className="flex items-center justify-center px-6">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width * 2.5}
                      height={logo.height * 2.5}
                      className="h-auto max-h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      {/* <div className="flex items-center justify-center w-full py-8">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 leading-tight mb-10 text-center">
            Our Clients Speak
          </h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8">
                <p className="text-2xl text-white leading-relaxed mb-4">"{testimonial.quote}"</p>
                <span className="block mt-6 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  {testimonial.author}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
    </section>
  );
};

export default FeaturesBlocks;
