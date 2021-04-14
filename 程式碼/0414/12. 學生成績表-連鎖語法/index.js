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
dataTable.innerHTML = `<thead><tr>${rawDataArray[0]
  .replaceAll('"', '')
  .split(',')
  .map((v) => `<th>${v}</th>`)
  .join('')}</tr></thead>`

// 呈現資料
dataTable.innerHTML += `<tbody>${rawDataArray
  .slice(1)
  .map(
    (v) =>
      `<tr>${v
        .replaceAll('"', '')
        .split(',')
        .map((v) => `<td>${v}</td>`)
        .join('')}
      </tr>`
  )
  .join('')}</tbody>`
