// components/ResizableSplit.jsx
import { useRef, useState, useEffect } from "react";

export default function ResizableSplit({ left, right, orientation = "horizontal", className = "", ...props }) {
  // Default to 50% split
  const [splitPoint, setSplitPoint] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef(null);

  const isVertical = orientation === "vertical";

  const onMouseDown = () => {
    dragging.current = true;
    document.body.style.cursor = isVertical ? "row-resize" : "col-resize";
  };

  const onMouseUp = () => {
    dragging.current = false;
    document.body.style.cursor = "";
  };

  const onMouseMove = (e) => {
    if (!dragging.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let percent;

    if (isVertical) {
      // Calculate vertical percentage based on clientY
      const posY = e.clientY - containerRect.top;
      percent = (posY / containerRect.height) * 100;
    } else {
      // Calculate horizontal percentage based on clientX
      const posX = e.clientX - containerRect.left;
      percent = (posX / containerRect.width) * 100;
    }

    // Constrain the split point (e.g., between 10% and 90%)
    if (percent > 10 && percent < 90) {
      setSplitPoint(percent);
    }
  };

  // Attach global mouse listeners
  useEffect(() => {
    const handleMouseMove = onMouseMove;
    const handleMouseUp = onMouseUp;

    if (dragging.current) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Empty dependency array is okay because handlers use refs

  const dividerStyle = isVertical
    ? { height: '8px', cursor: 'row-resize' }
    : { width: '8px', cursor: 'col-resize' };

  const firstPaneStyle = isVertical
    ? { height: `${splitPoint}%` }
    : { width: `${splitPoint}%` };

  const secondPaneStyle = isVertical
    ? { height: `${100 - splitPoint}%` }
    : { width: `${100 - splitPoint}%` };

  return (
    <div
      ref={containerRef}
      className={`flex w-full h-full ${isVertical ? 'flex-col' : 'flex-row'} ${className}`}
      {...props}
    >
      <div style={firstPaneStyle} className="h-full w-full overflow-auto">
        {left}
      </div>
      <div
        className="bg-gray-600 hover:bg-gray-500 transition-all duration-150 flex items-center justify-center"
        onMouseDown={onMouseDown}
        style={dividerStyle}
      >
        <div className={`bg-gray-300 ${isVertical ? 'w-8 h-1 rounded' : 'w-1 h-8 rounded'}`}></div>
      </div>
      <div style={secondPaneStyle} className="h-full w-full overflow-auto">
        {right}
      </div>
    </div>
  );
}