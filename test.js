const { cons, cdr, car, isNull, isPair } = require('./scheme/cons')
const { and, or, not } = require('./scheme/logic')
const { list } = require('./scheme/struct')
const { map, forEach, filter, accumulate } = require('./scheme/method')
const { add, sub, div, mul, rem } = require('./scheme/calcu')

console.log(
    accumulate(
        add,
        0,
        filter(
            list(
                list(1, 2, 3, 4),
                list(5, 6, 7, 8),
                list(5, 6, 7, 8)),
            a => a % 2 == 0))
)
console.log("done")