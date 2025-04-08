import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "This is the first time I've seen AI truly deliver in asset management. It works surprisingly well and produces real, tangible results.",
    author: "Portfolio manager, a Top 10 asset management firm by AUM",
  },
  {
    quote:
      "Having these reports pre-written is a huge advantage. Our analysts can spend less time gathering information and more time developing insightful conclusions.",
    author: "Head of ESG, a Top 5 wealth management firm",
  },
  {
    quote:
      "For the credit pre diligence side, Quanfia suits our needs quite well. Before, we were dealing with a lot of false positives and false negatives, and missing important information.",
    author: "Head of Sustainability, private equity firm with $30B+ in AUM",
  },
  {
    quote:
      "Quanfia's unknown unknowns add a valuable thematic and local feel to our EM portfolios with a global footprint — without requiring us to search.",
    author: "Kunjal Gala, Head of Emerging Markets, Federated Hermes",
  },
  {
    quote:
      "When it comes to tracking underreported small cap company developments and risks, Quanfia is our go-to solution.",
    author: "Paul Jourdan, Portfolio Manager, Amati Global Partners",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <div className="bg-[#0B0D1F] flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 leading-tight mb-10 text-center">
          Our Clients Speak
        </h2>
        <Slider {...settings}>
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
    </div>
  );
};


export default TestimonialsSlider;