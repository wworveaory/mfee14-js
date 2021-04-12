// 獲取元件介面物件
// input
const myName = document.getElementById('myName')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// button
const register = document.getElementById('register')

// h1
const message = document.getElementById('message')

// 按下註冊按鈕
register.addEventListener('click', function(){
    alert(123)
    if(myName.value === ''){
        alert('姓名沒填')
    }
})