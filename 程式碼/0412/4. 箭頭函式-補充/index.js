// 傳統定義法(FD)
function addOuter(a, b) {
  return function () {
    return a + b
  }
}

// 函式表達式(FE)
const addOuter1 = function (a, b) {
  return function () {
    return a + b
  }
}

// 箭頭函式初步改寫
const addOuter1 =  (a, b) => function () {
    return a + b
}

// 箭頭函式最後改寫
const addOuter2 = (a, b) => () => a + b
