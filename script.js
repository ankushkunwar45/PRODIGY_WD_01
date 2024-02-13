let hamburgerBtn = document.getElementById('hamburger-btn');
let menu = document.getElementById('menu');

hamburgerBtn.addEventListener('click', ()=>{
    menu.classList.toggle('display')
})