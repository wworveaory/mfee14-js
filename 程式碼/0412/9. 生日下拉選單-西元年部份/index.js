const year = document.getElementById('year')

// 選擇的值
let selectedYear = 0 //相當於請選擇

// 準備要呈現的年字串
let yearOptions = '<option value="0">請選擇</option>'

// 產生選項，西元年1960~2010
for (let i = 1960; i < 2011; i++) {
  // yearOptions += '<option value="' + i + '">' + i + '</option>'
  yearOptions += `<option value="${i}">${i}</option>`
}

// 呈現字串
year.innerHTML = yearOptions

year.addEventListener('change', function () {
  selectedYear = year.value
  console.log(selectedYear)
})
