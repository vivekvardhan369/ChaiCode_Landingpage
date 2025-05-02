"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useRef, useEffect, useCallback } from "react";
import Masonry from "../components/Masonry";

const StudentTestimonialsSection = () => {
  // Reference for the section to detect when it comes into view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Define testimonialsData
  const testimonialsData = [
    { 
      id: 1, 
      name: "Prasenjit Basu", 
      username: "@prasenjitbasu44",
      content: "Wow Todays class is just awesome. No words to explain my experience. Just awesome❤️❤️. Topics:- Pollyfill of Promise, Map, ForEach and also Debouncing and Throttling.",
      footer: "Thank you so much Piyush Sir, Hitesh Sir and all the TA'S. Chai aur Cohort 1 Rock's.",
      height: 280
    },
    { 
      id: 2, 
      name: "Rahul Sharma", 
      username: "@rahul_codes",
      content: "The React deep dive session blew my mind! Understanding React fiber and reconciliation algorithm makes so much more sense now. Best investment in my learning journey!",
      footer: "Chai aur Code cohort is transforming how I approach frontend development.",
      height: 240
    },
    { 
      id: 3, 
      name: "Priya Patel", 
      username: "@priya_developer",
      content: "Finally understood closures and prototypal inheritance after struggling for months! The way concepts are broken down makes everything crystal clear.",
      footer: "The live Q&A sessions are gold. Thanks to the entire team for your patience!",
      height: 260
    },
    { 
      id: 4, 
      name: "Arjun Mehta", 
      username: "@arjun_codes",
      content: "From zero JS knowledge to building full-stack applications in 3 months. The project-based approach and code reviews have accelerated my growth exponentially.",
      footer: "Special shoutout to the discord community that never sleeps!",
      height: 240
    },
    { 
      id: 5, 
      name: "Sneha Gupta", 
      username: "@sneha_webdev",
      content: "Just completed the advanced TypeScript module and immediately applied it to my work project. My team was impressed with the type safety improvements I implemented!",
      footer: "The real-world applications of each concept make this cohort stand out.",
      height: 260
    },
    { 
      id: 6, 
      name: "Vikram Singh", 
      username: "@vikram_fullstack",
      content: "The debugging sessions are incredible. Learning to solve problems methodically has made me so much more confident. I'm no longer intimidated by complex errors.",
      footer: "This course is worth every penny and minute invested!",
      height: 240
    },
  ];

  // Create a TestimonialCard component outside of renderItem function
  const TestimonialCard = useCallback(({ item, index = 0 }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: false, amount: 0.1 });
    
    // Calculate staggered delay based on index
    const delay = 0.1 + (index * 0.1);
  
    useEffect(() => {
      const card = cardRef.current;
      if (!card) return;
  
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
  
        const cardCenterX = rect.width / 2;
        const cardCenterY = rect.height / 2;
        
        const deltaX = mouseX - cardCenterX;
        const deltaY = mouseY - cardCenterY;
  
        card.style.setProperty('--mouse-x', `${deltaX}px`);
        card.style.setProperty('--mouse-y', `${deltaY}px`);
      };
  
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={cardInView ? { 
          opacity: 1, 
          y: 0 
        } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 1.5, 
          delay, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        style={{ height: item.height || 240 }} 
        className="spotlight-card relative w-full overflow-hidden rounded-2xl bg-gray-800/40 backdrop-blur-sm p-px
          before:pointer-events-none before:absolute before:z-10 before:h-[300px] before:w-[300px] 
          before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full 
          before:bg-indigo-500/30 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-300
          after:pointer-events-none after:absolute after:z-30 after:h-[250px] after:w-[250px] 
          after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full 
          after:bg-indigo-500/40 after:opacity-0 after:blur-2xl after:transition-opacity after:duration-300
          hover:before:opacity-100 hover:after:opacity-30 transform transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950/90 p-6 
          after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 
          after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">

          <div>
            <div className="text-lg font-bold text-white mb-2 flex items-center">
              {item.name}
              <span className="ml-2 text-sm text-gray-400 font-normal">{item.username}</span>
            </div>
            <div className="text-gray-300">
              {item.content}
            </div>
          </div>
          
          <div className="mt-4 text-sm italic text-gray-400">
            {item.footer}
          </div>
        </div>
      </motion.div>
    );
  }, []);

  // This render function passes the index to TestimonialCard for staggered animation
  const renderTestimonialCard = (item, index) => {
    return <TestimonialCard item={item} index={index} />;
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24 px-4 relative z-10"
    >
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            Our Students Feedback
          </h2>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
            Explore the incredible advantages of enrolling in our courses and enhancing your skills.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Masonry 
            data={testimonialsData} 
            renderItem={renderTestimonialCard}
            columnBreakpoints={{
              default: 1,  // Single column on mobile
              640: 2,      // Two columns on small tablets
              1024: 3      // Three columns on desktops
            }}
            itemPadding={16}
            className="group"
          />
        </div>

        <div className="flex justify-center mt-12">
          <motion.a
            href="#join-cohort"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="px-8 py-3 rounded-lg border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 font-medium"
            onClick={() => {
              window.location.href = "https://courses.chaicode.com/learn/view-all?show=batch&type=17";
            }}>
            Join Cohorts Live Classes
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default StudentTestimonialsSection;