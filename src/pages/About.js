import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import InfoSection from "../components/InfoSection";
import ExperienceSection from "../components/ExperienceSection";
import ScrollTop from "../components/ScrollTop";

//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <InfoSection />
      <ExperienceSection />
      <ScrollTop />
    </motion.div>
  );
};

export default About;
