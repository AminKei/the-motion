"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const Card3D = ({ position }) => {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        position.y / 80 + Math.sin(clock.getElapsedTime()) * 0.1;
      meshRef.current.rotation.y =
        position.x / 80 + Math.cos(clock.getElapsedTime()) * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[3.5, 4.5, 0.2]} />
        <meshStandardMaterial
          color={hovered ? "#93c5fd" : "#f3e8ff"}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.95}
        />
      </mesh>
      <mesh ref={wireframeRef} position={[0, 0, -0.1]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#60a5fa" wireframe opacity={0.3} />
      </mesh>
    </>
  );
};

const Lanyard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - card.left - card.width / 2;
    const mouseY = e.clientY - card.top - card.height / 2;
    setPosition({ x: mouseX / 6, y: mouseY / 6 });
  };

  const handleClick = () => {
    controls.start({
      scale: [1, 1.4, 0.8, 1],
      y: [0, -40, 20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 12,
        duration: 0.7,
      },
    });
  };

  return (
    <div className="absolute hidden md:block top-1/2 left-[12%] transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      {!isVisible && <div className="hidden" />}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-10 pointer-events-auto"
          onMouseMove={handleMouseMove}
        >
          {/* Lanyard with dynamic color and scale animation */}
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-full w-1.5 h-[450px] bg-white rounded-full shadow-2xl"
            animate={{
              height: [450, 470, 450],
              scaleY: [1, 1.05, 1],
              background: [
                // "linear-gradient(to bottom, #60a5fa, #a78bfa, #f472b6)",
                // "linear-gradient(to bottom, #a78bfa, #f472b6, #60a5fa)",
                // "linear-gradient(to bottom, #f472b6, #60a5fa, #a78bfa)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Card with glassmorphism and 3D effects */}
          <motion.div
            className="w-72 h-96 bg-gradient-to-br bg-black rounded-xl shadow-2xl flex items-center justify-center flex-col text-center p-8 cursor-pointer relative overflow-hidden backdrop-blur-md border "
            animate={controls}
            onClick={handleClick}
            whileHover={{
              scale: 1.02,
              // boxShadow: "0 0 30px rgba(59, 130, 246, 0.7)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r  transition-opacity duration-500" />
            <Canvas
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            >
              {/* <ambientLight intensity={0.6} /> */}
              {/* <pointLight position={[10, 10, 10]} intensity={1.2} /> */}
              <Card3D position={position} />
            </Canvas>
            <motion.div
              className="relative z-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-extrabold text-white mb-3"
                animate={{
                  color: ["#ffffff", "#93c5fd", "#f9a8d4", "#ffffff"],
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(147, 197, 253, 0.7)",
                    "0 0 20px rgba(249, 168, 212, 0.7)",
                    "0 0 10px rgba(255, 255, 255, 0.5)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                React Bits
              </motion.h2>
              <motion.p
                className="text-base text-gray-200 mb-6 line-clamp-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Unleash creativity with our interactive React components.
              </motion.p>
              <motion.button
                className="w-full bg-gradient-to-r mt-28 text-white py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
                  background: "linear-gradient(to right, #2563eb, #7c3aed)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="relative z-10">Explore Now</span>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Lanyard;
