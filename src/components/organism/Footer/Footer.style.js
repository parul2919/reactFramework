import { css } from "styled-components";

export default css`
  border-top: 1px solid ${(props) => props.theme.colorLightGrey};
  text-align: center;
  padding: 5px 0;
  position: relative;
  max-width: 1320px;
  margin: auto;
  .footer-logo {
    display: block;
  }
  .disclaimer-text {
    color: ${(props) => props.theme.colorMcdBlack};
    font-size: ${(props) => props.theme.fontS};
    padding: 5px 20px;
    text-align: justify;
    @media ${(props) => props.theme.tabletMediaQuery} {
    }
  }
`;
