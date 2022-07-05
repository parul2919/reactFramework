import { css } from "styled-components";

export default css`
  &.dummy-organism {
    &--text {
      color: ${(props) => props.theme.colorMcdBlack};
      font-size: ${(props) => props.theme.fontS};
      padding: 10px 20px;
      text-align: justify;
      @media ${(props) => props.theme.tabletMediaQuery} {
      }
    }
  }
`;
