import React from "react";
import styled from "styled-components";
//Router thing
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Link id="logo" to="/">
        Capture
      </Link>
      <ul>
        <li>
          <Link href="#" to="/">
            1. About us
          </Link>
          <Line
            transition={{ duration: 0.5, ease: "easeOut" }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link href="#" to="/work">
            2. Our Work
          </Link>
          <Line
            transition={{ duration: 0.5, ease: "easeOut" }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link href="#" to="/contact">
            3. Contact Us
          </Link>
          <Line
            transition={{ duration: 0.5, ease: "easeOut" }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

//Styled components
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  color: white;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", sans-serif;
    font-size: 1.2rem;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  li {
    padding: 0 3rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  position: absolute;
  bottom: -80%;
  left: 28%;
  height: 0.3rem;
  width: 0%;
  background: #23d997;
`;
export default Nav;
