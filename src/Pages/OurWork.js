import React from "react";
//Importing images
import Athlete from "../img/athlete-small.png";
import TheRacer from "../img/theracer-small.png";
import GoodTimes from "../img/goodtimes-small.png";

//Styled thing
import styled from "styled-components";

//Router thing
import { Link } from "react-router-dom";

////Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  zoomAnim,
  fadeAnim,
  lineAnim,
  slideAnim,
  slideContainer,
} from "../animation";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      initial="hidden"
      animate="show"
      variants={pageAnimation}
    >
      <motion.div variants={slideContainer}>
        <Frame1 variants={slideAnim}></Frame1>
        <Frame2 variants={slideAnim}></Frame2>
        <Frame3 variants={slideAnim}></Frame3>
        <Frame4 variants={slideAnim}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fadeAnim}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <Link to="/work/the-athlete">
            <motion.img variants={zoomAnim} src={Athlete} alt="Athlete" />
          </Link>
        </Hide>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={TheRacer} alt="The Racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={GoodTimes} alt="Good Times" />
        </Link>
      </Movie>
    </Work>
  );
};

//Styled thing
const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
