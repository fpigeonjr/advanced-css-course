import React from "react";
import styled from "styled-components";

const Row = styled.div.attrs({ className: "clearfix" })`
  max-width: ${props => props.theme.gridWidth};
  background-color: ${props => props.theme.colorGreyLight};
  margin: 0 auto;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.gutterVertical};
  }
  [class^="col-"] {
    background-color: orangered;
    float: left;

    &:not(:last-child) {
      margin-right: ${props => props.theme.gutterHorizontal};
    }
  }
`;

const Col1of2 = styled.div`
  width: calc((100% - ${props => props.theme.gutterHorizontal}) / 2);
`;

const Col1of3 = styled.div`
  width: calc((100% - 2 * ${props => props.theme.gutterHorizontal}) / 3);
`;

const Col2of3 = styled.div`
  width: calc(
    2 * ((100% - 2 * ${props => props.theme.gutterHorizontal}) / 3) +
      ${props => props.theme.gutterHorizontal}
  );
`;

const Col1of4 = styled.div`
  width: calc((100% - 3 * ${props => props.theme.gutterHorizontal}) / 4);
`;

const Col2of4 = styled.div`
  width: calc(
    2 * ((100% - 3 * ${props => props.theme.gutterHorizontal}) / 4) +
      ${props => props.theme.gutterHorizontal}
  );
`;

const Col3of4 = styled.div`
  width: calc(
    3 * ((100% - 3 * ${props => props.theme.gutterHorizontal}) / 4) + 2 *
      ${props => props.theme.gutterHorizontal}
  );
`;

const Grid = () => {
  return (
    <section className="grid-test">
      <Row>
        <Col1of2 className="col-1-of-2">Col 1 of 2</Col1of2>
        <Col1of2 className="col-1-of-2">Col 1 of 2</Col1of2>
      </Row>

      <Row>
        <Col1of3 className="col-1-of-3">Col 1 of 3</Col1of3>
        <Col1of3 className="col-1-of-3">Col 1 of 3</Col1of3>
        <Col1of3 className="col-1-of-3">Col 1 of 3</Col1of3>
      </Row>

      <Row>
        <Col2of3 className="col-2-of-3">Col 2 of 3</Col2of3>
        <Col1of3 className="col-1-of-3">Col 1 of 3</Col1of3>
      </Row>

      <Row>
        <Col1of4 className="col-1-of-4">Col 1 of 4</Col1of4>
        <Col1of4 className="col-1-of-4">Col 1 of 4</Col1of4>
        <Col1of4 className="col-1-of-4">Col 1 of 4</Col1of4>
        <Col1of4 className="col-1-of-4">Col 1 of 4</Col1of4>
      </Row>

      <Row>
        <Col2of4 className="col-2-of-4">Col 2 of 4</Col2of4>
        <Col1of4 className="col-1-of-4">Col 1 of 4</Col1of4>
        <Col1of4 className="col-1-of-4">Col 1 of 4</Col1of4>
      </Row>

      <Row>
        <Col3of4 className="col-3-of-4">Col 3 of 4</Col3of4>
        <Col1of4 className="col-1-of-4">Col 1 of 4</Col1of4>
      </Row>
    </section>
  );
};

export default Grid;
