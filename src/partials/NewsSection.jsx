import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import infoworldLogo from "../images/infoworld-logo.svg";
import environmentFinanceLogo from "../images/enviroment-finance-logo.svg";
// import financialTimesLogo from "../images/financial-times-logo";
import TechCrunchLogo from "../images/techcrunch-logo.svg";


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
        <section className="bg-[#070916] py-12">
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

export default NewsSection;