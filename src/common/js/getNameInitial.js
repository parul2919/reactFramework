/** ***** GENERATE RANDOM NUMBERS ********
 * This function allows to get name initials
 * PARAMETERS :: name eg : parul gupta / parul-gupta / parul_gupta
 * Ex:: getNameInitials("parul gupta") // PG
 */

const getNameInitials = (name) => {
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
  let initials = [...name.matchAll(rgx)] || [];
  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();
  return initials;
};

export default getNameInitials;
