for (let i = 0; i < 100; i++) {
  // 跳出迴圈
  if (i + 1 === 50) break
  // 跳過某數的以下執行
  if (i + 1 === 6) continue
  // 奇偶數判斷
  if ((i + 1) % 2 === 0) console.log(i + 1)
}
