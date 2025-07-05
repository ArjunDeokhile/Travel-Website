import React, { useState, useRef } from 'react';

export default function AssistiveButton() {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    setDragging(true);
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="fixed z-50 cursor-move"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <button className="bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-xl hover:bg-blue-700 transition">
        AI
      </button>
    </div>
  );
}
