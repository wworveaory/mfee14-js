// 獲取元件介面物件
// input
const bodyHeight = document.getElementById('bodyHeight')
const bodyWeight = document.getElementById('bodyWeight')
// button
const calculate = document.getElementById('calculate')
// h1
const bmiText = document.getElementById('bmiText')

// 處理按鈕按下事件
// BMI = 體重(公斤) / 身高(公尺平方)
// 身高的平方公尺：Math.pow(height/100, 2)
calculate.addEventListener('click', function () {
  // 1. 先得到身高和體重的數字值
  const h = +bodyHeight.value
  const w = +bodyWeight.value

  // 2. 計算bmi值, BMI = 體重(公斤) / 身高(公尺平方)
  const bmi = w / Math.pow(h / 100, 2)

  // 3. 呈現在網頁上(保留一位小數點)
  bmiText.innerHTML = bmi.toFixed(1)

  // // 以上三點寫在一起
  // bmiText.innerHTML = (
  //   +bodyWeight.value / Math.pow(+bodyHeight.value / 100, 2)
  // ).toFixed(1)
})
