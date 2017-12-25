function tailCallOptimize(f) {  
  let value
  let active = false
  const accumulated = []
  return function accumulator() {
    accumulated.push(arguments)
    if (!active) {
      active = true
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift())
      }
      active = false
      return value
    }
  }
}

// Example
const f = tailCallOptimize(function(n, a = 0, b = 1) {  
  if (n === 0) return a
  return f(n - 1, b, a + b)
})
