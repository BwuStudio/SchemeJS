const { cons, cdr, car } = require('./cons')

const and = (a, b) => (a && b)

const or = (a, b) => (a || b)

const not = (a) => (!a)


module.exports = { and, or, not }