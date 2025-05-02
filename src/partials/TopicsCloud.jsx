import React, { useEffect, useRef, useState } from "react";

export default function TopicsCloud() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const spotlightRef = useRef(null);
  
  // YouTube links for each topic
  const youtubeLinks = {
    docker: "https://youtu.be/rr9cI4u1_88?si=WG8Io9MUz2IlGSYu",
    mcp: "https://youtu.be/dZyQNy3-HjU?si=iZVh4gt5Fdaj1fvN",
    kubernetes: "https://youtu.be/7XDeI5fyj3w?si=gQVqKEwNX2HqdQQu",
    python: "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=eebugfblRPxOY5zX",
    react: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=uAoiJDg4iD8PGL5n",
    django: "https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&si=HY8J9pbhjK4FDMDh",
    nextjs: "https://youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq&si=E1mA_FCeH3UPjq5L",
  };

  // Define our topics
  const topRow = [
    { id: 'docker', name: 'Docker' },
    { id: 'mcp', name: 'MCP Server' },
    { id: 'kubernetes', name: 'Kubernetes' },
    { id: 'python', name: 'Python' },
    { id: 'react', name: 'React Native' },
  ];
  
  const secondRow = [
    { id: 'django', name: 'Django' },
    { id: 'nextjs', name: 'NextJS' },
    { id: 'empty1', name: '' },
    { id: 'empty2', name: '' },
    { id: 'empty3', name: '' },
  ];
  
  const thirdRow = [
    { id: 'empty4', name: '' },
    { id: 'empty5', name: '' },
    { id: 'empty6', name: '' },
    { id: 'empty7', name: '' },
    { id: 'empty8', name: '' },
  ];

  // Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;
      
      const buttons = spotlightRef.current.querySelectorAll('.topic-button');
      
      buttons.forEach((button) => {
        if (button.getAttribute('disabled') === null) {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          button.style.setProperty('--mouse-x', `${x}px`);
          button.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };
    
    const element = spotlightRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleTopicClick = (topic) => {
    if (topic.name) {
      setSelectedTopic(topic.id);
      // Redirect to YouTube playlist
      window.open(youtubeLinks[topic.id], '_blank');
    }
  };

  return (
    <section className="bg-[#0B0C1F] py-16 w-full">
      {/* Title and description - full width with centered content */}
      <div className="w-full mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-amber-300">Topics Cloud</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto px-4">
          You can find videos and courses on topics and much more
        </p>
      </div>
      
      {/* Background that covers the entire width */}
      <div className="w-full bg-[#0B0C1F] py-16 ">
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Topics grid */}
          <div className="space-y-6" ref={spotlightRef}>
            {/* Top row */}
            <div className="flex justify-between gap-3">
              {topRow.map((topic) => (
                <button
                  key={topic.id}
                  className={`topic-button px-4 py-3 border-2 rounded-lg text-center flex-1 relative overflow-hidden
                    ${topic.name ? 'border-gray-700 hover:border-amber-500 text-amber-300' : 'invisible'}
                    ${selectedTopic === topic.id ? 'bg-gray-800/80 border-amber-500' : 'bg-gray-800/30'}
                    before:absolute before:inset-0 before:rounded-lg before:bg-amber-500/20 before:opacity-0 
                    before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
                    before:h-32 before:w-32 before:-left-16 before:-top-16 before:blur-xl
                    hover:before:opacity-100 before:transition-opacity before:duration-500
                    after:absolute after:inset-0 after:rounded-lg after:bg-amber-400/10 
                    after:opacity-0 hover:after:opacity-100 after:transition-opacity`}
                  onClick={() => handleTopicClick(topic)}
                  disabled={!topic.name}
                >
                  <span className="relative z-10">{topic.name}</span>
                </button>
              ))}
            </div>
            
            {/* Second row */}
            <div className="flex justify-between gap-3">
              {secondRow.map((topic) => (
                <button
                  key={topic.id}
                  className={`topic-button px-4 py-3 border-2 rounded-lg text-center flex-1 relative overflow-hidden
                    ${topic.name ? 'border-gray-700 hover:border-amber-500 text-amber-300' : 'invisible'}
                    ${selectedTopic === topic.id ? 'bg-gray-800/80 border-amber-500' : 'bg-gray-800/30'}
                    before:absolute before:inset-0 before:rounded-lg before:bg-amber-500/20 before:opacity-0 
                    before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
                    before:h-32 before:w-32 before:-left-16 before:-top-16 before:blur-xl
                    hover:before:opacity-100 before:transition-opacity before:duration-500
                    after:absolute after:inset-0 after:rounded-lg after:bg-amber-400/10 
                    after:opacity-0 hover:after:opacity-100 after:transition-opacity`}
                  onClick={() => handleTopicClick(topic)}
                  disabled={!topic.name}
                >
                  <span className="relative z-10">{topic.name}</span>
                </button>
              ))}
            </div>
            
            {/* Third row */}
            <div className="flex justify-between gap-3">
              {thirdRow.map((topic) => (
                <button
                  key={topic.id}
                  className={`topic-button px-4 py-3 border-2 rounded-lg text-center flex-1 relative overflow-hidden
                    ${topic.name ? 'border-gray-700 hover:border-amber-500 text-amber-300' : 'invisible'}
                    ${selectedTopic === topic.id ? 'bg-gray-800/80 border-amber-500' : 'bg-gray-800/30'}
                    before:absolute before:inset-0 before:rounded-lg before:bg-amber-500/20 before:opacity-0 
                    before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
                    before:h-32 before:w-32 before:-left-16 before:-top-16 before:blur-xl
                    hover:before:opacity-100 before:transition-opacity before:duration-500
                    after:absolute after:inset-0 after:rounded-lg after:bg-amber-400/10 
                    after:opacity-0 hover:after:opacity-100 after:transition-opacity`}
                  onClick={() => handleTopicClick(topic)}
                  disabled={!topic.name}
                >
                  <span className="relative z-10">{topic.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          
        </div>
      </div>
      
    </section>
  );
}