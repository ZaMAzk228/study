let five = document.createElement('li'),
    menu = document.querySelector('.menu'),
    text = document.createTextNode('пятый пункт')
    element = document.getElementsByClassName('menu-item'),
    main = document.getElementsByClassName('menu');
    


five.classList.add('menu-item');
menu.appendChild(five)
five.textContent = 'Пятый пункт'

menu.insertBefore(element[2], element[1])

console.log(element)