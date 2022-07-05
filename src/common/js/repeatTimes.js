/** ***** REPEAT  OPERATION X TIMES ********
 * This function allows to do required operation x times
 * PARAMETERS :: nob of times to repeat && Function that needs to run repeatedly
 * Ex:: repeatTimes(3, () => console.log("hello"))
 */
const repeatTimes = (times, func) => {
  if (Number.isNaN(times)) {
    console.error("times to run must be specified");
    return;
  }
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return;
  }
  Array.from(Array(times)).forEach(() => {
    func();
  });
};
export default repeatTimes;
