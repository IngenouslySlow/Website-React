import React from "react";
import styled from "styled-components";
//Router thing
import { Link } from "react-router-dom";
const Nav = () => {
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
        </li>
        <li>
          <Link href="#" to="/work">
            2. Our Work
          </Link>
        </li>
        <li>
          <Link href="#" to="/contact">
            3. Contact Us
          </Link>
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
export default Nav;
