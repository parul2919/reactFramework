import { css } from "styled-components";

export default css`
  &.projectStruct {
    .folder-struct {
      .folder-specs {
        width: 100%;
        margin: 20px 0 30px;
        border-bottom: 1px dashed #cdcdcd;
        padding-bottom: 30px;
        display: flex;
        h3 {
          border-bottom: 2px solid #ddd;
          padding-bottom: 10px;
          margin: 0;
        }
        .folder-details {
          max-width: 350px;
        }
        img {
          width: auto;
          height: auto;
          max-width: 350px;
          border: 1px dotted #999;
          margin-right: 30px;
        }
      }
      .common-folder {
        max-width: 100%;
        margin: 0;
        width: 100%;
        div {
          max-width: 100%;
          margin: 0;
          width: 100%;
        }
        img {
          max-width: 350px;
          margin: 15px;
          border: 2px dotted #999;
          padding: 8px;
        }
      }
      ul {
        padding-left: 15px;
        margin-top: 10px;
        li {
          list-style: none;
          padding: 5px 0;
          b {
            color: blue;
          }
        }
      }
    }
  }
`;
