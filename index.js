import Product from "./module/product-module.js"
import { productLoader } from "./product-loader.js";
import {checkOut} from "./checkout.js"
import { showCart, newTotal, showTotalPrice } from "./module/cart-module.js";
import { itemViewLoader } from "./item-view-page/item-view-module.js";

export let item = document.getElementById("cart-item");
export let total = document.getElementById('total')

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((output) => {
    for (let i = 0; i < output.length; i++) {
      let product = new Product(output[i]);
      productLoader(product);
    }
  });


const showCartButton = document.getElementById('show-cart');

showCartButton.addEventListener('click', () => {
  item.innerHTML = ""; 
  let cartItems = showCart();
  cartItems.forEach(Product => {
    let checkOutItem = checkOut(Product);
    total.innerHTML = showTotalPrice();
    item.appendChild(checkOutItem);
  })
})