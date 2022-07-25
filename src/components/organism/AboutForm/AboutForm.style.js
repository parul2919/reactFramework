import { css } from "styled-components";

export default css`
  color: black;
  margin: 90px auto 60px;
  .form-block {
    width: 500px;
    border: 1px solid ${(props) => props.theme.colorMcdBlack};
    height: 200px;
    margin: auto;
    padding: 40px;
  }
  .submit {
    width: 100px;
    padding: 8px;
    cursor: pointer;
    margin-top: 25px;
  }
`;
