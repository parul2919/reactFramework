/** ***** GET SET REMOVE LOCAL-STORAGE ********
 * This function allows to do local storage operations
 * PARAMETERS :: data , key
 * var person = { "name": "billy", "age": 23};
 * Ex:: store_data(person, personObj )
 */

export const store_data = (data, key) => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const get_data = (key) => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  const item = localStorage.getItem(key);

  if (!item) {
    return;
  }
  return JSON.parse(item);
};

export const remove_data = (key) => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  localStorage.removeItem(key);
};
