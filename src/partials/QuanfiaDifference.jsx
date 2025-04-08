{/* 
  
import React, { useState, useEffect } from 'react';
import { Pie, Cell, PieChart as RechartsChart } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Database, CheckCircle, Timer, DollarSign, Settings } from 'lucide-react';

const QuanfiaDifference = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      name: 'Unstructured Data',
      value: 16.67,
      color: '#60A5FA',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Create detailed reports from raw data'
    },
    {
      name: 'Multiple Sources',
      value: 16.67,
      color: '#93C5FD',
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Reduce costs with multiple data sources'
    },
    {
      name: 'Accuracy',
      value: 16.67,
      color: '#BFDBFE',
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Obtain thorough, accurate outputs'
    },
    {
      name: 'Real-time',
      value: 16.67,
      color: '#3B82F6',
      icon: <Timer className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Get instant results with real-time processing'
    },
    {
      name: 'ROI',
      value: 16.67,
      color: '#2563EB',
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Experience immediate ROI'
    },
    {
      name: 'Customization',
      value: 16.67,
      color: '#1D4ED8',
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Customize workflows for your needs'
    }
  ];

  // Dynamic base chart size that adapts to screen size
  const getChartDimensions = () => {
    if (typeof window !== 'undefined') {
      // Screen size breakpoints
      if (window.innerWidth < 640) return { // Mobile
        baseSize: 280,
        innerRadius: 50,
        outerRadius: 120,
        iconRadius: 160,
        centerWidth: activeIndex !== null ? '170px' : '140px',
        centerHeight: activeIndex !== null ? '120px' : '100px',
      };
      else if (window.innerWidth < 768) return { // Small tablets
        baseSize: 350,
        innerRadius: 65, 
        outerRadius: 140,
        iconRadius: 200,
        centerWidth: activeIndex !== null ? '180px' : '150px',
        centerHeight: activeIndex !== null ? '130px' : '110px',
      }
      else if (window.innerWidth < 1024) return { // Tablets
        baseSize: 400,
        innerRadius: 75,
        outerRadius: 160,
        iconRadius: 220,
        centerWidth: activeIndex !== null ? '190px' : '160px',
        centerHeight: activeIndex !== null ? '130px' : '120px',
      }
      else return { // Desktop
        baseSize: 450,
        innerRadius: 90,
        outerRadius: 180,
        iconRadius: 250,
        centerWidth: activeIndex !== null ? '220px' : '150px',
        centerHeight: activeIndex !== null ? '150px' : '140px',
      }
    }
    
    // Default fallback values
    return {
      baseSize: 350,
      innerRadius: 70,
      outerRadius: 140,
      iconRadius: 200,
      centerWidth: activeIndex !== null ? '180px' : '150px',
      centerHeight: activeIndex !== null ? '130px' : '110px',
    };
  };

  const [dimensions, setDimensions] = useState(getChartDimensions());
  
  // Update dimensions when window resizes
  useEffect(() => {
    const handleResize = () => {
      setDimensions(getChartDimensions());
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);
  
  // Scale factor for the chart when hovering
  const chartScale = activeIndex !== null ? 1.1 : 1.0;

  return (
    <section className="relative bg-[#0B0D1F] py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A3F] to-[#0B0D1F] opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 mb-4 sm:mb-6">
            The Quanfia Advantage
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            We blend financial expertise with AI innovation to empower you to excel.
          </p>
        </div>
        
        <div className="flex justify-center">
          {/* Mobile card view for very small screens
          <div className="block sm:hidden w-full">
            <div className="grid grid-cols-2 gap-3">
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#1A2649]/70 p-4 rounded-lg shadow-lg transition-all border border-blue-900/30"
                >
                  <div className="flex justify-center mb-3">
                    <div className={`p-2 rounded-full`} style={{backgroundColor: item.color + '33'}}>
                      <div className="text-blue-300">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive chart for larger screens 
          <div className="hidden sm:block relative aspect-square w-full max-w-[500px]">
            <AnimatePresence>
              {isLoaded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      scale: chartScale
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                    style={{
                      width: dimensions.baseSize,
                      height: dimensions.baseSize,
                      transformOrigin: 'center'
                    }}
                  >
                    <RechartsChart 
                      width={dimensions.baseSize} 
                      height={dimensions.baseSize}
                    >
                      <Pie
                        data={data}
                        cx={dimensions.baseSize / 2}
                        cy={dimensions.baseSize / 2}
                        innerRadius={dimensions.innerRadius}
                        outerRadius={dimensions.outerRadius}
                        paddingAngle={2}
                        dataKey="value"
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        animationBegin={0}
                        animationDuration={1000}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            className="transition-all duration-300"
                            style={{
                              transform: `scale(${activeIndex === index ? 1.08 : 1.02})`,
                              transformOrigin: 'center',
                            }}
                          />
                        ))}
                      </Pie>
                    </RechartsChart>
                    
                    {/* Enhanced center content with dynamic sizing 
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-[#0B0D1F] bg-opacity-80 rounded-full shadow-lg backdrop-blur-sm border border-blue-900/30"
                      animate={{ 
                        width: dimensions.centerWidth,
                        height: dimensions.centerHeight,
                        padding: activeIndex !== null ? '1rem sm:1.2rem' : '0.5rem sm:1rem'
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={{ 
                          scale: activeIndex !== null ? 1.05 : 1.0
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-center h-full"
                      >
                        <h3 className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mb-1 sm:mb-2 ${activeIndex !== null ? 'text-base sm:text-xl' : 'text-sm sm:text-lg'}`}>
                          {activeIndex !== null ? data[activeIndex].name : 'Quanfia'}
                        </h3>
                        <p className={`text-white leading-snug mx-auto ${activeIndex !== null ? 'text-xs sm:text-base' : 'text-xs'}`}>
                          {activeIndex !== null ? data[activeIndex].description : 'Hover to learn more'}
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* Labels with adjusted positions 
                    {data.map((entry, index) => {
                      // Calculate angle for each segment (60 degrees per segment in a 6-segment pie)
                      const angle = (index * 60) + 30; // 30 degrees offset to position in middle of segment
                      
                      // Convert to radians for math calculations
                      const rad = (Math.PI * angle) / 180;
                      
                      // Calculate position around the circle with dynamic radius
                      const x = dimensions.baseSize / 2 + dimensions.iconRadius * Math.cos(rad);
                      const y = dimensions.baseSize / 2 + dimensions.iconRadius * Math.sin(rad);

                      return (
                        <motion.div
                          key={`label-${index}`}
                          className="absolute"
                          animate={{
                            scale: activeIndex === index ? 1.2 : 1.0,
                            opacity: activeIndex === null || activeIndex === index ? 1 : 0.4
                          }}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            left: x,
                            top: y,
                            transform: 'translate(-50%, -50%)',
                          }}
                          onMouseEnter={() => setActiveIndex(index)}
                          onMouseLeave={() => setActiveIndex(null)}
                        >
                          <div className="flex items-center justify-center bg-[#1A2649] border border-blue-900/30 rounded-full p-1.5 sm:p-2 shadow-md text-blue-300">
                            {entry.icon}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuanfiaDifference;
  
  */}

