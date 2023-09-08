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
    if (window.innerWidth > 500) {
      document.addEventListener("mousemove", onMouseMove);
    }

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
      <div className="icon cursor__icon"></div>
    </div>
  );
}
