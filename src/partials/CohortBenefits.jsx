import { useState } from 'react';
import { Code, Users, Gift, BookOpen, Server, Repeat } from 'lucide-react';

export default function CohortBenefits() {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-amber-400" />,
      title: "Taught by Professionals",
      description: "Our cohorts are being taught by top industry experts and educators",
    },
    {
      icon: <Gift className="h-10 w-10 text-amber-400" />,
      title: "Bounties",
      description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
    },
    {
      icon: <Code className="h-10 w-10 text-amber-400" />,
      title: "Coding hostels",
      description: "There is nothing like late night discussion with fellow learners and solving bugs",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-amber-400" />,
      title: "Peer Code Reviews",
      description: "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
    },
    {
      icon: <Server className="h-10 w-10 text-amber-400" />,
      title: "Leet Lab",
      description: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
    },
    {
      icon: <Repeat className="h-10 w-10 text-amber-400" />,
      title: "Revision classes",
      description: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
    }
  ];

  return (
    <div className="bg-[#000001] text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-300">Key Benefits of Cohorts</h1>
          <p className="text-lg text-gray-400">
            Cohorts are best way to learn because you finish the course in a timely manner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#0B0C1F] border border-gray-700 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-300">{benefit.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{benefit.description}</p>
                <div className="bg-gray-900 p-3 rounded-md mt-auto">
                  <pre className="text-xs text-amber-300 font-mono">
                    {benefit.code}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-amber-500 text-black text-lg font-medium rounded hover:bg-amber-600 transition-colors"
           onClick={() => {
            window.location.href = "https://courses.chaicode.com/learn/account/signin";
          }}>
            Join Our Next Cohort
          </button>
          <p className="mt-4 text-gray-400">
            Limited seats available. Next batch starts soon!
          </p>
        </div>
      </div>
    </div>
  );
}