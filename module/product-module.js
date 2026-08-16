const _props = new WeakMap();


export default class Product {
  constructor(obj) {
    _props.set(this, {
      id: obj.id,
      title: obj.title,
      price: obj.price,
      description: obj.description,
      category: obj.category,
      image: obj.image,
      rating: obj.rating,
      quantity: 0
    });
  }

  get id() {
    return _props.get(this).id;
  }
  set id(value) {
    _props.get(this).id = value;
  }

  get title() {
    return _props.get(this).title;
  }
  set title(value) {
    _props.get(this).title = value;
  }

  get price() {
    return _props.get(this).price;
  }
  set price(value) {
    _props.get(this).price = value;
  }

  get image() {
    return _props.get(this).image;
  }
  set image(value) {
    _props.get(this).image = value;
  }

  get category() {
    return _props.get(this).category;
  }
  set category(value) {
    return _props.get(this).category = value
  }
}