import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import linkedin from "../img/linkedin.svg";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Hide>
        <Social variants={titleAnim}>
          <Title>
            <FontAwesomeIcon size="3x" icon={faPhoneAlt} />
            <h2>Bel/app me:</h2>
            <p>+31 (0)6 46 90 27 56</p>
          </Title>
        </Social>
      </Hide>

      <Hide>
        <Social variants={titleAnim}>
          <Title>
            <FontAwesomeIcon size="3x" icon={faEnvelope} />
            <h2>Verstuur een email:</h2>
            <p>timgrootscholtentim@gmail.com</p>
          </Title>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Title>
            <img src={linkedin} alt="teamwork" />
            <h2>Linkedin:</h2>
            <a href="https://www.linkedin.com/in/timgrootscholten/">
              <p>Link</p>
            </a>
          </Title>
        </Social>
      </Hide>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  background-color: #282828;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  h2 {
    margin: 2rem;
    color: #fff;
    font-size: 2rem;
  }
  p {
    padding: 0rem 0rem;
  }
  a {
    text-decoration: none;
    padding: 0.5rem;
    border: 3px solid #23d997;
  }
`;
const Title = styled.div`
  color: #23d997;
  display: flex;
  align-items: center;
`;

export default Contact;
