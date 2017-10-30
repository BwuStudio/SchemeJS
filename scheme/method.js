const { cons, cdr, car, isNull, isPair, isCons } = require('./cons')
const { and, or, not } = require('./logic')
const { isEnd, _END_ } = require('./struct')

const map = (tree, func) => (
    isEnd(tree) ? _END_
        : not(isCons(tree)) ? func(tree) :
            cons(
                map(cdr(tree), func),
                map(car(tree), func))
)


const forEach = (tree, func) => {
    isEnd(tree) ? _END_
        : not(isCons(tree)) ? func(tree)
            : cons(
                map(cdr(tree), func),
                map(car(tree), func))
}

const filter = (tree, func) => (
    isEnd(tree) ? _END_
        : not(isCons(tree)) ?
            func(tree) ? tree
                : _END_
            : cons(
                filter(cdr(tree), func),
                filter(car(tree), func))
)

const accumulate = (op, init, tree) => (
    isEnd(tree) ? init
        : not(isCons(tree)) ? tree
            : op(
                accumulate(op, init, cdr(tree)),
                accumulate(op, init, car(tree))
            )
)

module.exports = { map, forEach, filter ,accumulate}