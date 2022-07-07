import { css } from "styled-components";

export default css`
  &.techStack {
    ul {
      li {
        list-style: none;
        padding: 8px 0;
      }
    }
    a {
      color: ${(props) => props.theme.colorLink};
    }
    b {
      color: ${(props) => props.theme.colorMcdRed};
    }
  }
`;
