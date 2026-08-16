// import { showCart } from "./cart-module";
import {remove} from './module/cart-module.js'
import {item} from './index.js'
import { newTotal } from './module/cart-module.js';
import { total } from './index.js';

export let checkOut = (product) => {
  
  let parentdiv = document.createElement("div");
  parentdiv.classList.add("d-flex", "justify-content-between", "bg-light-subtle", "rounded", "p-4", "shadow");


  // right side(image and product description)
  let div1 = document.createElement('div');
  div1.classList.add("d-flex", 'gap-3');
  parentdiv.appendChild(div1);

  let image = document.createElement("img");
  image.classList.add("img-fluid", "w-25");
  image.src = product.image;
  div1.appendChild(image);

  let productDetails = document.createElement("div");
  productDetails.classList.add("d-flex", "flex-column", "jusift-content-center");
  div1.appendChild(productDetails);

  let productName = document.createElement("div")
  productName.classList.add("fs-5");
  productName.innerHTML = `${product.title.slice(0, 10)}` + "...";
  productDetails.appendChild(productName);

  let classes = ["fw-bold", "text-body-secondary"];
  let description = document.createElement("div");
  description.classList.add(...classes);
  description.innerHTML = `Description: ${product.category}`;
  productDetails.appendChild(description);

  let price = document.createElement("div");
  price.classList.add(...classes);
  price.innerHTML = `Prices: $${product.price}`;
  productDetails.appendChild(price);

  let quantity = document.createElement("div");
  quantity.classList.add(...classes);
  let count = product.quantity;
  quantity.innerHTML = count;
  productDetails.appendChild(quantity);


  // cancel button
  let div2 = document.createElement("div");
  div2.classList.add("d-flex", "justify-content", "align-items-center");
  parentdiv.appendChild(div2);

  let cancel = document.createElement("button");
  cancel.classList.add("btn", "btn-danger");
  div2.appendChild(cancel);
  cancel.addEventListener("click", () => {
    remove(product);
    parentdiv.remove();
    total.innerHTML = newTotal;
  })


  let icon = document.createElement("i");
  icon.classList.add("bi", "bi-x-lg");
  cancel.append(icon);

  return parentdiv
}