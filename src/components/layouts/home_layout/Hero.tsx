"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useRef, useEffect } from "react";
import LightRays from "@/components/ui/Bg/Bg"; // فقط LightRays استفاده می‌شود
import Globe from "react-globe.gl";

const Hero = () => {
  const globeRef = useRef(null);
  const ballpitRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: globeRef });

  // تغییر با اسکرول: سرعت چرخش گلوپ و جابه‌جایی بک‌گراند
  const autoRotateSpeed = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]); // کوچک شدن گلوپ با اسکرول
  const backgroundOffset = useTransform(scrollYProgress, [0, 1], [0, -100]); // جابه‌جایی بک‌گراند

  // انیمیشن اولیه متن
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // تنظیم ارتفاع بک‌گراند با تغییر اندازه پنجره
  useEffect(() => {
    const handleResize = () => {
      if (ballpitRef.current) {
        ballpitRef.current.style.height = `${window.innerHeight}px`;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // تنظیم اولیه
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // تنظیمات کره زمین
  const globeConfig = {
    width: 400, // عرض کره زمین
    height: 400, // ارتفاع کره زمین
    backgroundColor: "rgba(0, 0, 0, 0)", // پس‌زمینه شفاف
    globeImageUrl: "//unpkg.com/three-globe/example/img/earth-night.jpg", // تصویر کره زمین
    bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png", // توپوگرافی
    autoRotate: true, // چرخش خودکار
    autoRotateSpeed: autoRotateSpeed.get(), // سرعت چرخش وابسته به اسکرول
  };

  return (
    <section
      ref={globeRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white"
    >
      {/* بک‌گراند LightRays با موقعیت ثابت در تمام صفحه */}
      <div
        ref={ballpitRef}
        className="absolute inset-0 z-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>

      {/* Globe Component */}
      <motion.div
        className="top-1/4 absolute "
        style={{
          scale: globeScale,
          // translateY: 50, // کمی بالا برای جلوگیری از چسبید  ن به لبه
          // translateX: -50, // کمی به چپ برای تنظیم موقعیت
        }}
      >
        <Globe
          ref={globeRef}
          {...globeConfig}
          animateIn={true}
          pointOfView={{
            lat: 0,
            lng: 0,
            altitude: 2.5, // فاصله دوربین از کره زمین
          }}
          onGlobeReady={() => {
            if (globeRef.current) {
              globeRef.current.controls().autoRotate = true; // فعال کردن چرخش خودکار
              globeRef.current.controls().autoRotateSpeed =
                autoRotateSpeed.get();
            }
          }}
        />
      </motion.div>

      {/* Main Content with Animations */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-20 relative"
      >
        <h1 className="text-xl md:text-6xl font-bold mb-6">
          Become emboldened by
          <br />
          the flame of ambition
        </h1>
        <p className="text-sm md:text-xl mb-8">
          Welcome to the Awesome Landing Page! This is an animated project with
          Next.js.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Learn More
          </motion.button>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-8 z-20 absolute left-1/2 transform -translate-x-1/2 -bottom-16"
        >
          <FaArrowDown size={30} />
        </motion.div>
      </motion.div>

      {/* Optional Overlay for Depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
