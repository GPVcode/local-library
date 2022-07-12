// $ node
// Welcome to Node.js v16.15.1.
// Type ".help" for more information.
> //Today, we are taking a closer look at control flow and identifying simpler ways of using if/else


> //Traditional
undefined
> function getPrice(product){
    let price = product.priceInCents;
    if (product.onSale) {
..... price = price * 0.9;
..... }
... return price;
... }
undefined
> const product = {
... priceInCents: 2100,
... name: "Red Beanie",
... size: "L",
... onSale: true,
... };
undefined
> getPrice(product);
1890


> //simpler way to write our getPrice(product) function
> function getPrice(product){
... let price = product.priceInCents;
... if(product.onSale) price = price * 0.9;
... return price;
... }
//NOTE: Use line consolidation techniques like this in your own code if the content inside the block is very short. Otherwise, it will be too difficult to read.

  
// The conditonal operator
// (conditional expression) ? (expression if true) : (expression if false)

> function getPrice(product){
... return product.onSale ? product.priceInCents * 0.9 : product.priceInCents; // if product.onSale is truthy : if product.onSale is falsy
... }


// Assessment

/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// Use a conditional (ternary) operator below.
function checkSize(product, size) {
  return product.availableSizes.includes(size) ? result = "We have that size." : result = "We do not have that size." //THIS IS WAY MORE SIMPLE -- return based on truthy or falsy
  }


// Use a `switch` statement below.
function newYorkCitySalesPrice(product, city) { //function with two parameters
  let tax; // use let because tax variable likely to change depending on input
  switch (city){ //this is new syntax. Given expression is evaluated after the switch keyword is introduced. a matching case is searched for using strict equality.
    case "Amherst": // search for a matching case with strict equality.
    tax = 1.0875;
    break; // use break when matching case is found. if no matching value is found, default runs.
    case "Brooklyn":
    tax = 1.08875;
    break;
    case "Buffalo":
    tax = 1.0875;
    break;
    case "Cheektowaga":
    tax = 1.0875;
    break;
    case "Hempstead":
    tax = 1.08625;
    break;
    case "Jamaica":
    tax = 1.08875;
    break;
    case "Mount Vernon":
    tax = 1.08375;
    break;
    case "New York City":
    tax = 1.08875;
    break;
    case "Staten Island":
    tax = 1.08875;
    break;
    case "White Plains":
    tax = 1.08375;
    break;
    case "Yonkers":
    tax = 1.08875;
    break;
    default: // This get's run when no matching values are found.
    tax = 1.08;
  }

  return product.priceInCents * tax; //return our answer
}

module.exports = {
  checkSize,
  newYorkCitySalesPrice,
};