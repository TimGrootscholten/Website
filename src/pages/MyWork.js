import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import vierOpEenRij from "../img/vierOpEenRij.PNG";
import healthone from "../img/healthone2.PNG";
import healthone20 from "../img/healthone20.PNG";
import MusicPlayer from "../img/MusicPlayer.PNG";
import platform from "../img/platform.PNG";
import website from "../img/website2.PNG";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import ScrollTop from "../components/ScrollTop";

const MyWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Vier op een rij</motion.h2>
        <Link to="/work/vier-op-een-rij">
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Hide>
            <motion.img variants={photoAnim} src={vierOpEenRij} alt="athlete" />
          </Hide>
        </Link>
      </Project>
      <Project>
        <h2>Website</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/website">
          <motion.img variants={photoAnim} src={website} alt="goodtimes" />
        </Link>
      </Project>
      <Project>
        <h2>Music player</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/music-player">
          <motion.img variants={photoAnim} src={MusicPlayer} alt="goodtimes" />
        </Link>
      </Project>
      <Project>
        <h2>Platform game</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/platform-game">
          <motion.img variants={photoAnim} src={platform} alt="goodtimes" />
        </Link>
      </Project>

      <Project>
        <h2>HealthOne</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/healthone">
          <motion.img variants={photoAnim} src={healthone} alt="theracer" />
        </Link>
      </Project>
      <Project>
        <h2>Healthone 2.0</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/healthone20">
          <motion.img variants={photoAnim} src={healthone20} alt="goodtimes" />
        </Link>
      </Project>

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default MyWork;
