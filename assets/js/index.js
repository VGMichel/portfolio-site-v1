const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav__content');

const navContent = document.querySelector('.nav');
const closeBtn = document.querySelector('.nav__close');
const navBtn = document.querySelector('.menubar');
const navBar = document.querySelector('.nav__bar')


// Sticky Nav
window.onscroll = function(){
    if(window.pageYOffset >= nav.offsetTop) {
        menu.classList.add('sticky')
        navBar.classList.add('sticky')
    } else {
        menu.classList.remove('sticky')
        navBar.classList.remove('sticky')
    }
}

// Menu Toggle
navBtn.addEventListener('click',(e)=>{
  navContent.classList.toggle('active');
})

closeBtn.addEventListener('click',(e)=>{
  navContent.classList.toggle('active');
})

// Menu Toggle Function
function navSelect() {
    navContent.classList.toggle('active')
}