document.addEventListener('DOMContentLoaded', function () {
    const addressFill = document.querySelector('.address__fill');
    const addressDefault = document.querySelector('.address__default');
    const addressBtn = document.querySelector('#address__btn');

    addressBtn.addEventListener('click',()=>{
        addressFill.classList.toggle('active');
        addressDefault.classList.toggle('active');
    })
});