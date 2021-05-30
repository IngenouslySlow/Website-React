import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { About, Description, Hide, Image } from "./Styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>Faq</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              ratione!
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              ratione!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              ratione!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              ratione!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
