/** ***** VALIDATION UTIL ********
 * This function is having validation rules for form input
 * PARAMETERS :: value
 * Ex:: validEmail("abc") // {false, "Please fill input with valid email id"}
 * Ex:: validEmail("abc@abc.com") // {true, ""}
 */

export const validEmail = (value) => {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const isValid = regex.test(value);
  const error = isValid ? "" : "Please fill input with valid email id";
  return { isValid, error };
};

export const validNumericNonEmptyInput = (value) => {
  const regex = RegExp(/^[+]?([1-9]+\.?[0-9]*|\.[0-9]+)$/);
  const isValid = regex.test(value);
  const error = isValid ? "" : "Please fill input with valid number";
  return { isValid, error };
};

export const validAlphaNumericInput = (value) => {
  const regex = RegExp(/^(?!\s*$).+[^0-9]/);
  const isValid = regex.test(value);
  const error = isValid
    ? ""
    : "Please fill input with valid alphanumeric value";
  return { isValid, error };
};

export const validNumericWithEmptyInput = (value) => {
  const regex = RegExp(/^([+-]?[0-9]\d*|0)$|^$/);
  const isValid = regex.test(value);
  const error = isValid ? "" : "Please enter valid number";
  return { isValid, error };
};

export const validNumericWithDecimals = (value) => {
  const regex = RegExp(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/);
  const isValid = regex.test(value);
  const error = isValid ? "" : "Please enter valid number eg: 23.354";
  return { isValid, error };
};

export const validSelect = (value) => {
  const regex = RegExp(/.*\S.*/);
  const isValid = regex.test(value);
  const error = isValid ? "" : "Please select valid option";
  return { isValid, error };
};
