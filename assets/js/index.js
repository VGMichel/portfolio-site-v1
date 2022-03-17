const menu = document.querySelector('.menubar');
const nav = document.querySelector('.nav__content');

window.onscroll = function(){
    if(window.pageYOffset >= nav.offsetTop) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}