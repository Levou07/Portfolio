let btn = document.querySelector('.btn')
let inp1 = document.querySelector('.inp1')

btn.addEventListener('click', (e)=>{
    inp1Style.display = 'block'
    window.addEventListener('mouseleave', ()=>{
        inp1Style.display = 'none'
    })
})


let typed = document.querySelector('auto-type')

typed = new Typed(".auto-type", {
    strings: ["Abdulloh", 'FrontEnd dev'],
    typeSpeed: 200,
    backSpeed: 150,
    loop: true
})

