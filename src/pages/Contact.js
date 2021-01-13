import React from "react";
import ScrollTop from "../components/ScrollTop";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Contact = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "white" }}
    >
      <h1>Contact</h1>
      <ScrollTop />
    </motion.div>
  );
};

export default Contact;
