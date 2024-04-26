/**
 * Get a random value from the given array.
 * @param {array} array - An array with some values.
 * @returns {*} A random value from the given array.
 */
function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate an array of random values from an array.
 * @param {array} src - The array values are coming from.
 * @param {number} number - The number of value to get.
 * @param {array} dst - Previously selected values.
 * @returns {array} Selected values
 */
export function getSomeRandomValues(src, number, dst=[]) {
    if (src.length === number) return src;
    if (src.length < number) return [];

    // Get a random value
    const newValue = getRandomValue(src);

    // Add the value to destination array
    if (!dst.includes(newValue)) dst.push(newValue);

    // Enough values => STOP
    if (dst.length >= number) return dst;

    // Recursively pick next values
    return getSomeRandomValues(src, number, dst);
}