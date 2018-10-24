import { createGlobalStyle } from "styled-components";

const Utilities = createGlobalStyle`
.clearfix {
  &::after{
    content:"";
    display: table;
    clear: both;
  }
}

.u-center-text {
  text-align: center;
}

.u-margin-bottom-big {
  margin-bottom: 8rem;
}
.u-margin-bottom-medium {
  margin-bottom: 4rem;
}
.u-margin-bottom-small {
  margin-bottom: 1.5rem;
}
`;
export default Utilities;
