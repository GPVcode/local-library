function calculatePriceInDollars(priceInCents){
    return priceInCents / 100;
} //This simple function takes a number and divides it by 100]
calculatePriceInDollars(100); //> 1  (Returns 1 because 100 cents = 1 dollar)
calculatePriceInDollars(250); //> 2.5
calculatePriceInDollars(); //> NaN
//If you want the value to be 0 instead of NaN, you can set the default for PriceInCents parameter.
function calculatePriceInDollars(priceInCents = 0){
    return priceInCents / 100;
}
calculatePriceInDollars(); //> 0

//WHY USE DEFAULTS?
// If there is a typical care for your function, but you want to allow for certain options, you might use defaults.
// If one or more of the argument values that you're using come from an outside source, you might use defaults because you woin't necessarily be able to control the input values. Consider below:

function calculateTotal(products = [], { discountPercentage, salesTax = 0.0825} = {}) {
    let result = 0;
    for (let i = 0; i < products.length; i++) {
      const { priceInCents, quantity } = products[i];
      result += priceInCents * quantity;
    }
  
    if (discountPercentage) result *= 1 - discountPercentage;
    return result * (1 + salesTax);
  }
  
  // Inputs
  const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const options = { discountPercentage: 0.1, salesTax: 0.0825 };
  
  // Function call
  calculateTotal(); //> 0

//The above function takes in an array of products and calculates the total. If discountPercentage is included in the options parameter, it will apply a discount. It will then add salesTax to the total.


/*
  The following functions have various syntax errors in them. Fix the bugs to get the testsl to pass!
  
  When any of the following function's parameters reference `product`, they are referencing an object with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/
//requirements: 1. should convert the price in cents to a string price in dollars 2. should default to 0 if there is no 'priceInCents' key 3. should default to 0 if no product is provided
function getPriceInDollars(product = null) { //sed parameter default to null in case there is no input.
    if (!product){ //if NOT product, return $0.00
      return "$0.00";
    }
    if (!product.hasOwnProperty("priceInCents")){ // if NOT product.hasOwnproperty return $0.00
      return "$0.00";
    } 
    const priceInDollars = product["priceInCents"]; //set priceInCents key into variable priceInDollars
    return "$" + (priceInDollars/100).toFixed(2); // return our varibale in the right formatt
  }
  
  
  
  // `size` is a number between 0 and 16.
  function checkIfSizeIsAvailable(product=null, size = 0) {
    if (!product){ //if NOT product return false
      return false; 
    } 
    if (!product.hasOwnProperty("availableSizes")){ //if NOT product.hasOwnProperty, return false
      return false; 
    } 
    const availableSizes = product["availableSizes"];  //assign product key "AvailableSizes in variable 'availableSizes'
    return availableSizes.includes(size); }  //.includes method either return true or false based on our condition (iun this case if availableSizes includes input size)
  
  
  module.exports = { getPriceInDollars, checkIfSizeIsAvailable };
  
  