let inc = document.querySelector('.increase')
let reset = document.querySelector('.reset')
let dec = document.querySelector('.decrease')
let display = document.querySelector('span')

let count = 0

inc.addEventListener('click', () => {
    count++;
    display.innerHTML = count;
})

reset.addEventListener('click', () => {
    count = 0
    display.innerHTML = 0;
})

dec.addEventListener('click', () => {
    count--;
    display.innerHTML = count;
})

