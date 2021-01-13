import React from "react";
import { useScroll } from "./useScroll";
// import icons/img
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUsers, faGraduationcap } from "@fortawesome/free-solid-svg-icons";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//Styles
import styled from "styled-components";
import { About, Description, Image } from "../style/styles";
import { scrollReveal } from "../animation";

const InfoSection = () => {
  const [element, controls] = useScroll();
  return (
    <Info
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          <span>EIGENSCHAPPEN</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              {/* <FontAwesomeIcon size="2x" icon={faUsers} /> */}
              <h3>Efficient</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Nieuwsgierig</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Leergierig </h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src="http://placeimg.com/500/750/tech" alt="home2" />
      </Image>
    </Info>
  );
};

const Info = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default InfoSection;
