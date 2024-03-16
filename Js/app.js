const iconMenu = document.querySelector('.bx-menu');
const menuLinks = document.querySelector('nav .links');
const close = document.querySelector('.close');

iconMenu.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);

function showMenu(){
    menuLinks.style.height = 'auto';
    close.style.display="block";
    iconMenu.style.display='none';
}

function closeMenu(){
    menuLinks.style.height = 0;
    close.style.display="none";
    iconMenu.style.display='block';
}