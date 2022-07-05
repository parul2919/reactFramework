/** ***** TRUNCATE TEXT ********
 * This function allows to slugify give string with hyphenated input
 * PARAMETERS :: text
 * Ex:: slugify("Hello, everyone!"); // hello-everyone
 */

const slugify = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof str} provided`);
    return text;
  }
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export default slugify;
