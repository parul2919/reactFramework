/** ***** REMOVE ARRAY DUPLICATES ********
 * This function helps to remove all the duplicate values from an array
 * PARAMETERS :: array
 * Ex:: removeArrDuplicates(["Tom", "Simon", "Tom", "Sarah"])
 */

const removeArrDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    console.error(`array expected, ${typeof arr} provided`);
    return;
  }
  return [...new Set(arr)];
};
export default removeArrDuplicates;
