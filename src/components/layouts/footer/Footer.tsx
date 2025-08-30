"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.05, 1],
      filter: ["blur(10px)", "blur(15px)", "blur(10px)"],
    },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" },
    },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3 } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubmitted(true);
      setError("");
      setTimeout(() => setIsSubmitted(false), 3000); // پیام موفقیت 3 ثانیه نمایش داده می‌شود
      setEmail("");
    } else {
      setError("Please enter a valid email address.");
      setIsSubmitted(false);
    }
  };

  return (
    <footer className="relative py-12 px-8 md:px-16 lg:px-24 text-white overflow-hidden rounded-t-3xl shadow-lg">
      {/* Animated glowing background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br "
        variants={glowVariants}
        animate="animate"
      />

      <motion.div
        className="container mx-auto text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated subscription form */}
        <motion.div variants={itemVariants} className="mb-8">
          <AnimatePresence mode="wait">
            {!isSubmitted && !error && (
              <motion.form
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleSubmit}
                className=" bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md mx-auto"
              >
                <h3 className="text-2xl font-bold  bg-clip-text bg-gradient-to-r  text-white m-4">
                  Subscribe to Our Newsletter
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.input
                    variants={itemVariants}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full sm:w-3/4 p-3 rounded-lg  bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    className="w-full sm:w-1/4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
                    }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.form>
            )}
            {isSubmitted && (
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-green-600 bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md mx-auto text-center"
              >
                <p className="text-white font-semibold">
                  Thank you for subscribing!
                </p>
              </motion.div>
            )}
            {error && (
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-red-600 bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md mx-auto text-center"
              >
                <p className="text-white font-semibold">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.hr className="m-10 bg-gray-100 to-gray-50" />

        {/* Links section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          {/* Column 1: Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">
              Social Media
            </h3>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.4,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)",
                }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <FaFacebookF size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.4,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(29, 161, 242, 0.7)",
                }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.4,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(255, 102, 203, 0.7)",
                }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 hover:text-pink-400"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.4,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(255, 0, 0, 0.7)",
                }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 hover:text-red-400"
              >
                <FaYoutube size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.4,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(0, 119, 181, 0.7)",
                }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.4,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(100, 100, 100, 0.7)",
                }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 hover:text-gray-300"
              >
                <FaGithub size={24} />
              </motion.a>
            </div>
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-800 mb-6"
            >
              © {currentTime.getFullYear()} Awesome Landing Page. All rights
              reserved.
              <br />
              Time:{" "}
              {currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}{" "}
              (CEST)
            </motion.p>

            {/* Animated contact button */}
            <motion.a
              variants={itemVariants}
              href="#contact"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.8)",
                background: "linear-gradient(45deg, #3b82f6, #9333ea)",
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700"
            >
              Contact Us!
            </motion.a>
          </div>

          {/* Column 2: Internal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Links</h3>
            <ul className="space-y-2">
              <motion.li variants={itemVariants}>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white hover:underline hover:decoration-2 hover:decoration-blue-400 transition-all duration-300"
                >
                  Home
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white hover:underline hover:decoration-2 hover:decoration-blue-400 transition-all duration-300"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white hover:underline hover:decoration-2 hover:decoration-blue-400 transition-all duration-300"
                >
                  Services
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white hover:underline hover:decoration-2 hover:decoration-blue-400 transition-all duration-300"
                >
                  Portfolio
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white hover:underline hover:decoration-2 hover:decoration-blue-400 transition-all duration-300"
                >
                  Blog
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Contact Us</h3>
            <p className="text-gray-400">Email: info@awesomelanding.com</p>
            <motion.a
              href="tel:+1234567890"
              variants={itemVariants}
              className="flex items-center justify-center text-gray-400 hover:text-white hover:underline hover:decoration-2 hover:decoration-green-400 transition-all duration-300"
            >
              <FaPhone className="mr-2" /> +1 (234) 567-890
            </motion.a>
            <motion.a
              href="#"
              variants={itemVariants}
              className="flex items-center justify-center text-gray-400 hover:text-white hover:underline hover:decoration-2 hover:decoration-green-400 transition-all duration-300"
            >
              <FaGlobe className="mr-2" /> www.awesomelanding.com
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
