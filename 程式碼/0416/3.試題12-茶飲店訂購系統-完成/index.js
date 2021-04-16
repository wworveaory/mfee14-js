// 獲取介面物件
const teaText = document.getElementById('tea-text')
const teaRed = document.getElementById('tea-red')
const teaGreen = document.getElementById('tea-green')

const sugarText = document.getElementById('sugar-text')
const sugarNormal = document.getElementById('sugar-normal')
const sugarHalf = document.getElementById('sugar-half')

const iceText = document.getElementById('ice-text')
const iceNormal = document.getElementById('ice-normal')
const iceHalf = document.getElementById('ice-half')

const countText = document.getElementById('count-text')

// button +1 -1
const addOne = document.getElementById('add-one')
const subOne = document.getElementById('sub-one')

// button
const addOrder = document.getElementById('add-order')
const resetOrder = document.getElementById('reset-order')

// tbody
const orderList = document.getElementById('order-list')
// h2
const orderTotal = document.getElementById('order-total')

// 宣告每個訂單物件需由選項得到的資料
// const orderItem = {
//   id: +new Date(),
//   tea: '紅茶',
//   sugar: '正常糖',
//   ice: '正常冰',
//   count: 10,
//   subTotal: 300,
// }

// 宣告全域變數，與預設值
let tea = ''
let sugar = ''
let ice = ''
let count = 1 //最少一杯
const orderItems = []

// 呈現文字
function display() {
  teaText.innerHTML = '茶種：' + tea
  iceText.innerHTML = '冰度：' + ice
  sugarText.innerHTML = '甜度：' + sugar
  countText.innerHTML = '數量：' + count
}

// 建立新的訂單物件
function createOrderItem(tea, sugar, ice, count) {
  return {
    id: +new Date(),
    tea: tea,
    sugar: sugar,
    ice: ice,
    count: count,
    subTotal: count * 30,
  }
}

// 計算總價然後回傳
function sum(orderItems) {
  let total = 0
  for (let i = 0; i < orderItems.length; i++) {
    total += orderItems[i].subTotal
  }
  return total
}

// 以下為處理三種選擇的按鈕
teaRed.addEventListener('click', function () {
  tea = '紅茶'

  // 呈現
  display()
})

teaGreen.addEventListener('click', function () {
  tea = '綠茶'

  // 呈現
  display()
})

iceNormal.addEventListener('click', function () {
  ice = '正常冰'

  // 呈現
  display()
})

iceHalf.addEventListener('click', function () {
  ice = '半冰'

  // 呈現
  display()
})

sugarNormal.addEventListener('click', function () {
  sugar = '正常糖'

  // 呈現
  display()
})

sugarHalf.addEventListener('click', function () {
  sugar = '半糖'

  // 呈現
  display()
})

// +1數量按鈕處理
addOne.addEventListener('click', function () {
  count += 1

  // 呈現
  display()
})

// -1數量按鈕處理
subOne.addEventListener('click', function () {
  count -= 1
  if (count < 1) count = 1

  // 呈現
  display()
})

// 加入訂單按鈕處理
addOrder.addEventListener('click', function () {
  const orderItem = createOrderItem(tea, sugar, ice, count)
  orderItems.push(orderItem)

  // 呈現訂單列表
  let bodyDisplay = ''

  for (let i = 0; i < orderItems.length; i++) {
    bodyDisplay += `<tr>
    <td>${orderItems[i].id}</td>
    <td>${orderItems[i].tea}</td>
    <td>${orderItems[i].sugar}</td>
    <td>${orderItems[i].ice}</td>
    <td>${orderItems[i].count}</td>
    <td>${orderItems[i].subTotal}</td>
    </tr>`
  }

  orderList.innerHTML = bodyDisplay

  // 呈現總價
  orderTotal.innerHTML = '總價：' + sum(orderItems)
})

// 重設訂單處理
resetOrder.addEventListener('click', function () {
  tea = ''
  sugar = ''
  ice = ''
  count = 1
  // 呈現
  display()
})
