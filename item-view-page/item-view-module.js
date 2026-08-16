let itemView = document.getElementById('cart-item');


export let itemViewLoader = (output) => {
  // for image
  let imgDiv = document.createElement('div');
  imgDiv.classList.add('col', 'col-md-3', 'mb-3');
  itemView.appendChild(imgDiv);

  let img = document.createElement('img');
  img.classList.add('img-fluid');
  img.src = output.image;
  imgDiv.appendChild(img);


  // product details
  let productDetailsDiv = document.createElement('div');
  productDetailsDiv.classList.add('col', 'col-md-7');
  itemView.appendChild(productDetailsDiv);

  let productDetailsFlex = document.createElement('div');
  productDetailsDiv.classList.add('d-flex', 'flex-column', 'justify-content-center', 'h-100');
  productDetailsDiv.appendChild(productDetailsFlex);

  // product category
  let h5 = document.createElement('h5');
  h5.innerHTML = `Category: ${output.category}`
  productDetailsFlex.appendChild(h5);

  let hr = document.createElement('hr');
  productDetailsFlex.appendChild(hr);

  // product title/name
  let h4 = document.createElement('h4');
  h4.innerHTML = `Product Name: ${output.title}`
  productDetailsFlex.appendChild(h4);

  // product title/name
  let h6 = document.createElement('h6');
  h6.classList.add('text-body-secondary');
  h6.innerHTML = `Description: ${output.description}`
  productDetailsFlex.appendChild(h6);

  let price = document.createElement('h6');
  price.classList.add('text-body-secondary', 'fw-bold');
  price.innerHTML = `Price: ${output.price}`
  productDetailsFlex.appendChild(price);


  // remove button
  let removeDiv = document.createElement('div');
  removeDiv.classList.add('col-12', 'col-md-2', 'd-flex', 'justify-content-center', 'align-items-center')
  itemView.appendChild(removeDiv);

  let button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.innerHTML = 'Remove'
  removeDiv.appendChild(button);
}