"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";

const EarthComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const countUsers = useMotionValue(0);
  const countProjects = useMotionValue(0);
  const countSatisfaction = useMotionValue(0);

  // تنظیم انیمیشن‌های شمارشگر
  useEffect(() => {
    setIsVisible(true);
    if (isVisible) {
      countUsers.set(50000);
      countProjects.set(1200);
      countSatisfaction.set(983);
    }
  }, [isVisible, countUsers, countProjects, countSatisfaction]);

  // تبدیل مقادیر برای نمایش با علامت +
  const displayUsers = useTransform(
    countUsers,
    (value) => Math.round(value).toLocaleString() + "+"
  );
  const displayProjects = useTransform(
    countProjects,
    (value) => Math.round(value).toLocaleString() + "+"
  );
  const displaySatisfaction = useTransform(
    countSatisfaction,
    (value) => Math.round(value) + "+"
  );

  // انیمیشن‌های کلی
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring" },
    },
  };

  return (
    <motion.div
      className="grid md:flex  md:flex-row items-center justify-between md:px-32   h-screen backdrop-blur-3xl bg-white-30   text-white p-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* سمت چپ: نوشته، متن، اعداد کانت‌آپ، باتن */}
      <motion.div
        className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-8 z-10"
        variants={childVariants}
      >
        <motion.h2
          className="text-2xl md:text-5xl font-extrabold tracking-wide leading-tight"
          whileHover={{ scale: 1.05, color: "#A78BFA" }}
          transition={{ duration: 0.3 }}
        >
          Unlock Your Potential with Cutting-Edge Tech
        </motion.h2>
        <motion.p
          className="text-lg font-light leading-relaxed max-w-lg"
          variants={childVariants}
        >
          Dive into a world of innovation where technology meets creativity. Our
          platform empowers you to build, create, and scale like never before.
          Join thousands who have transformed their ideas into reality.
        </motion.p>

        {/* اعداد کانت‌آپ */}
        <motion.div className="grid md:grid-cols-3 gap-6" variants={childVariants}>
          <div className="text-center">
            <motion.span
              className="text-4xl font-bold block"
              style={{ display: "inline-block" }}
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 },
              }}
            >
              <motion.span>{displayUsers}</motion.span>
            </motion.span>
            <span className="text-sm uppercase tracking-wider">Users</span>
          </div>
          <div className="text-center">
            <motion.span
              className="text-4xl font-bold block"
              style={{ display: "inline-block" }}
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 },
              }}
            >
              <motion.span>{displayProjects}</motion.span>
            </motion.span>
            <span className="text-sm uppercase tracking-wider">Projects</span>
          </div>
          <div className="text-center">
            <motion.span
              className="text-4xl font-bold block"
              style={{ display: "inline-block" }}
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 },
              }}
            >
              <motion.span>{displaySatisfaction}</motion.span>
            </motion.span>
            <span className="text-sm uppercase tracking-wider">
              Satisfaction
            </span>
          </div>
        </motion.div>

        {/* دکمه زیر اعداد */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(167, 139, 250, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
        >
          Get Started Now
        </motion.button>
      </motion.div>

      {/* سمت راست: تصویر خفن */}
      <motion.div
        className="w-full md:w-1/2 h-full relative"
        variants={childVariants}
      >
        <motion.img
          src="https://i.pinimg.com/1200x/7f/26/d5/7f26d548d3b1e78744640c5f010a8825.jpg"
          alt="Futuristic Tech Image"
          className="absolute inset-0 w-full h-[500px] mt-48 object-cover rounded-3xl "
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          // whileHover={{ scale: 1.05, rotate: 2 }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl pointer-events-none" /> */}
      </motion.div>
    </motion.div>
  );
};

export default EarthComponent;
