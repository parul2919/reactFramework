/** ***** GENERATE STRING HASHED VALUE ********
 * This function allows to get hashed value of giving string eg, email
 * PARAMETERS :: str
 * Ex:: hash("pargupta97@gmail.com")
 */
import { createHash } from "crypto";

const hash = (str) => {
  const string = str.toLowerCase();
  return createHash("sha256").update(string).digest("hex");
};

export default hash;
