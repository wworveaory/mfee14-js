const aArray = [1, 2, 3, 4, 5, 3]

// for: 刪除3成員，變為[1,2,4,5]
const bArray = []
for (let i = 0; i < aArray.length; i++) {
  if (aArray[i] === 3) continue
  bArray.push(aArray[i])
}

// filter: 刪除3成員，變為[1,2,4,5]
const cArray = aArray.filter(function (value, index, array) {
  return value !== 3
})

//const cArray = aArray.filter((value)=> value !== 3)
