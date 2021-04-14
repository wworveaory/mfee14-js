// 1-100隨機數
const rand = Math.floor(Math.random() * 100) + 1

// 1-3 = 5星卡
if (rand < 4) console.log(rand, '五星卡')

// 4-20 = 4星卡
if (rand > 3 && rand < 21) console.log(rand, '四星卡')

// 21-100 = 3星卡
if (rand > 20) console.log(rand, '三星卡')
