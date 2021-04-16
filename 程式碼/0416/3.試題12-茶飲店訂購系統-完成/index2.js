// 獲取介面物件
const teaText = document.getElementById('tea-text')
const sugarText = document.getElementById('sugar-text')
const iceText = document.getElementById('ice-text')
const countText = document.getElementById('count-text')

//button
const addOne = document.getElementById('add-one')
const subOne = document.getElementById('sub-one')
//button
const addOrder = document.getElementById('add-order')
const resetOrder = document.getElementById('reset-order')

// table-tbody
const orderList = document.getElementById('order-list')
//h2
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

// 宣告全域物件，與預設值
const defaultOrder = {
  tea: '',
  sugar: '',
  ice: '',
  count: 1, //最少一杯
}

// 訂單用全域陣列
const orderItems = []

// 重新呈現各文字區域用
function display() {
  teaText.innerHTML = '茶種：' + defaultOrder.tea
  iceText.innerHTML = '冰度：' + defaultOrder.ice
  sugarText.innerHTML = '甜度：' + defaultOrder.sugar
  countText.innerHTML = '數量：' + defaultOrder.count
}

// 建立訂單元件用
// 傳入參數：object
function createOrderItem(order) {
  return {
    id: +new Date(),
    tea: order.tea,
    sugar: order.sugar,
    ice: order.ice,
    count: order.count,
    subTotal: order.count * 30,
  }
}

// 計算總價然後回傳
// 傳入參數：array
function sum(orderItems) {
  let total = 0
  for (let i = 0; i < orderItems.length; i++) {
    total += orderItems[i].subTotal
  }
  return total
}

// 處理各種選擇的按鈕
const choices = document.getElementsByClassName('choice')

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener('click', function (e) {
    // ex. data-content="tea-紅茶"
    //console.log(e.target.dataset.content)

    // 分割字串為陣列
    const contents = e.target.dataset.content.split('-')

    // 設定到物件中的屬性值
    defaultOrder[contents[0]] = contents[1]

    //console.log(defaultOrder)
    // 呈現修改內容
    display()
  })
}

addOne.addEventListener('click', function () {
  defaultOrder.count += 1

  // 呈現
  display()
})

subOne.addEventListener('click', function () {
  defaultOrder.count -= 1
  if (defaultOrder.count < 1) defaultOrder.count = 1

  // 呈現
  display()
})

// 加入訂單按鈕
addOrder.addEventListener('click', function () {
  const orderItem = createOrderItem(defaultOrder)
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

// 重設訂單按鈕
resetOrder.addEventListener('click', function () {
  defaultOrder.tea = ''
  defaultOrder.sugar = ''
  defaultOrder.ice = ''
  defaultOrder.count = 1
  // 呈現
  display()
})
