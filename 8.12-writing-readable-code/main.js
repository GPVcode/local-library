//learning objetive - Refactor code to be more readable and more efficient. EZ2READ
//What is a guard clause? A statement that evaluates to a boolean that determines whether or not a function should continue running. An Overseer

//CODER RULES:

//CONCEPT: (DRY) DON'T REPEAT YOURSELF
    //Basic Code:
    function getAllSeries(authors) {
        const result = [];
        for (let i = 0; i < authors.length; i++) {
        for (let j = 0; j < authors[i].series.length; j++) {
            result.push(authors[i].series[j]);
        }
        }
        return result;
    }
    //Elegant Code:
    function getAllSeries(authors) {
        const result = [];
        for (let i = 0; i < authors.length; i++) {
        const author = authors[i];
        for (let j = 0; j < author.series.length; j++) {
            result.push(author.series[j]);
        }
        }
        return result;
    }

//CONCEPT: RETURN EARLY
  //Basic Code:
  function getSeriesListById(authors, id) {
    let selected = null;
    for (let i = 0; i < authors.length; i++) {
      const author = authors[i];
      if (author.id === id) selected = author;
    }
  
    if (id) {
      if (selected) {
        const message = `Series list: ${selected.series.join(", ")}`;
        return message;
      } else {
        return [];
      }
    } else {
      return "No ID provided.";
    }
  }

  //Elegant Code:
  function getSeriesListById(authors, id) {
    if (!id) return "No ID provided.";
  
    let selected = null;
    for (let i = 0; i < authors.length; i++) {
      const author = authors[i];
      if (author.id === id) selected = author;
    }
    if (!selected) return [];
  
    return `Series list: ${selected.series.join(", ")}`;
  }


//CONCEPT: AVOID BOOKEAN RETURNS -when possible.
  //Basic Code
  function moreThanThreeAuthors(authors) {
    if (authors.length > 3) {
      return true;
    } else {
      return false;
    }
  }
  //Elegant code:
  function moreThanThreeAuthors(authors){
    return authors.length >3;
  }


/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/
//DRY assign products[i] to products variable to mitigate repeated code
function getProductsBySize(products, size) {
    const result = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      for (let j = 0; j < product.availableSizes.length; j++) {
        if (product.availableSizes[j] === size) {
          result.push(product);
        }
      }
    }
  
    return result;
  }
  
  
  
  //Avoid Booleans
  function moreThanThreeProducts(products) {
    return products.length >= 4;
  }
  
  
  //Clean up
  function checkForSizeByName(products, name, size) { //so, we have a function that takes in 3 parameters named products, name, and size
    if (!products) return false; //check early to make sure we even have the product. If !product, no need to run rest of code.
    let product = null; //then we create a variable called product and set to null because its value will change as we go through our loop.
    for (let i = 0; i < products.length; i++) { // run through product object datbase
      const newProduct = products[i]; //set products[i] to newProduct variable to make code cleaner and prevent repetition
      if (newProduct.name === name) { 
        //if input name strictly matches avalue in our database, set that products[i] value into product variable
        product = newProduct;
      }
    }
    if (product) { 
        //Next, if the product that we found is true, return available sizes that include the input size
      return product.availableSizes.includes(size);
    }
    else {
      return false; //if no match return false
    }
  }

  //Thus, our checkForSizeByName function will either return a product name's sizes or it returns false.
    
      
      
   
  
  
  module.exports = {
    getProductsBySize,
    moreThanThreeProducts,
    checkForSizeByName,
  };

