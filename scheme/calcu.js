
/**
 * function "+"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => (
    a + b
)

/**
 * function "-"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const sub = (a, b) => (
    a - b
)

/**
 * function "/"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const div = (a, b) => (
    a / b
)

/**
 * function "*"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const mul = (a, b) => (
    a * b
)

/**
 * function "%"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const rem = (a, b) => (
    a % b
)

module.exports = { add, sub, div, mul, rem }