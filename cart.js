const moneyFormatter = new Intl.NumberFormat();
const cartProductBoxes = document.querySelectorAll('.cart__product--box');
cartProductBoxes.forEach((cartProductBox => {
    let quantity = 0;
    let totalPrice = null;
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
    });

    const btnIncrease = cartProductBox.querySelector('.btn-increase');
    btnIncrease.addEventListener('click', () => {
        const productQuantity = cartProductBox.querySelector('.cart-product__quantity--num');
        quantity = productQuantity.value;
        quantity++;
        productQuantity.value = quantity;
        totalPrice = `${Number(priceAfterSaleNum) * quantity}`;
        totalProductPrice.textContent = `đ${moneyFormatter.format(Number(totalPrice))}`;
    });

    const deleteBtn = cartProductBox.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', () => {
        cartProductBox.remove();
    });
}))

const deleteAll = document.querySelector('.btn__delete--all');
deleteAll.addEventListener('click', deleteAllProductsFromCart);

function deleteAllProductsFromCart() {
    const cartTable = document.querySelector('.cart-container');
    cartTable.remove();
}