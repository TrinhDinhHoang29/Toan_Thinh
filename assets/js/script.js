const avt = document.querySelector('#avt')
const propper = document.querySelector('.header__propper')
const dropDownMenu = document.querySelector(".list__icon--dropdown");

if (dropDownMenu) {
    dropDownMenu.addEventListener("click", () => {
        const elementMenuDropdown = document.querySelector(".header__dropdown");
        elementMenuDropdown.classList.toggle("header__dropdown--display");
    })
}
if (avt) {
    avt.addEventListener('click', (e) => {
        propper.classList.toggle('active');
    })
}

document.querySelector('.search-field__search-by-image').addEventListener("click", () => {
    document.querySelector('.search-field__content').classList.add('none');
    document.querySelector('.banner').classList.add('none');
    document.querySelector('.products').classList.add('none');

    document.querySelector('.search-field__image-search').classList.remove('none');
})

