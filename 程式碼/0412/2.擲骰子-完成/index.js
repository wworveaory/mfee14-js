// 獲取元素介面物件
// icon
const dice = document.getElementById('dice')
//button
const start = document.getElementById('start')
// point
const point = document.getElementById('point')

start.addEventListener('click', function () {
  // 1. 產生1-6隨機數
  const rand = Math.floor(Math.random() * 6) + 1
  // 2. 對照fontawesome的圖示
  let diceType = ''

  switch (rand) {
    case 1:
      diceType = 'one'
      break
    case 2:
      diceType = 'two'
      break
    case 3:
      diceType = 'three'
      break
    case 4:
      diceType = 'four'
      break
    case 5:
      diceType = 'five'
      break
    case 6:
      diceType = 'six'
      break
    default:
      diceType = 'six'
      break
  }

  // 3. 呈現圖示 & 點數
  // ex. <i class="fas fa-dice-one"></i>
  //dice.innerHTML = '<i class="fas fa-dice-' + diceType + '"></i>'

  // 樣版字串的寫法
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals
  dice.innerHTML = `<i class="fas fa-dice-${diceType}"></i>`

  // 點數
  point.innerHTML = rand + ' 點'
})
