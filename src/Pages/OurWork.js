import React from "react";
//Importing images
import Athlete from "../img/athlete-small.png";
import TheRacer from "../img/theracer-small.png";
import GoodTimes from "../img/goodtimes-small.png";

//Styled thing
import styled from "styled-components";

//Router thing
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={Athlete} alt="Athlete" />
        </Link>
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
const Work = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
