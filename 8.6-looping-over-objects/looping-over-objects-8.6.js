//In this lesson, we will learn how to access an object's key and values resulting in a simpler code that gives us flexible access into our database
const people = { // This is our database which consists of names aas our keys and address information as our values
    "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
    "Whitney Shawna": { address: "392 Norfolk Street", isCustomer: false },
    "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
  };

  for (let name in people) { // This is the for/in loop. 'name' is the variable, is a string , acts klike a loop counter and is not a number. It also contains the current index of the array property. 'people' is the object being looped through
    const person = people[name]; // assign value of the name within each object of people
    const address = person.address; // assign value of address of each object within people into 'address' variable
    console.log(`Sending mail to ${name} at ${address}.`); // use template literals for name and address
  }

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
