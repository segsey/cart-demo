import { itemViewLoader } from "./item-view-module.js";
const params = new URLSearchParams(window.location.search);
const id = params.get('id')

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((response) => response.json())
  .then((output) => {
    itemViewLoader(output);
  })