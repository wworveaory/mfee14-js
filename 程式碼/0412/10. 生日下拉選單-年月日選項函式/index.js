const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')

// 選擇的值
let selectedYear = 0 //相當於請選擇

// 輸入: : number
// 輸出: option string
function createOptions(min, max) {
  let options = '<option value="0">請選擇</option>'

  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }

  return options
}

// 呈現字串
year.innerHTML = createOptions(1920, 2020)
month.innerHTML = createOptions(1, 12)
date.innerHTML = createOptions(1, 31)

year.addEventListener('change', function () {
  selectedYear = year.value
  console.log(selectedYear)
})
