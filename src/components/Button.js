import styled from "styled-components";

export const Button = styled.a`
  :link,
  :visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all 0.2s;
    position: relative;
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 2);
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 2);
  }
  ::before {
    content: "🚀";
  }
  ::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  @keyframes moveInButton {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const ButtonWhite = styled(Button)`
  background-color: #ffffff;
  color: #777777;
  ::after {
    background-color: #ffffff;
  }
`;

export const ButtonAnimated = styled(ButtonWhite)`
  animation: moveInButton 0.5s ease-out 0.75;
  animation-fill-mode: backwards;
`;
