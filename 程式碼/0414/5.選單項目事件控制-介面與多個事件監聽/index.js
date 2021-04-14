const menuItems = document.getElementsByClassName('menu-item')

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseenter', function (event) {
    console.log(event.target.innerText)
    console.log(this.innerText)
  })
}
