import React from "react";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import ProgressBar from "./ProgressBar";
//Styles
import styled from "styled-components";
import { About } from "../style/styles";
import { scrollReveal } from "../animation";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  const [element, controls] = useScroll();
  return (
    <Experience
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        <span>Ervaringen</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Javascript">
          <div className="answer">
            <ProgressBar bgcolor={"#fbdc00"} completed={70} />
            <h5>Projecten</h5>
            <Link to="/work/vier-op-een-rij">
              <Button>Vier op een rij</Button>
            </Link>
          </div>
        </Toggle>
        <Toggle title="PHP">
          <div className="answer">
            <ProgressBar bgcolor={"#7377ad"} completed={35} />
            <h5>Projecten</h5>
            <Link to="/work/healthone">
              <Button>HealthOne</Button>
            </Link>
            <Link to="/work/healthone20">
              <Button>HealthOne2.0</Button>
            </Link>
          </div>
        </Toggle>
        <Toggle title="Java">
          <div className="answer">
            <ProgressBar bgcolor={"#ea8c11"} completed={35} />
            <h5>Projecten</h5>

            <Link to="/work/platform-game">
              <Button>Platform game</Button>
            </Link>
          </div>
        </Toggle>
        <Toggle title="React">
          <div className="answer">
            <ProgressBar bgcolor={"#61dafb"} completed={50} />
            <h5>Projecten</h5>
            <Link to="/work/music-player">
              <Button>Music player</Button>
            </Link>
            <Link to="/work/website">
              <Button>Website</Button>
            </Link>
          </div>
        </Toggle>
        <Toggle title="Symfony 4">
          <div className="answer">
            <ProgressBar bgcolor={"#000000"} completed={40} />
            <h5>Projecten</h5>
            <Link to="/work/healthone20">
              <Button>HealthOne2.0</Button>
            </Link>
          </div>
        </Toggle>
        <Toggle title="MySQL">
          <div className="answer">
            <ProgressBar bgcolor={"#42759c"} completed={40} />
            <h5>Projecten</h5>
            <Link to="/work/healthone20">
              <Button>HealthOne2.0</Button>
            </Link>
            <Link to="/work/healthone">
              <Button>HealthOne</Button>
            </Link>
          </div>
        </Toggle>
        <Toggle title="GitHub">
          <div className="answer">
            <ProgressBar bgcolor={"#000000"} completed={80} />
            <h5>GitHub page</h5>

            <GitHub href="https://github.com/TimGrootscholten">GitHub</GitHub>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Experience>
  );
};

const Experience = styled(About)`
  display: block;
  text-align: center;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .Experience-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .Experience {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

const GitHub = styled.a`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  border: 3px solid #23d997;
`;
const Button = styled.button`
  font-size: 1.2rem;
  margin: 1rem;
`;

export default ExperienceSection;
