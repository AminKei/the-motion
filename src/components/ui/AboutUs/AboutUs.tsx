"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const teamCardVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  // Team data
  const teamMembers = useMemo(
    () => [
      {
        name: "John Doe",
        role: "Lead Developer",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Jane Smith",
        role: "UI/UX Designer",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Alex Brown",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Emily Davis",
        role: "Marketing Lead",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Michael Lee",
        role: "Backend Developer",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Sarah Wilson",
        role: "Frontend Developer",
        image:
          "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "David Kim",
        role: "Graphic Designer",
        image:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Lisa Chen",
        role: "Content Writer",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cf91c?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Robert Taylor",
        role: "QA Engineer",
        image:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Anna Patel",
        role: "Product Manager",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Tom White",
        role: "DevOps Engineer",
        image:
          "https://images.unsplash.com/photo-1500048993953-d23a4362ead0?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Sophie Green",
        role: "SEO Specialist",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    []
  );

  // Slider logic
  const itemsPerSlideDesktop = 4;
  const itemsPerSlideMobile = 2;
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const itemsPerSlide = isMobile ? itemsPerSlideMobile : itemsPerSlideDesktop;
  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideToIndex = (idx) => {
    setCurrentSlide((idx + totalSlides) % totalSlides);
  };

  const handlePrev = () => slideToIndex(currentSlide - 1);
  const handleNext = () => slideToIndex(currentSlide + 1);

  // Derived styles for track
  const trackWidth = `${(teamMembers.length / itemsPerSlide) * 100}%`;
  const offsetPercent = useMemo(() => {
    // each slide width in percent
    const perSlideWidth = 100 / (teamMembers.length / itemsPerSlide);
    return currentSlide * perSlideWidth;
  }, [currentSlide, itemsPerSlide, teamMembers.length]);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-br text-white py-20 px-0 md:px-0 lg:px-2"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      ></motion.div>

      {/* Intro/mission sections are kept lean for brevity */}

      {/* Team Section with Enhanced Slider */}
      <motion.div
        className="text-center mb-20"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-blue-400 mb-8"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Discover the story behind our innovative team and our commitment to
          excellence.
        </motion.p>

        <div className="relative">
          {/* Slider Track */}
          <div className="overflow-hidden rounded-lg shadow-md  p-2 mx-auto w-full max-w-7xl">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: trackWidth,
                transform: `translateX(-${offsetPercent}%)`,
              }}
            >
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="flex-none w-full md:w-1/4 p-3"
                  style={{ maxWidth: "19rem" }}
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 h-full flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/8 transition-colors duration-300">
                    <div
                      className="w-28 h-28 rounded-full bg-cover bg-center mb-4 shadow-sm"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-200 mb-4">{member.role}</p>
                    <button className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:from-blue-500 hover:to-purple-500 transition-all">
                      See resume
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex justify-center items-center mt-5 space-x-4">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.08, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-blue-400"
            >
              <FaArrowLeft size={18} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.08, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-blue-400"
            >
              <FaArrowRight size={18} />
            </motion.button>
          </div>
          {/* Indicators (optional) */}
          <div className="flex justify-center items-center mt-3 space-x-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-4 rounded-full ${
                  i === currentSlide ? "bg-blue-400" : "bg-gray-500/60"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action (unchanged) */}
      <motion.div
        className="text-center"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-purple-400 mb-6"
        >
          Join Us Today!
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-300 max-w-xl mx-auto mb-6"
        >
          Ready to collaborate? Get in touch with us to start your next big
          project.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#contact"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-all duration-300"
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
}
