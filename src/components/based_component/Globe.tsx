"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Globe: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const globeVariants = {
    rotate: {
      rotateY: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500 rounded-full z-30"
      style={{
        left: mousePosition.x - 64, // Center the globe on mouse (half of 128px width)
        top: mousePosition.y - 64, // Center the globe on mouse (half of 128px height)
        pointerEvents: "none", // Disable click/tap interactions
      }}
      variants={globeVariants as any}
      animate="rotate"
    >
      {/* Simple globe representation; replace with an image or 3D model if desired */}
      <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,#87CEEB_0%,#4682B4_70%)] rounded-full shadow-[0_0_20px_rgba(0,191,255,0.5)]" />
    </motion.div>
  );
};

export default Globe;