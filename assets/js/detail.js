var currentImage = 1;

document.querySelector('.product__image__list__up').onclick = () => {
    document.querySelector('.product__image__list__item[id="' + currentImage + '"]').classList.remove('active');
    
    if (currentImage == 1) {
        currentImage = 5;
    }

    currentImage--;

    var image = document.querySelector('.product__image__list__item[id="' + currentImage + '"] img');

    document.querySelector('.product__image__main img').src = image.src;

    document.querySelector('.product__image__list__item[id="' + currentImage + '"]').classList.add('active');
}

document.querySelector('.product__image__list__down').onclick = () => {
    document.querySelector('.product__image__list__item[id="' + currentImage + '"]').classList.remove('active');
    
    if (currentImage == 4) {
        currentImage = 0;
    }

    currentImage++;

    var image = document.querySelector('.product__image__list__item[id="' + currentImage + '"] img');

    document.querySelector('.product__image__main img').src = image.src;

    document.querySelector('.product__image__list__item[id="' + currentImage + '"]').classList.add('active');
}