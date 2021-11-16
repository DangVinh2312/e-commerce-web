// CỦA HIỆP
let button_next = document.querySelector(".categories__button--next");
let button_back = document.querySelector(".categories__button--back");
let categories_content = document.querySelector(".categories__nav");

function onClickButton() {
    button_next.classList.toggle('categories__button--hidden');
    button_back.classList.toggle('categories__button--hidden');

    if(button_next.classList.contains('categories__button--hidden')){
        categories_content.classList.add('categories__nav--toLeft');
    }else {
        categories_content.classList.remove('categories__nav--toLeft');
    }
}

const buttons = document.querySelectorAll(".categories__button");
for (let button of buttons){
    button.addEventListener('click', onClickButton);
}

