// CSV檔的內容
const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

// 獲取dom元素介面物件
// table
const dataTable = document.getElementById('dataTable')

// 用分行符號取得多行陣列值
const rawDataArray = rawData.split('\n')

// 呈現標題
// headings = ["學生姓名", "國文", "數學", "英文"]
const headings = rawDataArray[0].replaceAll('"', '').split(',')

//使用for迴圈的語法

let headingDisplay = ''

for (let i = 0; i < headings.length; i++) {
  headingDisplay += `<th>${headings[i]}</th>`
}

dataTable.innerHTML = `<thead><tr>${headingDisplay}</tr></thead>`


// 呈現資料
let bodyDisplay = ''

for (let i = 1; i < rawDataArray.length; i++) {
  // ex. `"陳小花",90,65,77`
  const rows = rawDataArray[i].replaceAll('"', '').split(',')

  bodyDisplay += `<tr>`

  for (let j = 0; j < rows.length; j++) {
    bodyDisplay += `<td>${rows[j]}</td>`
  }

  bodyDisplay += `</tr>`
}

dataTable.innerHTML += `<tbody>${bodyDisplay}</tbody>`
