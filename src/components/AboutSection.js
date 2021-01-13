import React from "react";
import { About, Description, Image, Hide } from "../style/styles";
import Wave from "./Wave";
import { Link } from "react-router-dom";
//framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hallo,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> mijn naam is</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Tim Grootscholten</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          &amp; Student Media en Applicatie Ontwikkelaar.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact opnemen</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src="https://placebeard.it/500x750"
          alt="home img"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
