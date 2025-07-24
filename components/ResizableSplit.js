import { useRef, useState } from "react";

export default function ResizableSplit({ left, right }) {
  const [divider, setDivider] = useState(40); // percent for left
  const dragging = useRef(false);

  const onMouseDown = () => {
    dragging.current = true;
    document.body.style.cursor = "col-resize";
  };
  const onMouseUp = () => {
    dragging.current = false;
    document.body.style.cursor = "";
  };
  const onMouseMove = (e) => {
    if (!dragging.current) return;
    const percent = (e.clientX / window.innerWidth) * 100;
    if (percent > 15 && percent < 85) setDivider(percent);
  };

  // Attach listeners
  if (typeof window !== "undefined") {
    window.onmousemove = onMouseMove;
    window.onmouseup = onMouseUp;
  }

  return (
    <div className="flex w-full h-full min-h-[80vh]">
      <div style={{ width: `${divider}%` }} className="h-full overflow-auto bg-white border-r">
        {left}
      </div>
      <div
        className="w-2 cursor-col-resize bg-gray-200 hover:bg-gray-400 transition"
        onMouseDown={onMouseDown}
        style={{ zIndex: 10 }}
      />
      <div style={{ width: `${100 - divider}%` }} className="h-full overflow-auto bg-gray-50">
        {right}
      </div>
    </div>
  );
}
