import { createGlobalStyle } from "styled-components";

const Utilities = createGlobalStyle`
.clearfix {
  &::after{
    content:"";
    display: table;
    clear: both;
  }
}

.u-center-text{
  text-align: center;
}

.u-margin-bottom-8{
  margin-bottom: 8rem;
}
`;
export default Utilities;
