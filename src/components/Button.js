import styled from "styled-components";

export const Button = styled.a`
  :link,
  :visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: ${props => props.theme.defaultFontSize};
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem ${props => props.theme.colorTranslucentBlack};
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem ${props => props.theme.colorTranslucentBlack};
  }

  ::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  @keyframes moveInButton {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const ButtonWhite = styled(Button)`
  background-color: ${props => props.theme.colorWhite};
  color: ${props => props.theme.colorGreyDark};
  ::after {
    background-color: ${props => props.theme.colorWhite};
  }
`;

export const ButtonWhiteAnimated = styled(ButtonWhite)`
  animation: moveInButton 0.5s ease-out 0.75;
  animation-fill-mode: backwards;
`;

export const ButtonText = styled.a`
  &:link,
  &:visited {
    font-size: ${props => props.theme.defaultFontSize};
    color: ${props => props.theme.colorPrimary};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.colorPrimary};
    padding: 3px;
    transition: all 0.2s;
  }
  &:hover {
    background-color: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.colorWhite};
    transform: translateY(-2px);
    box-shadow: 0 1rem 2rem ${props => props.theme.colorTranslucentBlack};
  }
  &:active {
    box-shadow: 0 0.5rem 1rem ${props => props.theme.colorTranslucentBlack};
    transform: translateY(0);
  }
`;
