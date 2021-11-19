// HANDLE PRODUCT__DETAIL
const productPlusButton = document.querySelector("#product-plus")
const productMinusButton = document.querySelector("#product-minus")
const productQuantityChoice = document.querySelector(".product__choicesign--input")
const productAvailable = document.querySelector(".product__quantitybuy__available span")
let productAvailableValue = productAvailable.textContent
let productQuantityValue = productQuantityChoice.value
console.log(productQuantityValue)

function handlePlusProduct(){
    productAvailableValue = parseInt(productAvailableValue) - 1
    productAvailable.textContent = productAvailableValue
    productQuantityValue ++
    productQuantityChoice.setAttribute("value",parseInt(productQuantityValue))  
}
function handleMinusProduct(){
    if(productQuantityValue <= 1){
        return;
    } 
    else{
    productAvailableValue = parseInt(productAvailableValue) + 1
    productAvailable.textContent = productAvailableValue
    productQuantityValue --
    productQuantityChoice.setAttribute("value",parseInt(productQuantityValue)) 
    }
}
productPlusButton.addEventListener('click',handlePlusProduct)
productMinusButton.addEventListener('click',handleMinusProduct)


// CHANGE IMAGE WHEN HOVER
const productImageDisplayBig = document.querySelector(".product-detail__image--big img");
const smallImages = document.querySelectorAll(".product-detail__image__small img")
productImageDisplayBigSrc = productImageDisplayBig.getAttribute('src')
const hoverInImage = (e)=>{
    productImageDisplayBig.setAttribute("src",e.target.getAttribute("src"));
    console.log(e.target.getAttribute("src"))
    const smallImageActive = document.querySelector(".product-detail__image--active")
    smallImageActive.classList.remove("product-detail__image--active")
    e.target.classList.add
    ("product-detail__image--active")
}
smallImages.forEach(smallImage =>{
    smallImage.onmouseover = (e)=>hoverInImage(e)
    
})


