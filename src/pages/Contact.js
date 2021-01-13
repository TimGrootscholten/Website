import React from "react";
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
    </motion.div>
  );
};

export default Contact;
