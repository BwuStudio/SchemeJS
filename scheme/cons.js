const _CONS_ = Symbol('cons')

const _addName = (a) => {
    const b = a
    b[_CONS_] = true
    return b
}

const isCons = (a) => (
    typeof a !== 'function' ? false
        : a[_CONS_] ? true
            : false
)

const cons = (a, b) => (
    _addName((m) => (m(a, b))) 
)



const cdr = (cons) => (
    isCons(cons) ? cons((a, b) => a)
        : null
)


const car = (cons) => (
    isCons(cons) ? cons((a, b) => b)
        : null
)


const isNull = (a) => (
    !a && a !== 0 && a !== ''
)

const isPair = (a) => (
    !isNull(cdr(a)) && !isNull(car(a))
)


module.exports = { cons, cdr, car, isNull, isPair, isCons }