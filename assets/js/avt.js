const avt = document.querySelector('#avt')
const propper = document.querySelector('.header__propper')
avt.addEventListener('click',(e)=>{
     propper.classList.toggle('active');
})