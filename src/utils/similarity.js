/**
 * Similarity Function
 *
 * This function analyse a string and an array of objects and
 * search for similarities between then.
 *
 * @param   Number    required
 * @param   Array     required
 * @returns Array
 *
 */
export function similarity(text, array, fieldsToCompare) {
  const similar = [];
  if (text === "") {
    return similar;
  }
  array.map((obj, index, a) => {
    if (isSimilar(text.toLowerCase(), obj, fieldsToCompare)) {
      similar.push(obj);
    }
  });

  return similar;
}

/**
 * Is Similar function
 *
 * This function says if the there's any degree of
 * similarity between the text and the object
 *
 * @example
 *  isSimilar("A", {field1: "Today is sunny", field2: [], field3: {}}, [field1]); // true
 *  isSimilar("Z", {field1: "Today is sunny", field2: "Today is not sunny", field3: {}}, [field1, field2]); // false
 *
 * @param   string  required
 * @param   object  require
 * @returns     boolean
 */
function isSimilar(text, object, fieldsToCompare) {
  let similar = false;
  fieldsToCompare.map((field) => {
    if (object[field].includes(text)) {
      similar = true;
    }
  });
  return similar;
}
