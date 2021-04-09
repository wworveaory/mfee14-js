const x = 888

function sum(a, b) {
  const y = 999

  function inner(c) {
    const z = 777
    console.log('x,y,z=', x, y, z)
    console.log(a + b + c)
  }

  return inner
}

// const newSum = sum(1, 2)
// console.log(newSum)
// newSum()
sum(10, 100)(5)
