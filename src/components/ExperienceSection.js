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
            <ProgressBar bgcolor={"#61dafb"} completed={70} />
            <h5>Projects</h5>
            <Link to="/work/vier-op-een-rij">
              <Button>Vier op een rij</Button>
            </Link>
            <p>https://github.com/TimGrootscholten/vier-op-een-rij</p>
          </div>
        </Toggle>
        <Toggle title="PHP">
          <div className="answer">
            <ProgressBar bgcolor={"#7377ad"} completed={35} />

            <p>Ben begin dit jaar begonnen met php .</p>
            <Link to="/work/healthone">
              <Button>HealthOne</Button>
            </Link>

            <p>https://github.com/TimGrootscholten/healthone</p>
          </div>
        </Toggle>
        <Toggle title="Java">
          <div className="answer">
            <ProgressBar bgcolor={"#ea8c11"} completed={50} />

            <p>
              Java was de eerste taal die ik leerde. We hadden met behulp van de
              greenfood engine een platform game gemaakt. Daarna ben ik
              javascript gaan leren.
            </p>
            <Link to="/work/palatform-game">
              <Button>Platform game</Button>
            </Link>
            <p>
              https://github.com/ROCMondriaanTIN/project-greenfoot-game-team
            </p>
          </div>
        </Toggle>
        <Toggle title="React">
          <div className="answer">
            <ProgressBar bgcolor={"#61dafb"} completed={40} />

            <p>
              Ben sinds kort begonnen met React. Ik wilde een javascript
              famework gebruiken om me websites in te maken.
            </p>
            <Link to="/work/music-player">
              <Button>Music player</Button>
            </Link>
            <Link to="/work/website">
              <Button>Website</Button>
            </Link>
            <p>
              https://github.com/TimGrootscholten/Music-player <br />
              https://github.com/TimGrootscholten/Website
            </p>
          </div>
        </Toggle>
        <Toggle title="Symfony 4">
          <div className="answer">
            <ProgressBar bgcolor={"#000000"} completed={40} />

            <p>
              Symfony heb ik nu op school ben nu bezig om mijn php project over
              te zetten naar symfony.
            </p>
            <Link to="/work/healthone20">
              <Button>HealthOne2.0</Button>
            </Link>
            <p>https://github.com/TimGrootscholten/HealthOne2.0</p>
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

const Button = styled.button`
  font-size: 1.2rem;
  margin: 1rem;
`;

export default ExperienceSection;
