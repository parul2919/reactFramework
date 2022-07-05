/** ***** FUNCTION DELAY ********
 * This function allows to limit or hinder the execution of a function based on a given condition.
 * timer effectively retains it’s own state within this block (function). Every time debounce is called, timer is cleared.
 * PARAMETERS :: function , timeout in ms
 * Default timeout:: timeout -> 2500ms
 * 
 * eg function ::   
 * function consoling(){
    console.log('Checking input');
  }
 * const checkFunc = debounce(() => consoling());
 * calling checkFunc :: <button onclick="checkFunc()">Click me</button>
 */

const debounce = (func, timeout = 2500) => {
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return;
  }
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
export default debounce;
