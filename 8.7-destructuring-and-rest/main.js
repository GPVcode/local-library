// in this lessn, we learn about how to write cleaner code through destructuring and rest operators
const product = { // This is our object. Within it are its keys and its keys' values.
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
        firstName: "Philip",
        surname: "Pullman",
    },
};
// when working with an object, you often need to use some, but not all, of the available keys.
function printAuthorAndTitle(product) {
    return `${product.title} by ${product.author.firstName} ${product.author.surname}`;
} //This works, but the return statements are a bit long because the need to repeat the 'product' variable.

// because of the length of the return item, you might update the above function to the one below
function printAuthorAndTitle(product) {
    const author = product.author; //assign objects key 'author' into variable 'author'
    const title = product.title; //assign objects key 'title' into variable 'title'

    return `${title} by ${author.firstName} ${author.surname}`; // This is better, but still looks a bit complex. This is where destructuring comes into play.
}
//destructuring is when you unpack properties or values and assigning them into distinct variables. bellow is an example.
function printAuthorAndTitle(product) {
    const { author, title } = product; //two const variables are created - author & title. {} before = sign is the destructuring syntax. The variables in our {} are set to whatever keys can be found inside of our object. If no keys are found, it will be set to undefined.
    return `${title} by ${author.firstName} ${author.surname}`;
} 

// You can then destructure multiple levels into an object.
function printAuthorAndTitle(product) {
    const {
        author: {firstName, surname}, //destructuring the author key
        title,
    }   = product;
    return `${title} by ${firstName} ${surname}`; //then we don't have to use author variable in our template literals. The only variable created are 'title', 'firstName', and 'surname'.
}

//"Do This" Excercise: destructure all keys from this object
const author = {
    name: {
        firstName: "Philip",
        surname: "Pullman",
    },
    birthday: "1946-10-19",
};
//answer
const {name} = author;
const firstName = name.firstName;
const surname = name.surname;
console.log(firstName); //> 'Philip'
console.log(surname); //> 'Pullman'

//Missing Keys
const author = {
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    birthday: "1946-10-19",
  };
  
  const { firstName } = author;
  console.log(firstName);
  // what do you expect to happen in this code? 
  //answer: undefined - 'author' object doesn't have a key called 'firstName'. The firstName key is nested inside of name key.

//   Destructuring parameters
//use destructuring in functions in order to destructure the parameters
function printAuthorAndTitle({ author, title }) {
    return `${title} by ${author.firstName} ${author.surname}`;
}
printAuthorAndTitle(product);
//Once understood, this syntax is useful because it is concise and easy to read, plus you'll know that the expected input into the function is an object. The downside, if you need to access the entire inputted object, you have no way to do so. 