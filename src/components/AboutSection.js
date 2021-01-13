import React from "react";
import { About, Description, Image, Hide } from "../style/styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Hallo,</h2>
          </Hide>
          <Hide>
            <h2>mijn naam is</h2>
          </Hide>
          <Hide>
            <h2>
              <span>Tim Grootscholten</span>
            </h2>
          </Hide>
        </div>
        <p>&amp; Student Media en Applicatie Ontwikkelaar.</p>
        <button>Contact opnemen</button>
      </Description>
      <Image>
        <img src="https://placebeard.it/500x750" alt="home img" />
      </Image>
    </About>
  );
};

export default AboutSection;
