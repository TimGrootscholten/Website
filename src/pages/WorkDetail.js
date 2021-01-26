import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../ProjectState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const WorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [works] = useState(ProjectState);
  const [work, setWork] = useState(null);

  //useEffects
  useEffect(() => {
    const currentWork = works.filter((stateWork) => stateWork.url === url);
    setWork(currentWork[0]);
  }, [works, url]);

  return (
    <>
      {work && (
        <Details
          div
          style={{ background: "#181818" }}
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{work.title}</h2>
            <img src={work.mainImg} alt={work.title} />
          </HeadLine>
          <container>
            {work.awards.map((award) => (
              <Info
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </container>
          <ImageDisplay>
            <img src={work.secondaryImg} alt={work.title} />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

//Award Component
const Info = ({ title, description }) => {
  return (
    <InfoStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </InfoStyle>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const container = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const InfoStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default WorkDetail;
