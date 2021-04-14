const aObj = { a: 1, b: 'b', c: { p: [1, 2] } }

// 簡單的深拷貝
const aCopyObj = JSON.parse(JSON.stringify(aObj))

// 淺拷貝
const bCopyObj = Object.assign({}, aObj)
// 淺拷貝
const cCopyObj = { ...aObj }
