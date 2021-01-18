import React from "react";
import { useScroll } from "./useScroll";
// import icons/img
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faQuestionCircle,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import teamwork from "../img/teamwork.svg";
//Styles
import styled from "styled-components";
import { About, Description } from "../style/styles";
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
              <FontAwesomeIcon size="3x" icon={faBolt} />
              <h3>Enthousiast</h3>
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
              <FontAwesomeIcon size="3x" icon={faQuestionCircle} />
              <h3>Nieuwsgierig</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon size="3x" icon={faGraduationCap} />
              <h3>Leergierig </h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <Description>
        <Details>
          <h2>
            <span>PERSOONLIJKE DETAILS</span>
          </h2>
          <div className="text">
            Naam: Grootscholten <br />
            Roepnaam: Tim <br />
            Geboorteplaats: Monster <br />
            Geboortedatum: 29-03-2003 <br />
            Nationaliteit: NL <br />
            Telefoonnummer +31 (0)6 46 90 27 56 <br /> <br />
            Adres: Het eiland 26, 2681JX <br />
            Woonplaats: Monster <br />
            Geslacht: man <br />
            opleiding: Media en Applicatie Ontwikkelaar <br />
            Email: timgrootscholtentim@gmail.com
          </div>
        </Details>

        {/* <Img src={bug} alt="home2" /> */}
      </Description>
    </Info>
  );
};

const Info = styled(About)`
  h2 {
    padding-bottom: 5rem;
    @media (max-width: 1300px) {
      font-size: 3rem;
    }
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Details = styled.div`
  .text {
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    h2 {
      margin-top: 10rem;
    }
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
  padding: 2rem 1rem;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  .icon {
    display: flex;
    align-items: center;
    color: #23d997;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default InfoSection;
