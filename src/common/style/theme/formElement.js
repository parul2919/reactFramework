import styled from "styled-components";
import colors from "./colors";

export const Input = styled.input`
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid ${colors.LIGHT_GREY};
  height: 25px;
`;
export const Select = styled.select`
  width: 212px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid ${colors.LIGHT_GREY};
  height: 35px;
`;

const formElements = { Input, Select };
export default formElements;