import React, { useState, useEffect } from 'react';
import { Pie, Cell, PieChart as RechartsChart } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Database, CheckCircle, Timer, DollarSign, Settings } from 'lucide-react';

const QuanfiaDifference = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      name: 'Unstructured Data',
      value: 16.67,
      color: '#60A5FA',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Create detailed reports from raw data'
    },
    {
      name: 'Multiple Sources',
      value: 16.67,
      color: '#93C5FD',
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Reduce costs with multiple data sources'
    },
    {
      name: 'Accuracy',
      value: 16.67,
      color: '#BFDBFE',
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Obtain thorough, accurate outputs'
    },
    {
      name: 'Real-time',
      value: 16.67,
      color: '#3B82F6',
      icon: <Timer className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Get instant results with real-time processing'
    },
    {
      name: 'ROI',
      value: 16.67,
      color: '#2563EB',
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Experience immediate ROI'
    },
    {
      name: 'Customization',
      value: 16.67,
      color: '#1D4ED8',
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: 'Customize workflows for your needs'
    }
  ];

  const getChartDimensions = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return {
        baseSize: 280,
        innerRadius: 50,
        outerRadius: 120,
        iconRadius: 160,
        labelRadius: 90
      };
      else if (window.innerWidth < 768) return {
        baseSize: 350,
        innerRadius: 65, 
        outerRadius: 140,
        iconRadius: 200,
        labelRadius: 110
      }
      else if (window.innerWidth < 1024) return {
        baseSize: 400,
        innerRadius: 75,
        outerRadius: 160,
        iconRadius: 220,
        labelRadius: 130
      }
      else return {
        baseSize: 400,
        innerRadius: 90,
        outerRadius: 180,
        iconRadius: 220,
        labelRadius: 120
      }
    }
    
    return {
      baseSize: 350,
      innerRadius: 70,
      outerRadius: 140,
      iconRadius: 200,
      labelRadius: 110
    };
  };

  const [dimensions, setDimensions] = useState(getChartDimensions());
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions(getChartDimensions());
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative bg-[#0B0D1F] py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A3F] to-[#0B0D1F] opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 mb-4 sm:mb-6">
            The Quanfia Advantage
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            We blend financial expertise with AI innovation to empower you to excel.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="block sm:hidden w-full">
            <div className="grid grid-cols-2 gap-3">
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#1A2649]/70 p-4 rounded-lg shadow-lg transition-all border border-blue-900/30"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-full" style={{backgroundColor: item.color + '33'}}>
                      <div className="text-blue-300">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:block relative aspect-square w-full max-w-[500px]">
            <AnimatePresence>
              {isLoaded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <motion.div
                    className="relative"
                    style={{
                      width: dimensions.baseSize,
                      height: dimensions.baseSize
                    }}
                  >
                    <RechartsChart 
                      width={dimensions.baseSize} 
                      height={dimensions.baseSize}
                    >
                      <Pie
                        data={data}
                        cx={dimensions.baseSize / 2}
                        cy={dimensions.baseSize / 2}
                        innerRadius={dimensions.innerRadius}
                        outerRadius={dimensions.outerRadius}
                        paddingAngle={2}
                        dataKey="value"
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        animationBegin={0}
                        animationDuration={1000}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            className="transition-all duration-300"
                            style={{
                              filter: activeIndex === index ? 'brightness(1.2)' : 'brightness(1)',
                              transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                              transformOrigin: 'center',
                            }}
                          />
                        ))}
                      </Pie>
                    </RechartsChart>

                    {/* Icons positioned around the pie chart */}
                    {data.map((entry, index) => {
                      // Fixed positioning calculation
                      const angleInDegrees = (index * 60) + 30;
                      const angleInRadians = (Math.PI * angleInDegrees) / 180;
                      
                      // Use your existing dimensions
                      const x = dimensions.baseSize / 2 + dimensions.iconRadius * Math.cos(angleInRadians);
                      const y = dimensions.baseSize / 2 + dimensions.iconRadius * Math.sin(angleInRadians);
                      
                      return (
                        <motion.div
                          key={`label-${index}`}
                          className="absolute"
                          animate={{
                            scale: activeIndex === index ? 1.5 : 1,
                            opacity: activeIndex === null || activeIndex === index ? 1 : 0.4
                          }}
                          transition={{ duration: 0.2 }}
                          style={{
                            left: x,
                            top: y,
                            transform: 'translate(-50%, -50%)',
                            width: '10px'
                          }}
                          onMouseEnter={() => setActiveIndex(index)}
                          onMouseLeave={() => setActiveIndex(null)}
                        >
                          <div className="flex flex-col items-center">
                            <div 
                              className="flex items-center justify-center bg-[#1A2649] border border-blue-900/30 rounded-full p-1.5 sm:p-2 shadow-md text-blue-300 mb-2"
                              style={{
                                backgroundColor: entry.color + '33',
                                borderColor: activeIndex === index ? entry.color : 'transparent',
                                borderWidth: activeIndex === index ? '2px' : '1px'
                              }}
                            >
                              {entry.icon}
                            </div>
                            {activeIndex === index && (
                              <motion.div 
                                className="text-center"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <h4 className="text-xs font-semibold text-white mb-1">{entry.name}</h4>
                                <p className="text-[10px] text-gray-300 leading-tight">{entry.description}</p>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Center element with Quanfia */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div 
                        className="flex flex-col items-center justify-center text-center bg-[#0B0D1F]/80 backdrop-blur-sm rounded-full border border-blue-900/30 shadow-lg"
                        animate={{ 
                          width: activeIndex !== null ? 140 : 120,
                          height: activeIndex !== null ? 140 : 120,
                          padding: activeIndex !== null ? '1rem' : '0.75rem'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 mb-2">
                          Quanfia
                        </h3>
                        <p className="text-xs text-white">
                          Hover to learn more
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuanfiaDifference;