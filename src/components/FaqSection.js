import React from "react";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
//Styles
import styled from "styled-components";
import { About } from "../style/styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        <span>Ervaringen</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Javascript">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>https://github.com/TimGrootscholten/vier-op-een-rij</p>
          </div>
        </Toggle>
        <Toggle title="PHP">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>https://github.com/TimGrootscholten/healthone</p>
          </div>
        </Toggle>
        <Toggle title="Java">
          <div className="answer">
            <p>
              Java was de eerste taal die ik leerde. We hadden met behulp van de
              greenfood engine een platform game gemaakt. Daarna ben ik
              javascript gaan leren.
            </p>
            <p>
              https://github.com/ROCMondriaanTIN/project-greenfoot-game-team
            </p>
          </div>
        </Toggle>
        <Toggle title="React">
          <div className="answer">
            <p>
              Ben sinds kort begonnen met React. Ik wilde een javascript
              famework gebruiken om me websites in te maken.
            </p>
            <p>
              https://github.com/TimGrootscholten/Music-player <br />
              https://github.com/TimGrootscholten/Website
            </p>
          </div>
        </Toggle>
        <Toggle title="Symfony 4">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              https://github.com/TimGrootscholten/HealthOne2.0 <br />
              https://github.com/TimGrootscholten/Website
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
