const menuItems = document.getElementsByClassName('menu-item')

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseenter', function (event) {
    event.target.childNodes[1].classList.add('enter')

    console.log('mouseenter', event.target.innerText)
  })

  menuItems[i].addEventListener('mouseleave', function (event) {
    event.target.childNodes[1].classList.remove('enter')

    console.log('mouseleave', event.target.innerText)
  })
}
