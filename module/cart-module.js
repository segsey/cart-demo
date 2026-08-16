let arr = [];
export let newTotal = 0

export const add = (product) => {
  let found = arr.find(p => p.id === product.id);
  if (found) {
    found.quantity += 1;
    found.price += product.price;
  } else {
    product.quantity = 1;
    arr.push(product);
  }
  return arr.length;
}

export let showTotalPrice = () => {
  let priceTotal = arr.reduce((total, product) => {
    return total + product.price;
  }, 0);
  return Math.round(priceTotal * 100 )/100;
}
newTotal = showTotalPrice()

export const remove = (product) => {
  arr = arr.filter(item => item.id !== product.id);
  newTotal = showTotalPrice()
}

export const showCart = () => {
  return arr;
}