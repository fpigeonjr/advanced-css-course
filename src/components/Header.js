import React from "react";
import styled from "styled-components";
import Hero from "../resources/img/hero.jpg";
import LogoWhite from "../resources/img/logo-white.png";
import { ButtonAnimated } from "./Button";

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
    text-align: center;
  }

  .heading-primary {
    color: #ffffff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 60px;
  }

  .heading-primary-main {
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    /* animation-delay: 3s;
      animation-iteration-count: 3;
     */
  }
  .heading-primary-sub {
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.4px;
    animation: moveInRight 1s ease-out;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    80% {
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
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
        <ButtonAnimated href="#">Discover our tours</ButtonAnimated>
      </div>
    </StyledHeader>
  );
};

export default Header;
