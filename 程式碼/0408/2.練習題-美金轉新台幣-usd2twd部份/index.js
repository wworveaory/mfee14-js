// input
const money = document.getElementById('money')

// buttons
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')

// h1
const moneyEx = document.getElementById('moneyEx')

// USD 2 TWD
// 1 USD 美金 = 28.53 TWD 新台幣
usd2twd.addEventListener('click', function () {
  // 1. 先運算好
  const finalResult = (Number(money.value) * 28.53).toFixed(0)

  // 2. 再呈現在網頁上
  moneyEx.innerText = '美金->新台幣: ' + finalResult
})
