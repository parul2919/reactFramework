import { css } from "styled-components";

export default css`
  background: ${(props) => props.theme.colorLightGrey};
  position: fixed;
  width: 100%;
  z-index: 9;
  top: 0;
`;
