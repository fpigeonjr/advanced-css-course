import React from "react";
import styled from "styled-components";
import Hero from "../resources/img/hero.jpg";
import LogoWhite from "../resources/img/logo-white.png";
import { ButtonWhiteAnimated } from "./Button";

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

  .header__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }
  .header__logo {
    height: 3.5rem;
  }

  .header__text-box {
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
    margin-bottom: 6rem;
  }

  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    /* animation-delay: 3s;
      animation-iteration-count: 3;
     */
  }
  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
    animation: moveInRight 1s ease-out;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    80% {
      transform: translateX(1rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }
    80% {
      transform: translateX(-1rem);
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
      <div className="header__logo-box">
        <img src={LogoWhite} alt="logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub"> is where life happens</span>
        </h1>
        <ButtonWhiteAnimated href="#">Discover our tours</ButtonWhiteAnimated>
      </div>
    </StyledHeader>
  );
};

export default Header;
