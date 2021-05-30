import React from "react";
import home1 from "../img/home1.png";

//Styled Components thing
// import styled from "styled-components";
import { About, Hide, Description, Image } from "./Styles";

//Framer motion thing
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, zoomAnim } from "../animation";

//The wave
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for any photography and videography ideas you have. We have
          professionals with amazing skills to help you achieve it
        </motion.p>
        <motion.button variants={fadeAnim}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={zoomAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
