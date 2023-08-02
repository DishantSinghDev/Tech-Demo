import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedText = ({ text, className }) => {
  const letters = Array.from(text);
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const hasAnimationPlayed = localStorage.getItem("hasAnimationPlayed");

    if (!hasAnimationPlayed) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start("visible");
              localStorage.setItem("hasAnimationPlayed", true);
            } else {
              controls.start("hidden");
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(containerRef.current);

      return () => observer.disconnect();
    } else {
      controls.start("visible");
    }
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.04 } },
  };

  const letterVariants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: -20, y: 10 },
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={letterVariants} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
