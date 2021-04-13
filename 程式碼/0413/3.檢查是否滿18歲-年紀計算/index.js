// select
const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
// button
const checkAge = document.getElementById('checkAge')
// h3
const message = document.getElementById('message')

// 選擇的值
let selectedYear = 0 //相當於請選擇
let selectedMonth = 0 //相當於請選擇
let selectedDate = 0 //相當於請選擇

// 輸入: : number
// 輸出: option string
function createOptions(min, max) {
  let options = '<option value="0">請選擇</option>'

  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }

  return options
}

// 使用map的同樣範例
function createOptionsMap(min, max) {
  const numbers = []
  for (let i = min; i < max + 1; i++) {
    numbers.push(i)
  }

  return (
    '<option value="0">請選擇</option>' +
    numbers.map((v) => `<option value="${v}">${v}</option>`).join('')
  )
}

// 呈現字串
year.innerHTML = createOptions(1920, 2020)
month.innerHTML = createOptions(1, 12)
date.innerHTML = createOptions(1, 31)

year.addEventListener('change', function () {
  selectedYear = +year.value

  // 年 月同時存在才要改變日期
  if (selectedMonth && selectedYear) {
    // 得到當月有幾天
    const maxDays = new Date(selectedYear, selectedMonth, 0).getDate()

    // 重新更動日期最大選項
    date.innerHTML = createOptions(1, maxDays)

    // 日期為可讓使用者選擇
    date.disabled = false
  } else {
    date.disabled = true
  }
})

month.addEventListener('change', function () {
  selectedMonth = +month.value

  // 年 月同時存在才要改變日期
  if (selectedMonth && selectedYear) {
    // 得到當月有幾天
    const maxDays = new Date(selectedYear, selectedMonth, 0).getDate()

    // 重新更動日期最大選項
    date.innerHTML = createOptions(1, maxDays)

    // 日期為可讓使用者選擇
    date.disabled = false
  } else {
    date.disabled = true
  }
})

date.addEventListener('change', function () {
  selectedDate = +date.value
})

// 計算幾歲公式
// https://stackoverflow.com/a/15555947
function calcAge(dateString) {
  const birthday = +new Date(dateString)
  return ~~((Date.now() - birthday) / 31557600000)
}

checkAge.addEventListener('click', function () {
  const now = new Date()

  // 計算幾歲 測試
  console.log(calcAge(`${selectedYear}/${selectedMonth}/${selectedDate}`))

  const nowY = now.getFullYear()
  const nowM = now.getMonth() + 1 // 注意回傳為 0~11
  const nowD = now.getDate()

  console.log(nowY, nowM, nowD)
  console.log(selectedYear, selectedMonth, selectedDate)

  // 布林值代表有沒有超過18歲，超過18歲則為true
  let isOver18 = false

  // 年相減超過18
  if (nowY - selectedYear > 18) {
    isOver18 = true
  }

  // 年相減剛好18 月分大
  if (nowY - selectedYear === 18 && nowM > selectedMonth) {
    isOver18 = true
  }

  // 年相減剛好18 月分相同，日大
  if (
    nowY - selectedYear === 18 &&
    nowM === selectedMonth &&
    nowD - selectedDate > 0
  ) {
    isOver18 = true
  }

  // 呈現訊息
  message.innerHTML = isOver18
    ? '<span style="color:green">滿18歲</span>'
    : '<span style="color:red">未滿18歲</span>'
})
