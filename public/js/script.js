//Hamburger

const ham = document.querySelector('#ham');
const navMenu = document.querySelector('#nav-menu');

ham.addEventListener('click', function(){
    ham.classList.toggle('hambur');
    navMenu.classList.toggle('hidden');

});

// Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixed = header.offsetTop;

    if(window.pageYOffset > fixed){
        header.classList.add('navbar-fix');
    }else{
        header.classList.remove('navbar-fix');
    }
}