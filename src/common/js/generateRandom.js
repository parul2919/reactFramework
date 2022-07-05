/* eslint-disable consistent-return */
/** ***** GENERATE RANDOM NUMBERS ********
 * This function allows to geterate random numbers based on defined upper & lower limit
 * PARAMETERS :: lowerLimit , upperLimit
 * Default given limit:: lower -> 0 , upper -> 10
 * Ex:: getRandomNumberInRange(2,18)
 */

const getRandomNumberInRange = (lower = 0, upper = 10) => {
  let lowerRange = lower;
  let upperRange = upper;
  if (Number.isNaN(lower) || Number.isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return;
  }
  lowerRange = Math.ceil(lower);
  upperRange = Math.floor(upper);
  const random =
    Math.floor(Math.random() * (upperRange - lowerRange + 1)) + lowerRange;
  return random;
};

export default getRandomNumberInRange;
