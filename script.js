let text1 = document.getElementById('qwert')

console.log(text1);

console.log(text1.innerText);
console.log(text1.innerHTML);

let box = document.querySelector('.box')

console.log(box);

let h2 = document.createElement('h2')

h2.innerText = prompt('Укажите имя')

let bigOrSmall = prompt("Выберите тип букв:  \n1 - Большие  \n2 - Маленькие")
if(bigOrSmall == '1'){
    h2.toUppearCase()
    box.appendChild(h2)
} else{
    h2.toLowerCase()
    box.appendChild(h2)
}



