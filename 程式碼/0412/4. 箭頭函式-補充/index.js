function addOuter(a, b) {
  return function () {
    return a + b
  }
}

const addOuter1 = function (a, b) {
  return function () {
    return a + b
  }
}

const addOuter2 = (a, b) => () => a + b
