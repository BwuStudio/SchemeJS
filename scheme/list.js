const { Cons, cdr, car } = require('./cons')
const _END_ = Symbol('end')

const isEnd = (m) => (
    m === _END_
)

const List = (...arg) => (
    arg[0] ? cons(arg[0], list(...arg.slice(1)))
        : _END_
)

module.exports = { List , isEnd, _END_ }
