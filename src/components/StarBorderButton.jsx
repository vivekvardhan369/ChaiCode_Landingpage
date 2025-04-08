import React from 'react';

// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

export function StarBorderButton({
  className,
  color = "#FFD700", // Changed to gold color for better visibility
  speed = "3s", // Slowed down animation for better visibility
  children,
  ...props
}) {
  return (
    <button 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[80px] w-full sm:w-auto",
        className
      )} 
      {...props}
    >
      {/* Bottom light ray animation - Increased size */}
      <div
        className="absolute w-[400%] h-[70%] bottom-[-20px] right-[-250%] rounded-full animate-star-movement-bottom z-0 opacity-40 dark:opacity-80"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 30%)`,
          animationDuration: `${speed}`,
        }}
      />
      {/* Top light ray animation - Increased size */}
      <div
        className="absolute w-[400%] h-[70%] top-[-20px] left-[-250%] rounded-full animate-star-movement-top z-0 opacity-40 dark:opacity-80"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 30%)`,
          animationDuration: `${speed}`,
        }}
      />
      {/* Button content */}
      <div className="relative z-10 border border-gray-800 text-center py-4 px-6 rounded-[20px] bg-[#ad963a] text-white font-semibold hover:bg-amber-400 hover:text-black transition-all duration-300 hover:shadow-amber-500/30 hover:shadow-xl text-base md:text-lg">
        {children}
      </div>
    </button>
  );
}

export default StarBorderButton;