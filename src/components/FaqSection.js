import React from "react";
//Styles
import styled from "styled-components";
import { About } from "../style/styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        <span>Ervaringen</span>
      </h2>
      <div className="question">
        <h4>Javascript</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>https://github.com/TimGrootscholten/vier-op-een-rij</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>React</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            https://github.com/TimGrootscholten/Music-player <br />
            https://github.com/TimGrootscholten/Website
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Symfony 4</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            https://github.com/TimGrootscholten/HealthOne2.0 <br />
            https://github.com/TimGrootscholten/Website
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Java</h4>
        <div className="answer">
          <p>
            Java was de eerste taal die ik leerde. We hadden met behulp van de
            greenfood engine een platform game gemaakt. Daarna ben ik javascript
            gaan leren.
          </p>
          <p>https://github.com/ROCMondriaanTIN/project-greenfoot-game-team</p>
        </div>
        <div className="faq-line"></div>
      </div>
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

export default FaqSection;
