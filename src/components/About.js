import React from "react";
import styled from "styled-components";
import { Row, Col1of2 } from "./Grid";

const SectionAbout = styled.div`
  background-color: ${props => props.theme.colorGreyLight1};
  padding: 25rem 0;
  margin-top: -20vh;
`;

const About = () => {
  return (
    <SectionAbout className="section-about">
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <Row>
        <Col1of2 className="col-1-of-2">Text Content</Col1of2>
        <Col1of2 className="col-1-of-2">Image Composition</Col1of2>
      </Row>
    </SectionAbout>
  );
};

export default About;
