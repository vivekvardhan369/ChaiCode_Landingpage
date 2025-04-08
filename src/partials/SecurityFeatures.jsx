import React from 'react';
import {
  KeyRound,
  Headphones,
  Shield,
  ShieldCheck,
  ScrollText,
  BadgeCheck
} from 'lucide-react';

function SecurityFeatures() {
  const features = [
    { 
      title: "Single Sign-On (SSO)", 
      Icon: KeyRound,
      color: "text-blue-400"
    },
    { 
      title: "Enterprise Support + SLAs", 
      Icon: Headphones,
      color: "text-blue-300"
    },
    { 
      title: "Product + Data Security", 
      Icon: Shield,
      color: "text-blue-300"
    },
    { 
      title: "SOC2 II", 
      Icon: ShieldCheck,
      color: "text-blue-400"
    },
    { 
      title: "GDPR", 
      Icon: ScrollText,
      color: "text-blue-300"
    },
    { 
      title: "ISO 27001 (in progress)", 
      Icon: BadgeCheck,
      color: "text-blue-200"
    }
  ];

  return (
    <section className="bg-[#1a1d3d] py-16 px-4 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 leading-tight mb-4">
          Quanfia puts your success and security first.
        </h2>
        <p className="text-white max-w-2xl mx-auto">
          Quanfia is trusted by many of the largest and most regulated global
          financial institutions — and procurement teams 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100"> love us</span>.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0B0C1F] p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-900/20 ${feature.color}`}>
                <feature.Icon 
                  className="w-8 h-8"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurityFeatures;