function sum(a, b) {
  function inner() {
    console.log(a + b)
  }

  return inner
}

const newSum = sum(1, 2)

console.log(newSum)

newSum()

sum(99, 100)()
