import { css } from "styled-components";

export default css`
  .checkbox {
    display: inline-block;
    color: ${(props) => props.theme.colorWhite};
    cursor: pointer;
    position: relative;
    vertical-align: middle;
    margin: 0 !important;
    height: 25px;
  }

  .checkbox .check-box-effect {
    display: inline-block;
    position: relative;
    background-color: transparent;
    width: 25px;
    height: 25px;
    border: 1px solid ${(props) => props.theme.colorMcdBlack};
    border-radius: 10%;
  }

  .checkbox .check-box-effect:before {
    content: "";
    width: 0px;
    height: 2px;
    border-radius: 2px;
    background: ${(props) => props.theme.colorMcdBlack};
    position: absolute;
    transform: rotate(45deg);
    top: 13px;
    left: 9px;
    transition: width 50ms ease 50ms;
    transform-origin: 0% 0%;
  }

  .checkbox .check-box-effect:after {
    content: "";
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: ${(props) => props.theme.colorMcdBlack};
    position: absolute;
    transform: rotate(305deg);
    top: 16px;
    left: 10px;
    transition: width 50ms ease;
    transform-origin: 0% 0%;
  }

  .checkbox:hover .check-box-effect:before {
    width: 5px;
    transition: width 100ms ease;
  }

  .checkbox:hover .check-box-effect:after {
    width: 10px;
    transition: width 150ms ease 100ms;
  }

  input[type="checkbox"] {
    display: none !important;
  }

  input[type="checkbox"]:checked + .check-box-effect {
    background-color: ${(props) => props.theme.colorWhite} !important;
    transform: scale(1.25);
  }

  input[type="checkbox"]:checked + .check-box-effect:after {
    width: 10px;
    background: ${(props) => props.theme.colorMcdBlack};
    transition: width 150ms ease 100ms;
  }

  input[type="checkbox"]:checked + .check-box-effect:before {
    width: 5px;
    background: ${(props) => props.theme.colorMcdBlack};
    transition: width 150ms ease 100ms;
  }

  input[type="checkbox"]:checked:hover + .check-box-effect {
    background-color: ${(props) => props.theme.colorLightGrey};
    transform: scale(1.25);
  }

  input[type="checkbox"]:checked:hover + .check-box-effect:after {
    width: 10px;
    background: ${(props) => props.theme.colorDarkGrey};
    transition: width 150ms ease 100ms;
  }

  input[type="checkbox"]:checked:hover + .check-box-effect:before {
    width: 5px;
    background: ${(props) => props.theme.colorDarkGrey};
    transition: width 150ms ease 100ms;
  }
`;
