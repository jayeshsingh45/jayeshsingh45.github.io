let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];
function addToCart(id) {
  cart = { ...cart, [id]: 1 };
}
function increment(id) {
  cart = { ...cart, [id]: cart[id] + 1 };
}
function decrement(id) {
  cart = { ...cart, [id]: cart[id] - 1 };
}



function showAllProducts(){
    var allList = "";

    products.map((value,index,arr)=>{
        console.log(value.name)

    
        allList = allList.concat(`<li>${value.name}</li>  
                                  <button onclick="addToCart(${value.id})">Add to cart</button>`)

    })

    document.getElementById("list").innerHTML = allList
    console.log(allList)
}


function showCart() {
  var allList = "";
  document.getElementById("navLocation").innerText = "Cart";

  // Check if the cart is empty
  if (Object.keys(cart).length === 0) {
    allList = "<p>Your cart is empty.</p>";
  } else {
    for (const productId in cart) {
      const quantity = cart[productId];
      // Find the product details from the products array
      const product = products.find((p) => p.id === parseInt(productId));

      if (product) {
        allList += `<li>
                      ${product.name} (Quantity: ${quantity}) - $${(product.price * quantity).toFixed(2)}
                      <button onclick="increment(${product.id})">+</button>
                      <button onclick="decrement(${product.id})">-</button>
                    </li>`;
      }
    }
  }
  document.getElementById("list").innerHTML = allList;
  console.log("Current Cart:", cart); // For debugging
}


// console.log('List of Products')
// console.log(products)
// console.log(`Added Product 1 to cart`)
// addToCart(1);
// console.log(cart);
// console.log(`Added Product 3 to cart`)
// addToCart(3);

// console.log(`Added Product 2 to cart`)
// addToCart(2);
// increment(2)

// console.log(cart);
// console.log(`Incremented one quantify of Product 1 to cart`)
// increment(1)
// console.log(cart);
// console.log(`Incremented one more quantify of Product 1 to cart`)
// increment(1)
// console.log(cart);
// console.log(`Decremented one quantify of Product 1 from cart`)
// decrement(1)
// console.log(cart);
// console.log("Display Cart with Product Details")
// products.map(value=>{
//     cart[value.id] && console.log(`${value.name}-$${value.price}-${cart[value.id]}-$${value.price*cart[value.id]}`)
// })
// const total = products.reduce((sum,value)=> {
//     return sum + value.price*(cart[value.id]??0)
// },0)
// console.log(`Order Value:${total}`)