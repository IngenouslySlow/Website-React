import React from "react";
import styled from "styled-components";
import { About, Description, Hide, Image } from "./Styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>Faq</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};
//Styles

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
    background: #ccc;
    margin: 1.5rem 0;
    width: 100%;
    height: 0.2rem;
  }
  .question {
    padding: 1.5rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 0.5rem 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;
export default FaqSection;
