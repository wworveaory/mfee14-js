// 提升特性 hoist
//sum會被提升，可以呼叫
console.log(sum(1, 2))
//sum2只有名字被提升，但因未進行初始化無法呼叫，產生致命中斷錯誤
console.log(sum2(1, 2))

//函式定義(FD) - 使用有名稱的函式
function sum(a, b) {
  return a + b
}

//函式表達式(FE) - 常數指定為匿名函式
const sum2 = function (a, b) {
  return a + b
}
