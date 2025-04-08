import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import FeatureCard from '../components/FeatureCard';

// Define the tabs data
const tabsData = [
  {
    name: "Private Equity",
    content: [
      {
        title: "IC Memo Generation",
        description: "Generate investment committee memos faster with detailed information pulled from CIMs, VDRs, and previous deal memos."
      },
      {
        title: "Due Diligence",
        description: "Respond to ad-hoc due diligence queries using financials, legal documents, expert network calls, broker research, and analyst reports."
      },
      // Other commented content remains the same
    ]
  },
// Private Credit section (commented out)
  {
    name: "Asset Management",
    content: [
      {
        title: "Investment Thesis Generation",
        description: "Automatically generate investment theses from market data, financial reports, and historical deal data to support decision-making."
      },
      {
        title: "Risk Assessment + Portfolio Monitoring",
        description: "Continuously assess risk and monitor portfolio performance, leveraging market data and financial health indicators to detect early signs of trouble."
      },
      {
        title: "Market + Competition Analysis",
        description: "Instantly analyze competitors and market trends using data from millions of sources, enabling faster and more informed investment decisions."
      }
    ]
  },
  {
    name: "Investment Banks",
    content: [
      {
        title: "Research Report Generation",
        description: "Generate detailed research reports from financial statements, market data, and analyst notes to support trading and investment decisions."
      },
      {
        title: "Deal Comparison + M&A Provisions",
        description: "Compare deals and M&A provisions to identify the most advantageous transactions, ensuring better strategic outcomes."
      },
      {
        title: "Risk + Controversy Monitoring",
        description: "Monitor financial, regulatory, and reputational risks across counterparties in real-time to stay ahead of potential issues."
      }
    ]
  }
];

const FeaturesAndOptions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const nextTab = useCallback(() => {
    if (isAutoScrolling) {
      setActiveTab((prev) => (prev + 1) % tabsData.length);
    }
  }, [isAutoScrolling]);

  useEffect(() => {
    const interval = setInterval(nextTab, 5000);
    return () => clearInterval(interval);
  }, [isAutoScrolling, nextTab]);

  return (
    <div className="bg-[#090909] py-8 px-4 sm:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section - Responsive text sizes */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 leading-tight mb-2 sm:mb-3 px-2">
            It's your business. Quanfia gets it.
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto px-2">
            We leveraged our deep bench of expertise in finance and AI to automate complex workflows and eliminate manual knowledge work by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100"> 80% or more</span>.
          </p>
        </div>

        {/* Mobile Dropdown for Tab Selection */}
        {isMobile && (
          <div className="mb-6">
            <select 
              value={activeTab}
              onChange={(e) => {
                setActiveTab(Number(e.target.value));
                setIsAutoScrolling(false);
              }}
              className="w-full p-3 bg-[#111827] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {tabsData.map((tab, index) => (
                <option key={index} value={index}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Desktop/Tablet Tabs Header */}
        {!isMobile && (
          <div className="mb-6 sm:mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 sm:space-x-4 md:space-x-8 pb-2 min-w-max justify-start sm:justify-center">
              {tabsData.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setIsAutoScrolling(false);
                  }}
                  onMouseEnter={() => setIsAutoScrolling(false)}
                  onMouseLeave={() => setIsAutoScrolling(true)}
                  className={`relative px-2 sm:px-4 py-1 text-base sm:text-lg transition-all duration-300 whitespace-nowrap ${
                    activeTab === index
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-yellow-400 font-semibold'
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {tab.name}
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform transition-transform duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid with Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-h-none sm:max-h-[50vh] overflow-y-auto sm:overflow-hidden sm:pr-2">
          {tabsData[activeTab].content.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Mobile Pagination Indicator */}
        {isMobile && (
          <div className="flex justify-center space-x-2 mt-4">
            {tabsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setIsAutoScrolling(false);
                }}
                className={`w-2 h-2 rounded-full ${
                  activeTab === index ? 'bg-blue-400' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Define PropTypes for the components (removed duplicate)
FeaturesAndOptions.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        })
      ).isRequired
    })
  )
};

export default FeaturesAndOptions;