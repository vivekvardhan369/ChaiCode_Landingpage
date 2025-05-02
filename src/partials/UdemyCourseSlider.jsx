import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace with your actual Udemy logo path
import udemyLogo from '../images/udemy-logo.jpg';

const courses = [
  {
    title: "Complete Web Development Course",
    description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: "4.7",
    tag: "Top Rated",
    price: "₹399",
    originalPrice: "₹3,099",
    discount: "87% off",
    hours: "16+ total hours",
    lectures: "112 lectures",
    level: "All Levels"
  },
  {
    title: "GenAI with Python | Concept to Deployment",
    description: "Learn the development side of AI applications with Python, LLMs, and Transformers.",
    rating: "4.8",
    tag: "Trending",
    price: "₹499",
    originalPrice: "₹2,499",
    discount: "80% off",
    hours: "20+ total hours",
    lectures: "150 lectures",
    level: "Intermediate"
  },
  {
    title: "DevOps for Developers 1.0",
    description: "Perfect guide to get started with DevOps. Covers Docker, Kubernetes, CI/CD, and more.",
    rating: "4.6",
    tag: "Best Seller",
    price: "₹599",
    originalPrice: "₹2,999",
    discount: "80% off",
    hours: "18+ total hours",
    lectures: "130 lectures",
    level: "Advanced"
  }
];

const UdemyCourseSlider = () => {
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
        breakpoint: 1280,
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
    ],
  };

  const renderStars = () => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black w-full py-12 px-4">
      {/* Udemy Logo and Text */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-300">Udemy</h1>
        <p className="text-sm text-gray-400">
          Not only in India, we are global leaders in tech education
        </p>
      </div>

      {/* Course slider */}
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div key={index} className="px-2">
              {/* Card styled to match the image */}
              <div className="border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-black flex flex-col md:flex-row">
                {/* Left content - Updated to match the image */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-3xl mb-3 text-white">{course.title}</h3>
                    <p className="text-base text-gray-300 mb-6">{course.description}</p>
                  </div>
                  
                  <div>
                    {/* Rating with stars */}
                    <div className="flex items-center mb-6">
                      <span className="text-5xl font-bold text-white mr-3">{course.rating}</span>
                      <div className="flex flex-col">
                        {renderStars()}
                        <span className="text-sm text-gray-400">{course.tag}</span>
                      </div>
                    </div>
                    
                    {/* Price section */}
                    <div className="mb-6">
                      <div className="flex items-center">
                        <span className="font-bold text-3xl text-amber-500">{course.price}</span>
                        <span className="text-gray-500 line-through text-sm ml-3">{course.originalPrice}</span>
                        <span className="ml-3 bg-amber-900/50 text-amber-500 px-2 py-1 text-sm rounded">{course.discount}</span>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <div>
                      <button className="px-8 py-3 bg-amber-500 text-black text-lg font-medium rounded hover:bg-amber-600"
                      onClick={() => {
                        window.location.href = "https://www.udemy.com/course/web-dev-master/?couponCode=CHAISUMMER1";
                      }}>
                        Check Udemy Courses
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right content with Udemy logo - Keep unchanged */}
                <div className="bg-gray-900 p-4 flex flex-col justify-between w-full md:w-64">
                  {/* Udemy Logo as Course Image */}
                  <div className="mb-4">
                    <div className="bg-gray-800 h-38 rounded relative flex items-center justify-center">
                      <img src={udemyLogo} alt="Udemy Logo" className="w-22 h-22" />
                    </div>
                  </div>
                  
                  {/* Price and buttons */}
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="font-bold text-amber-300">{course.price}</span>
                      <span className="text-gray-500 line-through text-sm ml-2">{course.originalPrice}</span>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full py-2 bg-amber-500 text-black text-sm font-medium rounded hover:bg-amber-600"
                       onClick={() => {
                        window.location.href = "https://www.udemy.com/course/web-dev-master/?couponCode=CHAISUMMER1";
                      }}>
                        Add to cart
                      </button>
                      <button className="w-full py-2 border border-gray-700 text-sm font-medium rounded hover:bg-gray-800 hover:text-white"
                       onClick={() => {
                        // Redirect to the login page
                        window.location.href = "https://www.udemy.com/course/web-dev-master/?couponCode=CHAISUMMER1";
                      }}>
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UdemyCourseSlider;