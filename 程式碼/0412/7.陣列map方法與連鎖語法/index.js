const aArray = [1, 2, 3, 4]
const newArray = aArray
  .map((v) => v + 100)
  .map((v) => v * 2)
  .map((v) => v - 50)

//原陣列不會被修改
console.log(aArray) // [1, 2, 3, 4]
console.log(newArray) // 
