const { cons, cdr, car } = require('./cons')
const { list } = require('./scheme/struct')

const _BLANK_ = Symbol('blank')
const _NODE_ = Symbol('node')

const _addName = (a) => {
    const b = a
    b[_NODE_ ] = true
    return b
}

const node = (value, left, right) => (
    list(value, left, right)
)

const get_node_value = (node) => (
    cdr(node)
)

const to_left = (node)=>(
    cdr(car(node))
)

const to_left = (node)=>(
    cdr(car(car(node)))
)

const is_left

