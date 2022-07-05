import { css } from "styled-components";

export default css`
  background: ${(props) => props.theme.colorLightGrey};
  position: fixed;
  width: 100%;
  z-index: 9;
  top: 0;
  .navbar {
    max-width: 1440px;
    margin: auto;
    flex-wrap: wrap;
    @media ${(props) => props.theme.tabletMediaQuery} {
      flex-wrap: nowrap;
    }
  }
  .navbar-expand .navbar-collapse {
    justify-content: end;
  }
  .navbar-expand .navbar-nav {
    flex-wrap: wrap;
    @media ${(props) => props.theme.tabletMediaQuery} {
      flex-wrap: nowrap;
    }
  }
  a.nav-link {
    color: ${(props) => props.theme.colorMcdBlack};
    text-decoration: underline;
  }
`;
