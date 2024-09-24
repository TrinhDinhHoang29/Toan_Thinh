const avt = document.querySelector('#avt')
const propper = document.querySelector('.header__propper')
const dropDownMenu = document.querySelector(".list__icon--dropdown");

if (dropDownMenu) {
    dropDownMenu.addEventListener("click", () => {
        const elementMenuDropdown = document.querySelector(".header__dropdown");
        elementMenuDropdown.classList.toggle("header__dropdown--display");

    })
}
avt.addEventListener('click', (e) => {
    propper.classList.toggle('active');
})