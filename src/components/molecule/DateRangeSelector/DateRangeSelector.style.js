import { css } from "styled-components";

export default css`
  border: 1px solid #d8d8d8;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  .submit-date,
  .remove {
    position: absolute;
    left: 10px;
    font-size: 14px;
    padding: 8px 0;
    width: 100px;
  }
  .submit-date {
    bottom: 60px;
  }
  .remove {
    bottom: 15px;
  }
  .rdrInputRanges {
    display: none;
  }
  .rdrMonth {
    padding: 0 20px 10px;
  }
  .rdrDefinedRangesWrapper {
    font-size: 14px;
    width: 120px;
  }
  .rdrStaticRange {
    border-bottom: none;
  }
  .rdrStaticRangeLabel {
    padding: 12px 10px;
  }
  .rdrStaticRange:hover .rdrStaticRangeLabel,
  .rdrStaticRange:focus .rdrStaticRangeLabel {
    background: rgba(0, 0, 0, 0.04);
  }
`;
