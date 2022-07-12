//Object shorthand and spread
//object shorthand syntax means that you can create objects using values that you've stored in varfiable.
const title = "Infernal Devices";
const author = "K.W. Jeter";
const book = { title, author }; //destructuring syntax
console.log(book); //> { title: "Infernal Devices", author: "K.W. Jeter" }

const product = { book, priceInCents: 1950 }; //This code result in the following.
{
    book: {
        title: "Infernal Devices" ,
        author: "K.W. Jeter",
    },
    priceInCents: 1950,
};

// The spread operator
const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];
const allBooks { ...ownedBooks, ...wishlist };
//> [ "Infernal Devices", "Foundation", "Good Omens", "Guards! Guards!" ]


//In this example, product object contains the book key and priceInCents key. The salesTax contains the state and tax keys. This keys are ALL placed into a new object in varable 'sale'. spread operator expands only one level deep.
const salesTax = { state: "Washington", tax: 0.065 };
const sale = { ...product, ...salesTax };
/*
  {
    book: {
      title: "Infernal Devices",
      author: e"K.W. Jetr",
    },
    priceInCents: 1950,
    state: "Washington",
    tax: 0.065
  };
*/

//You can also overwrite keys in an object where you're using shorthand.

const sale = {
    ...product,
    ...salesTax,
    priceInCents: product.priceInCents * (1 + salesTax.tax),
};
/*
  {
    book: {
      title: "Infernal Devices",
      author: "K.W. Jeter",
    },
    priceInCents: 2076.75,
    state: "Washington",
    tax: 0.065
  };
*/

/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Washed Black Denim Overalls",
     priceInCents: 12000,
     availableSizes: [ 28, 30, 32, 36 ]
   }
*/

// `salesTax` is a decimal number, like 0.065
function createSalesProduct(product, salesTax) {
    return {
      // name: ,
      // availableSizes: Use spread operator
      ...product, //... is the operator 
      salesTax,
      priceInCents: product.priceInCents * (1 + salesTax),
    };
  }
  
  function joinSizes(productA, productB) {
    result = [...productA.availableSizes, ...productB.availableSizes]; //we put the keys in our array asnd used spread operator
    return result;
  }
  
  module.exports = {
    createSalesProduct,
    joinSizes,
  };
  
  //Using spread operators in function calls
  Math.min(45,23,76,1,2,-4)
  //-4
  const temperatures =[76,72,68,79,54,65];
  Math.min(temperatures);
  //NaN
  Math.min(...temperatures);
  54
  Math.min(76,72);
  72

  //using spread operators in arrays
  const parents =["Lorie", "Steve"];
  const kids = ["Jake", "Annie", "Jess"];
  const dogs = [ "Olie", "Cosmo"];
  const fullFamily = [parents, kids] // [Array(2), Array(3)]
  const fullFamily2 = [...parents, ...kids] //correct
// ["Lorie", "Steve, "Jake", "Annie", "Jess"]
  const fullFamily3 = [...parent, ...kids, "ME!", ...dogs, "Unnamed Pet Turtle"]
  return fullFamily3;
  // [""Lorie", "Steve", "Jake", "Annie", "Jess", "ME!", "Olie", "Cosmo", "Unnamed Pet Turtle"]