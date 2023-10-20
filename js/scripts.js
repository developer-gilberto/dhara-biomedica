const nav = document.querySelector('#nav')
const itensMenu = document.querySelectorAll('#nav a')

function abreFechaMenu(){
    nav.classList.toggle('showNav')
}

itensMenu.forEach((item) => {
    item.addEventListener('click', () => {
        abreFechaMenu()
    })
})

const btnTop = document.querySelector('#btn-arrow')

window.addEventListener('scroll', () => {
    if(scrollY >= 900){
        btnTop.style.display = 'block'
    } else {
        btnTop.style.display = 'none'
    }
})