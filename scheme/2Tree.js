const { cons, cdr, car } = require('./cons')
const { list } = require('./scheme/struct')

const _BLANK_ = Symbol('blank')
const _NODE_ = Symbol('node')

const _addName = (a) => {
    const b = a
    b[_NODE_] = true
    return b
}

const node = (value, left, right) => (
    list(value, left, right)
)

const isNode = (node) => (
    typeof node !== 'function' ? false
        : node[_NODE_] === true ? true
            : fasle
)

const getNodeValue = (node) => (
    cdr(node)
)

const getLeft = (node) => (
    cdr(car(node))
)

const getRight = (node) => (
    cdr(car(car(node)))
)

tst




