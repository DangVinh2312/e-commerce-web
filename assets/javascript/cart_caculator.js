
// JAVASCRIPT CỦA VINH
let quantity = 0;
let totalPrice = null;
const moneyFormatter = new Intl.NumberFormat();
const cartProductBoxes = document.querySelectorAll('.cart__product--box');
cartProductBoxes.forEach((cartProductBox => {
    decreaseProductQuantity(cartProductBox);
    increaseProductQuantity(cartProductBox);
    deleteProductFromCart(cartProductBox);
}))

function decreaseProductQuantity(cartProductBox) {
    const priceAfterSale = cartProductBox.querySelector('.cart-product__cost--after-sale').outerText;
    const priceAfterSaleNum = priceAfterSale.slice(1).replace(/\./g, '');
    const totalProductPrice = cartProductBox.querySelector('.product-box__handle--total-price');
    const btnDecrease = cartProductBox.querySelector('.btn-decrease');
    btnDecrease.addEventListener('click', () => {
        const productQuantity = cartProductBox.querySelector('.cart-product__quantity--num');
        quantity = productQuantity.value;
        quantity--;
        productQuantity.value = quantity;
        if (quantity === 0) {
            cartProductBox.remove();
        }
        totalPrice = `${Number(priceAfterSaleNum) * quantity}`;
        totalProductPrice.textContent = `đ${moneyFormatter.format(Number(totalPrice))}`;
        getAllProductsTotalPrice();
    });
}

function increaseProductQuantity(cartProductBox) {
    const priceAfterSale = cartProductBox.querySelector('.cart-product__cost--after-sale').outerText;
    const priceAfterSaleNum = priceAfterSale.slice(1).replace(/\./g, '');
    const totalProductPrice = cartProductBox.querySelector('.product-box__handle--total-price');
    const btnIncrease = cartProductBox.querySelector('.btn-increase');
    btnIncrease.addEventListener('click', () => {
        const productQuantity = cartProductBox.querySelector('.cart-product__quantity--num');
        quantity = productQuantity.value;
        quantity++;
        productQuantity.value = quantity;
        totalPrice = `${Number(priceAfterSaleNum) * quantity}`;
        totalProductPrice.textContent = `đ${moneyFormatter.format(Number(totalPrice))}`;
        getAllProductsTotalPrice();
    });
}

function deleteProductFromCart(cartProductBox) {
    const deleteBtn = cartProductBox.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', () => {
        cartProductBox.remove();
    });
    getAllProductsTotalPrice();
}

function getAllProductsTotalPrice() {
    const totalProductsPrice = document.querySelectorAll('.product-box__handle--total-price');
    const totalProductsPriceList = Array.from(totalProductsPrice);
    const totalAllProductsPrice = document.querySelector('.cart-footer-handle__purchase--total');
    let total = totalProductsPriceList.reduce((acc, cur) => {
        return acc + Number(cur.outerText.slice(1).replace(/\./g, ''))
    }, 0);
    totalAllProductsPrice.textContent = `đ${moneyFormatter.format(Number(total))}`;
}

const deleteAll = document.querySelector('.btn__delete--all');
deleteAll.addEventListener('click', deleteAllProductsFromCart);

function deleteAllProductsFromCart() {
    const cartTable = document.querySelector('.cart-container');
    cartTable.remove();
}