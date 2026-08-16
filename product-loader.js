import {add, remove} from "./module/cart-module.js"
import {checkOut} from "./checkout.js";

let productRow = document.getElementById("product-row");
let cartBadge = document.getElementById('item-counter');

let cartCount = 0;
cartBadge.innerHTML = cartCount;
export let productLoader = (product) =>{
  let col = document.createElement('div');
  col.classList.add('col-lg-3', 'col-md-4', 'col-sm-12', 'mb-4');
  productRow.appendChild(col)

  let card = document.createElement("div");
  card.classList.add("card")
  col.appendChild(card);
  
  let img = document.createElement("img");
  img.classList.add("img-fluid", "img", 'mx-auto');
  img.src = product.image;
  card.appendChild(img);

  let cardBody = document.createElement("div");
  cardBody.classList.add('card-body')
  card.appendChild(cardBody)


  // title or product name
  let productName = document.createElement("h5");
  productName.innerHTML = `${product.title.slice(0, 20)}` + "...";
  cardBody.appendChild(productName);

  // description
  let description = document.createElement("h6");
  description.innerHTML = `Description: ${product.category}`;
  cardBody.appendChild(description);

  // price
  let price = document.createElement("span");
  price.innerHTML = `Prices: $${product.price}`
  price.classList.add("d-block", "text-center", "fw-bold");
  cardBody.appendChild(price);

  // button
  let addCart = document.createElement("button");
  addCart.classList.add("btn", "btn-primary", 'w-100');
  cardBody.appendChild(addCart);

  
  addCart.addEventListener("click", () => {
    add(product);
    checkOut(product);
    cartCount++;
    cartBadge.innerHTML = cartCount;
  })

  card.addEventListener('click', () => {
    window.location.href = `./item-view-page/item-view-page.html?id=${product.id}`
  })
  
  // carticon
  let cartIcon = document.createElement("i");
  cartIcon.classList.add("bi", "bi-cart3", "fs-5", "me-2");
  addCart.append(cartIcon, "Add To Cart");
}