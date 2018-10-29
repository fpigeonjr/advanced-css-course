import React from "react";
import nat1 from "../resources/img/nat-1-large.jpg";
import nat2 from "../resources/img/nat-2-large.jpg";
import nat3 from "../resources/img/nat-3-large.jpg";
import styled from "styled-components";

const CompositionStyles = styled.div`
  position: relative;
  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
`;

const CompositionPhoto = styled.img`
  width: 55%;
  box-shadow: 0 1.5rem 4rem ${props => props.theme.colorTranslucentBlack};
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  transition: all 0.2s;
  outline-offset: 2rem;
  &:hover {
    outline: 1.5rem solid ${props => props.theme.colorPrimary};
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem ${props => props.theme.colorTranslucentBlack};
    z-index: 20;
  }
`;

const CompositionPhoto1 = styled(CompositionPhoto)`
  left: 0;
  top: -2rem;
`;

const CompositionPhoto2 = styled(CompositionPhoto)`
  right: 0;
  top: 2rem;
`;

const CompositionPhoto3 = styled(CompositionPhoto)`
  left: 20%;
  top: 10rem;
`;

const Composition = () => {
  return (
    <CompositionStyles className="composition">
      <CompositionPhoto1
        src={nat1}
        alt="nature"
        className="composition__photo composition--p1"
      />
      <CompositionPhoto2
        src={nat2}
        alt="nature"
        className="composition__photo composition--p2"
      />
      <CompositionPhoto3
        src={nat3}
        alt="nature"
        className="composition__photo composition--p3"
      />
    </CompositionStyles>
  );
};

export default Composition;
