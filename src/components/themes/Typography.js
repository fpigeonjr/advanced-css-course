import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  .heading-secondary{
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, ${props =>
      props.theme.colorPrimaryLight}, ${props =>
  props.theme.colorPrimaryDark} );
  
  transition: all .2s;
  letter-spacing: 2px;
  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: .5rem 1rem 2rem ${props => props.theme.colorTranslucentBlack};
  }

  }

  .heading-tertiary{
    font-size: ${props => props.theme.defaultFontSize};
    font-weight: 700;
    text-transform: uppercase;
  }

  .paragraph{ 
    font-size: ${props => props.theme.defaultFontSize};
    &:not(:last-child){
      margin-bottom: 3rem;
    }
  }
`;

export default Typography;
