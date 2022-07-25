import { css } from "styled-components";

export default css`
  .sub-menu {
    position: absolute;
    .sub-menu-* {
      padding: 0;
    }
  }
  .navbar-nav {
    flex-wrap: wrap;
    &.sub-menu-1,
    &.sub-menu-2 {
      display: none;
    }
    .nav-link {
      color: ${(props) => props.theme.colorMcdBlack};
      padding: 12px;
      cursor: pointer;
      text-decoration: none;
    }
    li {
      list-style: none;
      position: relative;
      &.active {
        text-decoration: underline;
        a {
          color: ${(props) => props.theme.colorLink};
        }
      }
      &.dropdown-show {
        .sub-menu-1 {
          display: block;
          .dropdown-show {
            .sub-menu-2 {
              display: block;
            }
          }
          .dropdown-hide {
            .sub-menu-2 {
              display: none;
            }
          }
        }
      }
      &.dropdown-hide {
        .sub-menu-1,
        .sub-menu-2 {
          display: none;
        }
      }
    }

    @media ${(props) => props.theme.tabletMediaQuery} {
      flex-wrap: nowrap;
      display: flex;
    }
  }
`;
