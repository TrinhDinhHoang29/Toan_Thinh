let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    // Lấy vị trí cuộn hiện tại
    let currentScrollPosition =document.documentElement.scrollTop;
    let elementHeader = this.document.querySelector(".header");
    let img = elementHeader.querySelector(".header__logo img");
    // Kiểm tra xem người dùng có cuộn xuống hay không
    if (currentScrollPosition===0){
        elementHeader.classList.add("my-3");
        elementHeader.classList.remove("header--bgGreen");
        img.src = "./assets/Frame 45994.svg"

        

    }else if (currentScrollPosition > lastScrollPosition) {
        elementHeader.classList.add("header--bgGreen");
        elementHeader.classList.remove("my-3");
        img.src = "./assets/Logo_White.svg"
    }  

    // Cập nhật vị trí cuộn trước đó
    lastScrollPosition = currentScrollPosition;
});
