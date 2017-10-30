const { cons, cdr, car } = require('./cons')
const _END_ = Symbol('end')

const isEnd = (m) => (
    m === _END_
)

const list = (...arg) => (
    arg[0] ? cons(arg[0], list(...arg.slice(1)))
        : _END_
)

module.exports = { list , isEnd, _END_ }
