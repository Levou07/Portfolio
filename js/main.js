let body = document.querySelector('body')

let btn = document.querySelector('.btn')
let inp1 = document.querySelector('.inp1')

let typed = document.querySelector('auto-type')
let button = document.querySelector('.b-button')
let back = document.querySelector('.b-back')
let colors = document.querySelector('.bg-colors')

let bg__red = document.querySelector('.bg__red')
let bg__green = document.querySelector('.bg__green')
let bg__blue = document.querySelector('.bg__blue')


typed = new Typed(".auto-type", {
    strings: ['Abdulloh'],
    typeSpeed: 200,
    backSpeed: 150,
    loop: true
})

button.addEventListener('click', ()=>{
    colors.style.display = 'block'
    back.style.display = 'block'
    button.style.display = 'none'
})

back.addEventListener('click', ()=>{
    colors.style.display = 'none'
    back.style.display = 'none'
    button.style.display = 'block'
})

bg__red.addEventListener('click', ()=>{
    body.classList.toggle('red')
})

bg__green.addEventListener('click', ()=>{
    body.classList.toggle('green')
})

bg__blue.addEventListener('click', ()=>{
    body.classList.toggle('blue')
})