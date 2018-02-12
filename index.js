var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice = Math.floor(Math.random()*100)+1
cart.push({[itemName]: itemPrice});
console.log(`${itemName} has been added to your cart.`);
return cart
}


 
function viewCart () {
const l = cart.length

  if (!l) {
    return console.log('Your shopping cart is empty.')
  }

  let itemPrices = [];

  for (let i = 0; i < l; i++) {
    let itemPrice = cart[i];
    let item = Object.keys(itemPrice)[0];
    let price = itemPrice[item];

    itemPrices.push(`${item} at \$${price}`);
  }

  switch(itemPrices.length) {
    case 1:
      break;
    case 2:
      itemPrices = itemPrices.join(' and ');
      break;
    default:
      itemPrices[l-1] = 'and '.concat(itemPrices[l-1]);
      itemPrices = itemPrices.join(', ');
  }

  console.log(`In your cart, you have ${itemPrices}.`)
}


function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
 	 }


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
