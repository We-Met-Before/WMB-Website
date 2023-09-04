"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  let [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMouseMove = ({ clientX, clientY }) => {
    setMousePos({
      x: clientX,
      y: clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <div
      className="cursor"
      style={{
        left: mousePos.x - 15 + "px",
        top: mousePos.y - 15 + "px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="cursor__icon--full"
      >
        <path d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z" />
      </svg>
     
    </div>
  );
}
