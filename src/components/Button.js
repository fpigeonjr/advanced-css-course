import React from "react";
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
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 2);
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 2);

  }
`;

export const ButtonWhite = styled(Button)`
  background-color: #ffffff;
  color: #777777;
`;
