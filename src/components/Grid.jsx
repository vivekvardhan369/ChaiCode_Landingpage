import React from 'react';

// Simple function to generate unique IDs without uuid dependency
const generateId = () => {
  return 'id_' + Math.random().toString(36).substring(2, 11);
};

export const Grid = ({
  pattern,
  size = 20,
  isDark = true, // Add explicit dark mode control
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className={`absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] ${isDark ? 'from-neutral-900/30 to-neutral-900/30' : 'from-neutral-100/30 to-neutral-300/30'} opacity-100`}>
        <GridPattern
          width={size}
          height={size}
          x="-12"
          y="4"
          squares={p}
          isDark={isDark}
          className={`absolute inset-0 h-full w-full mix-blend-overlay ${isDark ? 'fill-white/10 stroke-white/10' : 'stroke-black/10 fill-black/10'}`}
        />
      </div>
    </div>
  );
};

// GridPattern Component from Acternity UI
export function GridPattern({ width, height, x, y, squares, className, isDark = true }) {
  // Use our simple ID generator instead of uuid
  const patternId = generateId();

  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], i) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${i}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}