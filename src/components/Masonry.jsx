import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Masonry = ({ 
  data = [], 
  renderItem, 
  columnBreakpoints = {
    default: 1,
    640: 2,
    1024: 3
  }, 
  itemPadding = 16,
  className = ''
}) => {
  const [columns, setColumns] = useState(1);
  const [columnItems, setColumnItems] = useState([]);
  const containerRef = useRef(null);
  
  // Determine column count based on breakpoints and window width
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      // Get breakpoints as numbers in ascending order
      const breakpoints = Object.entries(columnBreakpoints)
        .filter(([key]) => key !== 'default')
        .map(([key, value]) => ({ width: parseInt(key, 10), columns: value }))
        .sort((a, b) => a.width - b.width);
      
      // Start with default column count
      let columnCount = columnBreakpoints.default;
      
      // Update column count based on current window width
      for (const bp of breakpoints) {
        if (window.innerWidth >= bp.width) {
          columnCount = bp.columns;
        }
      }
      
      setColumns(columnCount);
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columnBreakpoints]);
  
  // Distribute items into columns whenever data or column count changes
  useEffect(() => {
    if (!data || !data.length || columns <= 0) {
      setColumnItems([]);
      return;
    }
    
    // Initialize empty columns
    const newColumnItems = Array.from({ length: columns }, () => []);
    
    // Use height-balanced distribution algorithm
    data.forEach((item, index) => {
      // Store the original index with the item to use in rendering
      const itemWithIndex = { ...item, originalIndex: index };
      
      // Get the heights of all columns
      const columnHeights = newColumnItems.map(col => 
        col.reduce((acc, item) => acc + (item.height || 250) + itemPadding, 0)
      );
      
      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      
      // Add item to the shortest column
      newColumnItems[shortestColumnIndex].push(itemWithIndex);
    });
    
    setColumnItems(newColumnItems);
  }, [data, columns, itemPadding]);
  
  if (!data || data.length === 0) {
    return null;
  }
  
  return (
    <div 
      ref={containerRef}
      className={`flex flex-wrap -mx-${itemPadding/2} ${className}`}
      style={{ margin: `-${itemPadding/2}px` }}
    >
      {columnItems.map((column, columnIndex) => (
        <div 
          key={columnIndex}
          className="px-2"
          style={{ 
            flexBasis: `${100 / columns}%`,
            maxWidth: `${100 / columns}%`,
            padding: `${itemPadding/2}px`,
          }}
        >
          <div className="flex flex-col">
            {column.map((item) => (
              <div 
                key={item.id} 
                className="mb-4" 
                style={{ marginBottom: itemPadding }}
              >
                {/* Pass the original index to renderItem */}
                {renderItem(item, item.originalIndex)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Masonry.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func.isRequired,
  columnBreakpoints: PropTypes.object,
  itemPadding: PropTypes.number,
  className: PropTypes.string
};

export default Masonry;