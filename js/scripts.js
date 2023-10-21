const navMenuMobile = document.querySelector('#nav')
const itensMenu = document.querySelectorAll('#nav a')

function abreFechaMenu(){
    navMenuMobile.classList.toggle('showNav')
}

itensMenu.forEach((item) => {
    item.addEventListener('click', () => {
        abreFechaMenu()
    })
})