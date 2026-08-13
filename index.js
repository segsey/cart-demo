import {checkOut, item} from "./checkout.js"
let flashSalesRow = document.getElementById("flash-sales-row");
let cartBadge = document.getElementById('item-counter');

let cartCount = 0;
cartBadge.innerHTML = cartCount;

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((output) => {
    for (let i = 0; i < output.length; i++) {
      let parent = document.createElement("div");
      parent.classList.add( "col-3", "border")
      flashSalesRow.appendChild(parent);

      let div = document.createElement("div");
      div.classList.add("p-3", "text-center", "d-flex", 'flex-column', "justify-content-end")
      parent.appendChild(div)

      let img = document.createElement("img");
      img.classList.add("img-fluid", "img");
      img.src = output[i].image;
      div.appendChild(img);

      // title or product name
      let productName = document.createElement("h5");
      productName.innerHTML = `${output[i].title.slice(0, 20)}` + "...";
      div.appendChild(productName);

      // description
      let description = document.createElement("h6");
      description.innerHTML = `Description: ${output[i].category}`;
      div.appendChild(description);

      // price
      let price = document.createElement("span");
      price.innerHTML = `Prices: $${output[i].price}`
      price.classList.add("d-block", "text-center", "fw-bold");
      div.appendChild(price);

      // button
      let addCart = document.createElement("button");
      addCart.classList.add("btn", "btn-primary");
      div.appendChild(addCart);

      

      addCart.addEventListener("click", () =>{
        checkOut(output, i);
        cartCount++;
        cartBadge.innerHTML = cartCount;
      })
      
      // carticon
      let cartIcon = document.createElement("i");
      cartIcon.classList.add("bi", "bi-cart3", "fs-5", "me-2");
      addCart.append(cartIcon, "Add To Cart");
    }
  });