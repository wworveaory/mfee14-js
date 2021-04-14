// csv檔內的內容
const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

// 獲取DOM元素介面物件
// table
const dataTable = document.getElementById('dataTable')

// 用換行符號(\n) 取得多行陣列
const rawDataArray = rawData.split('\n')

// 取代(")為空白字元，然後分割成新的陣列
// headingArray = ["學生姓名","國文","數學","英文"]
const headingArray = rawDataArray[0].replaceAll('"', '').split(',')

let headingDisplay = ''

for (let i = 0; i < headingArray.length; i++) {
  headingDisplay += `<th>${headingArray[i]}</th>`
}

// // 呈現標題
// dataTable.innerHTML = `<thead><tr>${headingDisplay}</tr></thead>`
