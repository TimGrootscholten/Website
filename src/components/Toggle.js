import { motion } from "framer-motion";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className="Experience"
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>
        {title} <FontAwesomeIcon icon={toggle ? faArrowUp : faArrowDown} />
      </motion.h4>
      {toggle ? children : ""}
      <div className="Experience-line"></div>
    </motion.div>
  );
};

export default Toggle;
