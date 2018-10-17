import React from "react";
import styled from "styled-components";
import Hero from "../resources/img/hero.jpg";
import LogoWhite from "../resources/img/logo-white.png";

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
  position: relative;

  .logo-box {
    position: absolute;
    top: 40px;
    left: 40px;
  }
  .logo {
    height: 35px;
  }

  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .heading-primary {
    color: #ffffff;
    text-transform: uppercase;
  }

  .heading-primary-main {
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
  }
  .heading-primary-sub {
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.4px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo-box">
        <img src={LogoWhite} alt="logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
      </div>
    </StyledHeader>
  );
};

export default Header;