import React from "react";

//Importing components
import AboutSection from "../Components/AboutSection";
import FaqSection from "../Components/FaqSection";
import ServicesSection from "../Components/ServicesSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Importing scroll top
import ScrollTop from "../Components/ScrollTop";

const AbousUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AbousUs;
