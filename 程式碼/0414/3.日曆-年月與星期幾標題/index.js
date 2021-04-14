// h1
const yearAndMonth = document.getElementById('yearAndMonth')
// thead
const title = document.getElementById('title')
// tbody
const data = document.getElementById('data')

// 呈現yearAndMonth
const now = new Date()

// 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)

const nowY = now.getFullYear()
const nowM = now.getMonth() + 1 //注意回傳為 0~11

yearAndMonth.innerHTML = nowY + '/' + nowM

// 呈現標題
const weekDayList = ['日', '一', '二', '三', '四', '五', '六']

//for迴圈的寫法
//宣告
let weekDayDisplay = ''   
ㄥ
for (let i = 0; i < weekDayList.length; i++) {
  weekDayDisplay += `<th>${weekDayList[i]}</th>`
}

title.innerHTML = `<tr>${weekDayDisplay}</tr>`

// map的寫法
const weekDayDisplayMap = weekDayList.map((v) => `<th>${v}</th>`).join('')
title.innerHTML = `<tr>${weekDayDisplayMap}</tr>`
