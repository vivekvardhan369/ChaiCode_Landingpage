import React, { useState } from "react";
import PropTypes from "prop-types";
import { 
  Terminal, Zap, DollarSign, Cloud, Network, HelpCircle, 
  RefreshCw, Heart, ChevronLeft, ChevronRight 
} from "lucide-react";
import { cn } from "../lib/utils"; // Adjust if needed

const FeatureComparisonSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: "New Deal Screen", before: "10 Hours", after: "5 Minutes" },
    { title: "Credit Memo",  before: "5 - 7 Days", after: "20 Minutes" },
    { title: "Investment Committee Memos",  before: "12 - 40 Hours", after: "20 Minutes" },
    { title: "Credit Portfolio Reviews", subTitle: "For a Global PE firm with $180B+ AUM", before: "20 Hours/month", after: "30 Minutes" }
  ];

  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-gradient-to-b from-[#373969] to-black text-white min-h-screen flex flex-col items-center justify-center p-5">
      {/* Feature Comparison */}
      <div className="text-center p-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl max-w-2xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Liberate your brightest minds.</h2>
        <p className="text-lg text-gray-600">
          Finance professionals waste <strong className="text-blue-600">~80%</strong> of their time on
          manual, time-consuming research, monitoring, and reporting tasks.
        </p>

        {/* Slider */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg" onClick={prevSlide}>
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="bg-white p-8 rounded-xl shadow-lg w-96 transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">{slides[currentIndex].title}</h3>
            <h5 className="text-md text-gray-600 mb-6">{slides[currentIndex].subTitle}</h5>

            <div className="flex items-center justify-around mt-4 gap-4">
              <div className="p-4 bg-red-50 rounded-lg flex-1 transform transition hover:scale-105">
                <p className="text-sm text-red-600 mb-1">Before</p>
                <h3 className="text-xl font-bold text-red-700">{slides[currentIndex].before}</h3>
              </div>
              <div className="text-lg font-bold text-gray-400">VS</div>
              <div className="p-4 bg-green-50 rounded-lg flex-1 transform transition hover:scale-105">
                <p className="text-sm text-green-600 mb-1">After</p>
                <h4 className="text-xl font-bold text-green-700">{slides[currentIndex].after}</h4>
              </div>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg" onClick={nextSlide}>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Feature List */}
      <FeaturesSectionWithHoverEffects />
    </section>
  );
};

// Features Section
export function FeaturesSectionWithHoverEffects() {
  const features = [
    { title: "Built for developers", description: "Engineers, dreamers, doers.", icon: Terminal },
    { title: "Ease of use", description: "As easy as using an Apple.", icon: Zap },
    { title: "Pricing like no other", description: "Best prices. No credit card required.", icon: DollarSign },
    { title: "100% Uptime", description: "Cannot be taken down.", icon: Cloud },
    { title: "Multi-tenant Architecture", description: "Share passwords instead of buying seats.", icon: Network },
    { title: "24/7 Support", description: "Our AI agents are always available.", icon: HelpCircle },
    { title: "Money-back Guarantee", description: "We will convince you to stay.", icon: RefreshCw },
    { title: "And everything else", description: "I ran out of copy ideas!", icon: Heart }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

// Feature Card Component
const Feature = ({ title, description, icon: Icon, index }) => {
  return (
    <div className={cn(
      "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
      (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
      index < 4 && "lg:border-b dark:border-neutral-800"
    )}>
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Icon className="h-8 w-8" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">{title}</span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  index: PropTypes.number.isRequired,
};

export default FeatureComparisonSlider;
