// element object
const count = document.getElementById('count')

// button
const add = document.getElementById('add')
const sub = document.getElementById('sub')

count.addEventListener('click', function () {
  count.innerText = +count.innerText + 1
})

add.addEventListener('click', function () {
  count.innerText = +count.innerText + 1
})
