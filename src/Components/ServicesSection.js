import React from "react";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//Importing styles
import styled from "styled-components";
import { About, Description, Image } from "./Styles";

//Importing useScroll
import { useScroll } from "./useScroll";
import { scrollAnim } from "../animation";
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollAnim}
    >
      <Description>
        <h2>
          High <span>quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>On time</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="services" />
      </Image>
    </Services>
  );
};

//Styling
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  .icon {
    display: flex;
    flex-basis: 20rem;
    h3 {
      margin-left: 1rem;
      padding: 0.75rem;
      color: black;
      background: white;
    }
  }
`;
export default ServicesSection;
