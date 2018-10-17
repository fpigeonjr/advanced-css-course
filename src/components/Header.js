import React from "react";
import styled from "styled-components";
import Hero from "../resources/img/hero.jpg";

const StyledHeader = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    ),
    url(${Hero});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

const Header = () => {
  return <StyledHeader>Some text...</StyledHeader>;
};

export default Header;
