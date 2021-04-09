//FD 函式傳統定義語法
function sumFD(a, b) {
  return a + b
}

console.log(sumFD(1, 2))

//FE 函式表達式語法
const sumFE = function (a, b) {
  return a + b
}

console.log(sumFE(1, 2))

// 箭頭函式
const sumArrow = (a, b) => a + b

console.log(sumArrow(1, 2))
