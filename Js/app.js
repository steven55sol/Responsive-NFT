const iconMenu = document.querySelector('.login i');
const menuLinks = document.querySelector('nav .links');

console.log(menuLinks)

document.addEventListener('click', ()=>{
    if(iconMenu.classList.contains('bx-menu')){
       menuLinks.classList.toggle('hideMenu')
    }
})