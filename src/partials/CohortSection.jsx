import { useState } from 'react';

export default function CohortsSection() {
  const cohorts = [
    {
      id: 1,
      title: "Full Stack Data Science 1.0",
      description: "From Python basics to project deployment",
      startDate: "April 12, 2025",
      duration: "6 months",
      price: 6999,
      originalPrice: 8999,
      discount: 22,
      tags: ["Python", "TensorFlow", "Pandas", "+1"],
      liveBatch: true,
      videoId: "Kjd-SWpe1do?si=A99ra0qaFWFXSmHu" // Data Science video
    },
    {
      id: 2,
      title: "GenAI with Python | Concept to deployment",
      description: "Development side of AI application",
      startDate: "April 7, 2025",
      duration: "1-2 months",
      price: 4999,
      originalPrice: 7999,
      discount: 38,
      tags: ["Python", "LLMs", "Transformers", "+1"],
      liveBatch: true,
      videoId: "VNb_LawBBWU?si=94HJqahK95Hg-NBd" // AI/ML video
    },
    {
      id: 3,
      title: "DevOps for developers 1.0",
      description: "Perfect guide to get started with DevOps",
      startDate: "April 15, 2025",
      duration: "1-2 months",
      price: 4999,
      originalPrice: 7999,
      discount: 38,
      tags: ["Docker", "Kubernetes", "CI/CD", "+1"],
      liveBatch: true,
      videoId: "oBLpqSHc3lA?si=IRCHOFEnHgHqzkkP" 
    }
  ];

  return (
    <div className="bg-[#000001] text-gray-300 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-amber-300 mb-2">Cohorts</h1>
        <p className="text-center text-lg mb-10">Live training classes</p>
        <div className="relative">
          <div className="border-t-2 border-amber-500 w-16 absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cohorts.map((cohort) => (
            <CohortCard key={cohort.id} cohort={cohort} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CohortCard({ cohort }) {

   // Define URLs for each cohort
   const cohortURLs = {
    1: "https://courses.chaicode.com/learn/batch/about?bundleId=227817",
    2: "https://courses.chaicode.com/learn/batch/about?bundleId=227321",
    3: "https://courses.chaicode.com/learn/batch/about?bundleId=227963"
  };

  const handleLearnMoreClick = () => {
    // Get the specific URL for this cohort, or fall back to the general cohorts page
    const url = cohortURLs[cohort.id] || "https://courses.chaicode.com/learn/view-all?show=batch&type=17";
    window.location.href = url;
  };
  return (
    <div className="bg-[#0B0C1F] rounded-lg overflow-hidden border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500">
      <div className="relative">
        {/* Embedded YouTube Video using specific video ID for each course */}
        <iframe
          className="w-full h-48"
          src={`https://www.youtube.com/embed/${cohort.videoId}`}
          title={cohort.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />

        {/* Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {cohort.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-800 rounded-md text-xs border border-gray-700">
              {tag}
            </span>
          ))}
        </div>

        {/* Live Batch Indicator */}
        {cohort.liveBatch && (
          <div className="absolute top-2 left-2 flex items-center bg-gray-900/70 px-2 py-1 rounded-md">
            <div className="h-2 w-2 rounded-full bg-red-500 mr-1 animate-pulse"></div>
            <span className="text-xs text-white">LIVE</span>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Title and Description */}
        <h3 className="font-bold text-lg mb-1 text-amber-300">{cohort.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{cohort.description}</p>

        {/* Start Date and Duration */}
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-6">
            <svg className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 110-2h2V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-400">Starts {cohort.startDate}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-400">{cohort.duration}</span>
          </div>
        </div>

        {/* Love Indicator */}
        <div className="flex items-center mb-3">
          <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-gray-400">We ❤️ code</span>
        </div>

        {/* Price and Discount */}
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-xl font-bold text-amber-300">{cohort.price} INR</span>
            <div className="flex items-center">
              <span className="text-xs text-gray-500 line-through mr-2">{cohort.originalPrice} INR</span>
              <span className="text-xs text-amber-500">Save {cohort.discount}%</span>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded text-center transition duration-300"
        onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
    </div>
  );
}