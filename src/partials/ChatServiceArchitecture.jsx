import React from 'react';
import CSArchitecture from '../images/chat-service-architecture.png';

function ChatServiceArchitecture() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400">
              How does Quanfia work?
            </h2>
            
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <img 
              src={CSArchitecture} 
              alt="Chat Service Architecture" 
              className="w-full h-auto"
              style={{ 
                objectFit: 'contain',
                backgroundColor: 'rgba(17, 24, 39, 0.8)' // dark background for the image
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
          
        
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0"></div>
    </section>
  );
}

export default ChatServiceArchitecture;