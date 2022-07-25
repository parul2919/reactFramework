import { css } from "styled-components";

export default css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.navbar {
    max-width: 1440px;
    margin: auto;
    flex-wrap: wrap;
    @media ${(props) => props.theme.tabletMediaQuery} {
      flex-wrap: nowrap;
    }
  }
`;
