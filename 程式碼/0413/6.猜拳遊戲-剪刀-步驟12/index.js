// 獲取元件介面物件
// icon
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const rock = document.getElementById('rock')

// h3
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

// 剪刀=1，石=2，布=3
//宣告一陣列，對應出拳數字與文字
const titles = ['剪刀', '石頭', '布']

scissors.addEventListener('click', function () {
  // 1. 決定兩方的拳的數字
  // 電腦出拳1-3隨機數
  const computerNumber = Math.floor(Math.random() * 3) + 1

  // 目前使用者的拳 =1
  const userNumber = 1

  // 2. 呈現出了什麼拳
  user.innerHTML = '使用者出了：' + titles[userNumber - 1]
  computer.innerHTML = '電腦出了：' + titles[computerNumber - 1]

  // 3. 判斷勝負
})
