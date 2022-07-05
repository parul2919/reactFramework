/* eslint-disable no-restricted-syntax */
/** ***** CASING CONVERSION ********
 * This function allows to chnage casing of given "string without spaces" to the desired one
 * PARAMETERS :: text
 * Default timeout:: timeout -> 2500ms
 * snakeToCamelCase("snake_case_to_camel_case"); // snakeCaseToCamelCase
 * camelToSnakeCase("camelCaseToSnakeCase"); // camel_case_to_snake_case
 * toCamelCase("hello-world_cheCk"); // helloWorldCheck
 */

export const camelToSnakeCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);

    return text;
  }
  return text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export const snakeToCamelCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  text
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
};

export const toCamelCase = (text) => {
  let newText = "";
  if (text) {
    const wordArr = text.split(/[-_]/g);
    for (const i in wordArr) {
      if (i > 0) {
        newText += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newText += wordArr[i];
      }
    }
  } else {
    return newText;
  }
  return newText;
};
