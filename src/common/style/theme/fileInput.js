import { css } from "styled-components";

export default css`
  .file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .file-icon {
    width: 20px;
    height: 20px;
  }
  .file-input::before {
    content: "Select From Desktop";
    display: inline-block;
    background: #d8d8d8;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    width: 250px;
    height: 20px;
  }
  .file-input:hover::before {
    border-color: black;
  }
  .file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;
