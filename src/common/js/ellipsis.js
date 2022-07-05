/** ***** TRUNCATE TEXT ********
 * This function allows to tructate string with defined character limit and adds ellipsis at end
 * PARAMETERS :: text , charLength, ellipsisCount
 * Default given limit:: charlength -> 256 , ellipsisCount -> 3
 * Ex:: shorten("I am some text", 7, 2);
 */

const shorten = (text, charLength = 256, ellipsisCount = 3) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`expecting a string, ${typeof text} provided`);
    return "";
  }
  if (Number.isNaN(charLength) || Number.isNaN(ellipsisCount)) {
    console.error("charLength and ellipsisCount must be valid numbers");
    return;
  }

  if (text.length <= charLength) {
    return text;
  }
  const ellipsis = Array.from(Array(ellipsisCount))
    .map(() => ".")
    .join("");
  return `${text.substr(0, charLength)}${ellipsis}`;
};

export default shorten;
