const twice = (f, value) => f(f(value))
const addOne = a => a + 1
const result = twice(addOne, 10)
console.log(result)

