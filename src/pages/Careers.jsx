import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom"; // Add this import
import network from "../images/network.svg";
import control from "../images/control.svg";
import reward from "../images/reward.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import infoworldLogo from "../images/infoworld-logo.svg";
import environmentFinanceLogo from "../images/enviroment-finance-logo.svg";
// import financialTimesLogo from "../images/financial-times-logo";
import TechCrunchLogo from "../images/techcrunch-logo.svg";


const HeroSection = () => {
  return (
    <section className="relative bg-[#0B0D1F] text-white py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
  {/* Background Overlays - Using proper layering */}
  <div className="absolute inset-0">
    <div 
      className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 sm:opacity-30"
      style={{ 
        backgroundImage: "url('../images/hero-bg-v1.svg')",
        backgroundSize: "cover" 
      }}
    ></div>
    <div 
      className="absolute inset-0 bg-no-repeat bg-cover bg-center mix-blend-overlay opacity-25 sm:opacity-40"
      style={{ 
        backgroundImage: "url('../images/about-bnr-bg.svg')",
        backgroundSize: "cover"
      }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#070916] to-[#0B0D1F] opacity-60"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="flex flex-col items-center text-center">
      {/* Responsive container with better scaling */}
      <div className="w-full sm:w-5/6 md:w-4/5 lg:w-2/3 max-w-4xl">
        {/* Responsive heading with better font size scaling */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Let's bring meaning, fulfillment, and joy back to finance work — together.
        </h1>

        {/* Responsive paragraph with proper spacing */}
        <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4 px-0 sm:px-4 leading-relaxed">
          We're using AI agents and retrieval augmented generation (RAG) to automate complex 
          knowledge-intensive workflows — and change how finance work gets done.
        </p>

        {/* Responsive button container with improved mobile layout */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-8 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <Link
            to="/about"
            className="w-full sm:w-auto px-6 py-3 bg-transparent border border-[#FFC038] text-[#FFC038] font-medium rounded-md shadow-md hover:bg-[#FFC038] hover:text-[#0B0D1F] transition duration-300 text-center"
          >
            Learn about Quanfia
          </Link>
          {/* Uncomment when needed
          <a
            href="#open-position"
            className="w-full sm:w-auto px-6 py-3 bg-[#7C8AFF] hover:bg-blue-600 text-white font-medium rounded-md shadow-md transition duration-300 text-center"
          >
            See open positions
          </a> */}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

// Add more sections here

const WhyWorkAtQuanfia = () => {
  const benefits = [
    {
      title: "Make your mark",
      description: [
        "We move fast at Quanfia, and so will you! Immediately see the impact of your work.",
        "Be a part of one of the hottest fintech startups innovating in the fastest-growing space.",
      ],
      icon: network, // Update path
      alt: "network",
    },
    {
      title: "Be in control",
      description: [
        "You will have the freedom to shape the work you do and how we solve hard problems.",
        "The work you do at Quanfia will help you master a variety of in-demand skills.",
      ],
      icon: control, // Update path
      alt: "control",
    },
    {
      title: "Enjoy growing rewards",
      description: [
        "Earn competitive compensation (salary, options, health insurance).",
        "Collaborate with some of the best engineers and technologists.",
      ],
      icon: reward, // Update path
      alt: "reward",
    },
  ];

return (
    <section className="bg-gradient-to-r bg-[#0F1125]  text-white py-16 px-4">
        <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Why work at Quanfia?</h2>
        <h5 className="text-lg md:text-xl mt-2 text-gray-300">
          Quanfia is where speed meets impact.
        </h5>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0C0C20] text-[#FFCB38] p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={benefit.icon}
                alt={benefit.alt}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <ul className="mt-3 text-white text-sm space-y-2">
                {benefit.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                     {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const OpenPositions = () => {
  const positions = [
    {
      title: "AI Engineer",
      location: "Hyderabad, India",
      link: "",
    },
    {
      title: "Cloud Engineer",
      location: "Hyderabad, India",
      link: "",
    },
    {
      title: "Machine Learning Engineer",
      location: "Hyderabad, India",
      link: "",
    },
  ];

  return (
    <section id="open-position" className="bg-gradient-to-r from-[#464883] to-gray-900 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-[#171937] text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <h4 className="text-xl font-semibold">{position.title}</h4>
              <span className="text-gray-600 mt-2">{position.location}</span>
              <a
                href={position.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Position
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
    const articles = [
        {
            logo: infoworldLogo,
            alt: "InfoWorld Logo",
            title: "How RAG completes the generative AI puzzle",
            link: "https://www.infoworld.com/article/3715324/how-rag-completes-the-generative-ai-puzzle.html",
        },
        {
            logo: environmentFinanceLogo,
            alt: "Environment Finance Logo",
            title: "Will AI be transformative for ESG data?",
            link: "https://www.environmental-finance.com/content/analysis/will-ai-be-a-game-changer-for-esg-data.html",
        },
        {
            logo: TechCrunchLogo,
            alt: "TechCrunch Logo",
            title: "Why last week felt like 2021 in fintech",
            link: "https://techcrunch.com/2023/11/05/the-return-of-mega-rounds-in-fintech-and-where-all-the-former-mint-users-are-headed/",
        },
        {
            logo: environmentFinanceLogo,
            alt: "InfoWorld Logo",
            title: "How RAG completes the generative AI puzzle",
            link: "https://www.infoworld.com/article/3715324/how-rag-completes-the-generative-ai-puzzle.html",
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-[#111326] py-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white">
                        Recognized leadership in AI for financial services
                    </h2>
                </div>
                <div className="news-carousel">
                    <Slider {...settings}>
                        {articles.map((article, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-gradient-to-b from-[#111326] to-[#060712] p-6 rounded-lg shadow-md">
                                    <div className="flex items-center justify-center h-16 mb-4">
                                        <img
                                            src={article.logo}
                                            alt={article.alt}
                                            className="h-full w-auto object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/150x50?text=Logo';
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {article.title}
                                    </h3>
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#7C8AFF] hover:text-blue-400 flex items-center"
                                    >
                                        Read Article
                                        <span className="ml-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};





// Main Careers component
const Careers = () => {
  return (
    <>
       <Helmet>
        <title>Careers</title>
        <meta name="description" content="Explore career opportunities at Quanfia. Join our team of experts in finance, AI, and technology to transform the financial services industry." />
      </Helmet>
      <HeroSection />
      <WhyWorkAtQuanfia />
        <OpenPositions />
        {/* <NewsSection /> */}
    </>
  );
};

export default Careers;