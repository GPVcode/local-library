/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {

  if(products.length === 0){
    return `There are no items for sale.`  
  }
  
  let items = [];
  let itemsCount = 0;
  
  for(let i = 0; i < products.length; i++){ 
    itemsCount++;
    items.push(products[i].name);
  }
  if(items.length === 1){
    return "There is 1 item for sale: " + items[0] + ".";
  }
  if(items.length === 2){
    return "There are 2 items for sale: " + items.join(" and ") + ".";
  }
  if(items.length > 2){
    return `There are ${itemsCount} items for sale: ` + items.join(", ") + ".";
  }

} //function closing bracket
module.exports = {
  listAllItems,
};


//use join to concatenate the strings
// use template literals for specific results
