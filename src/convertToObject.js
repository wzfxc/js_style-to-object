'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styleLines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (const str of styleLines) {
    let [key, value] = str.split(':', 2);

    if (value) {
      value = value.trim();
    }
    key = key.trim();
    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
