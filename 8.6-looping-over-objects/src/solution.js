/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  totalCost = 0;
  for(let item in cart){
    const itemName = cart[item];
    const itemCost = itemName.priceInCents * itemName.quantity;
    totalCost += itemCost;
  }
  return totalCost;
}

function printCartInventory(cart) {
  response = "";
  for(let item in cart){
    const itemName = cart[item];
    const quantity = itemName.quantity;
    response += `${quantity}x${item}\n`;  
  }
  return response;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
