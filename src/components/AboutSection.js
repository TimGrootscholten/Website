import React from "react";
import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../style/styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contacs us for any photography or videography ideas that you have. We
          have professionals with amazing stills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="home img" />
      </Image>
    </About>
  );
};

export default AboutSection;
