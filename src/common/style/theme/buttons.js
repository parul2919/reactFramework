import { css } from "styled-components";

export default css`
  .button {
    font-family: ${(props) => props.theme.speedeeNormal};
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
  }
  .button--full {
    width: 100%;
  }
  .button--grey {
    background: ${(props) => props.theme.colorLightGrey};
    border: 1px solid ${(props) => props.theme.colorGrey};
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover {
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
  .button--disable {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
  .button--link {
    color: ${(props) => props.theme.colorLink};
    border-bottom: 1px solid ${(props) => props.theme.colorLink};
    border-radius: 0px;
    padding: 0px;
    font-size: 14px;
    &:hover {
      text-decoration: none;
    }
  }
  .button--gold {
    background: ${(props) => props.theme.colorMcdGold};
    border: 1px solid ${(props) => props.theme.colorMcdGold};
    color: ${(props) => props.theme.white};
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover {
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
  .button--lined {
    background: ${(props) => props.theme.colorMcdWhite};
    color: ${(props) => props.theme.colorMcdBlack};
    border: 1px solid ${(props) => props.theme.colorMcdBlack};
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover {
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
  .button--danger {
    background: ${(props) => props.theme.colorMcdWhite};
    color: ${(props) => props.theme.colorMcdRed};
    border: 1px solid ${(props) => props.theme.colorMcdRed};
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover {
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
`;
