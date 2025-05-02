import { useState } from 'react';
import hcImage from "../images/hc-profile.png"; // Update with the correct path to the image

export default function ChaiCodeSection() {
  const features = [
    {
      title: "Comprehensive Curriculum",
      description: "Master full-stack web development fundamentals. Learn what truly matters, the right way, through practical, job-ready project work."
    },
    {
      title: "You finish it",
      description: "Our cohorts are a collaborative journey. Students keep together, stay motivated, share questions, struggles, and celebrate wins jointly."
    },
    {
      title: "Industry Guests",
      description: "We're connected with industry experts and regularly invite them to share insights, engage, talk, and answer questions with students."
    },
    {
      title: "Code and Chill",
      description: "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and feel normal."
    },
    {
      title: "Improve Communication",
      description: "Software development is collaborative. Learn through practice. Our peer reviews make it happen where you review work, share and gain expertise."
    },
    {
      title: "Bounties",
      description: "Stay ahead compared with posting each stride and being rewarded with exclusive privileges and badges, promoting the consistent habit while studying."
    }
  ];

  const approachItems = ["Project-based courses", "Peer reviews", "Live doubts", "Fun activities"];

  return (
    <section className="bg-[#000001] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-300">But Why ChaiCode?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ChaiCode exists because we love tech and teaching
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
            <FeatureCard feature={features[2]} />
          </div>

          {/* Middle Column - Profile */}
          <div className="flex flex-col gap-6">
            <div className="border-2 border-gray-700 rounded-lg p-6 w-full bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500 h-auto">
              <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center">
                <img 
                  src={hcImage}
                  alt="Hitesh Choudhary" 
                  className="rounded-full mb-4 w-28 h-28 object-cover border-2 border-amber-500"
                />
                <h3 className="text-2xl font-bold text-amber-300 mb-2">Hitesh Choudhary</h3>
                <p className="text-sm text-center leading-relaxed text-gray-400">
                  @drifted from corporate and full time job holder, A founder of LCO (ineuron.ai), CTO & Co-Founder at PWskills.com, creator of Chai & React. Helped folks 43 countries+
                </p>
              </div>
            </div>

            {/* Approach Section */}
            <div className="border-2 border-gray-700 rounded-lg p-6 w-full bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500 h-auto">
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Approach</h3>
              <p className="text-base mb-6 text-gray-400">
                Project based courses with peer reviews and doubts with fun activities
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                {approachItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="h-16 border-2 border-gray-700 bg-gray-900 rounded-lg flex items-center justify-center text-xs font-medium text-center px-3 text-amber-300 hover:bg-gray-800 transition-all hover:border-amber-500"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <FeatureCard feature={features[3]} />
            <FeatureCard feature={features[4]} />
            <FeatureCard feature={features[5]} />
          </div>
        </div>

        {/* Join Button */}
        <div className="flex justify-center mt-10">
          <button className="px-8 py-4 bg-amber-500 text-black text-lg font-medium rounded-md hover:bg-amber-600 transition-all shadow-lg transform hover:-translate-y-1"
          onClick={() => {
            window.location.href = "https://courses.chaicode.com/learn/view-all?show=batch&type=17";
          }}>
            Join Cohorts Live Classes
          </button>
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ feature }) {
  return (
    <div className="border-2 border-gray-700 rounded-lg p-6 bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500 h-full">
      <h3 className="text-xl font-bold mb-3 text-amber-300">{feature.title}</h3>
      <p className="text-base text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  );
}