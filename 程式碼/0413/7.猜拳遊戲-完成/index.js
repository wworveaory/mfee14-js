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

function play(userNumber) {
  // 1. 決定兩方的拳的數字
  // 電腦出拳1-3隨機數
  const computerNumber = Math.floor(Math.random() * 3) + 1

  // 目前使用者的拳 = 改用傳入參數決定
  //const userNumber = 1

  // 2. 呈現出了什麼拳
  user.innerHTML = '你出了：' + titles[userNumber - 1]
  computer.innerHTML = '電腦出了：' + titles[computerNumber - 1]

  // 3. 判斷勝負
  // 兩數相同平手
  if (computerNumber === userNumber) result.innerHTML = '輸贏結果：平手'

  // 由距離判斷
  const range = userNumber - computerNumber
  // 1/-2 使用者獲勝
  if (range === 1 || range === -2) result.innerHTML = '輸贏結果：你獲勝'
  // -1/2 電腦獲勝
  if (range === -1 || range === 2) result.innerHTML = '輸贏結果：電腦獲勝'
}

scissors.addEventListener('click', function () {
  play(1)
})

rock.addEventListener('click', function () {
  play(2)
})

paper.addEventListener('click', function () {
  play(3)
})
