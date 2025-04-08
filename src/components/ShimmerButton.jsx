import React from "react";

const ShimmerButton = ({ 
  children, 
  className = "", 
  onClick,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  ...props 
}) => {
  return (
    <button
      type="button"
      style={{
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background,
      }}
      className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Spark container */}
      <div className="absolute inset-0 overflow-visible -z-10">
        {/* Spark */}
        <div className="absolute inset-0 animate-shimmer-slide">
          {/* Spark before */}
          <div 
            className="absolute inset-0 animate-[spin_4s_linear_infinite]" 
            style={{
              background: `conic-gradient(from calc(270deg - (90deg * 0.5)), transparent 0, ${shimmerColor} 90deg, transparent 90deg)`
            }}
          />
        </div>
      </div>
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Highlight */}
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_-8px_10px_rgba(255,255,255,0.1)] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_rgba(255,255,255,0.2)] group-active:shadow-[inset_0_-10px_10px_rgba(255,255,255,0.2)]" />
      
      {/* Backdrop */}
      <div 
        className="absolute -z-10 inset-[var(--cut)]" 
        style={{ 
          background: 'var(--bg)', 
          borderRadius: 'var(--radius)'
        }}
      />
    </button>
  );
};

// Add these animations to your tailwind.config.js or use a styled component approach
// animation: {
//   'shimmer-slide': 'shimmer 2s linear infinite',
// },
// keyframes: {
//   shimmer: {
//     '0%': { transform: 'translateY(-100%)' },
//     '100%': { transform: 'translateY(100%)' },
//   },
// },

export default ShimmerButton;