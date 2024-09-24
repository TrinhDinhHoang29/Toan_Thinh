

const dropDownMenu = document.querySelector(".list__icon--dropdown");
if(dropDownMenu){
    dropDownMenu.addEventListener("click",()=>{
        const elementMenuDropdown = document.querySelector(".header__dropdown");
        elementMenuDropdown.classList.toggle("header__dropdown--display");
        
    })
}