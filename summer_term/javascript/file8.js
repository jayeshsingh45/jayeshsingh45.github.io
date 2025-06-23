const cart = {
  1: 5,
  3: 7,
  5: 2,
};
const items = Object.keys(cart).length
console.log(items)
cart[3]=cart[3]-1
console.log(cart)