// h1
const yearAndMonth = document.getElementById('yearAndMonth')
// thead
const title = document.getElementById('title')
// tbody
const data = document.getElementById('data')

// 呈現yearAndMonth
const now = new Date()

// 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)

//
const nowY = now.getFullYear()

// nowM =1-12
const nowM = now.getMonth() + 1 //注意回傳為 0~11

yearAndMonth.innerHTML = nowY + '/' + nowM

// 呈現標題
const weekDayList = ['日', '一', '二', '三', '四', '五', '六']

// for迴圈的寫法
let weekDayDisplay = ''

for (let i = 0; i < weekDayList.length; i++) {
  weekDayDisplay += `<th>${weekDayList[i]}</th>`
}

title.innerHTML = `<tr>${weekDayDisplay}</tr>`

// map的寫法
const weekDayDisplayMap = weekDayList
  .map(function (v) {
    return `<th>${v}</th>`
  })
  .join('')
title.innerHTML = `<tr>${weekDayDisplayMap}</tr>`

// 本月有幾天
// (上個月的最後一天是幾號)
const days = new Date(nowY, nowM, 0).getDate()

// 這個月的第一天是星期幾(0-6) (月份為0-11)
const firstDay = new Date(nowY, nowM - 1, 1).getDay()

// 本月所有日期的陣列資料
const daysDataArray = []

// 補前面的空白資料
for (let i = 0; i < firstDay; i++) {
  daysDataArray.push('')
}

// 加入本月所有的日期資料
for (let i = 0; i < days; i++) {
  daysDataArray.push(i + 1)
}

// 準備要呈現在網頁上
let daysDisplay = ''

for (let i = 0; i < daysDataArray.length; i++) {
  daysDisplay += `<td>${daysDataArray[i]}</td>`

  // 每7個要換行，加入'</tr><tr>'
  if ((i + 1) % 7 === 0) {
    daysDisplay += '</tr><tr>'
  }
}

data.innerHTML = `<tr>${daysDisplay}</tr>`
