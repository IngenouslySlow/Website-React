import React from "react";

////Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

//Styled thing
import styled from "styled-components";

import ScrollTop from "../Components/ScrollTop";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h1 variants={titleAnim}>Stay in touch.</motion.h1>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <motion.h1>Send us a message</motion.h1>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <motion.h1>Send us an email</motion.h1>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <motion.h1>Contact us in twitter</motion.h1>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

//Styling components
const ContactStyle = styled(motion.div)`
  min-height: 90vh;
  color: #353535;
  padding: 5rem 10rem;
`;
const Title = styled(motion.div)`
  margin-bottom: 3rem;
  color: black;
`;
const Hide = styled(motion.div)`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    color: #000;
    padding-left: 2rem;
  }
`;
const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: #000;
`;
export default Contact;
