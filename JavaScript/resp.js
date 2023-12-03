Burger=document.querySelector('.Burger')
navbar=document.querySelector('.navbar')
RightNav=document.querySelector('.RightNav')
navlist=document.querySelector('.nav-list')


Burger.addEventListener('click', ()=>{

RightNav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');

})