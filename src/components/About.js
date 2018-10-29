import React from "react";
import styled from "styled-components";
import { Row, Col1of2 } from "./Grid";
import { ButtonText } from "./Button";
import Composition from "./Composition";

const SectionAbout = styled.div`
  background-color: ${props => props.theme.colorGreyLight1};
  padding: 25rem 0;
  margin-top: -20vh;
`;

const About = () => {
  return (
    <SectionAbout className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <Row>
        <Col1of2 className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            fugit quos reiciendis saepe dicta vitae hic laboriosam voluptatem
            voluptate eligendi adipisci itaque debitis fugiat, consectetur quod
            repellendus porro nobis possimus!
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never had before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            fugit quos reiciendis saepe dicta vitae hic laboriosam voluptatem
            voluptate eligendi adipisci itaque.
          </p>
          <ButtonText href="#">Learn More &rang;</ButtonText>
        </Col1of2>
        <Col1of2 className="col-1-of-2">
          <Composition />
        </Col1of2>
      </Row>
    </SectionAbout>
  );
};

export default About;
