//REFERENCES
// Reference data typs  include functions, objects and arrays.
//Primitive data types refer to strings, numbers, booleans, null, and undefined


//Check out this interesting occurence:
const book = { title: "Mort", author: "Terry Pratchett" };
const mort = book;
book.price = 789;
console.log(mort); //> { title: "Mort", author: "Terry Pratchett", price: 789 }
//Surprisingly, if you modify the object (book.price = 789) through one variable,the other variable will have the same modification. Book and mort point towarads the same reference
// Example:
const sourcery = { title: "Sourcery", author: "Terry Pratchett" };
const favoriteBook = sourcery;
console.log(sourcery === favoriteBook); //> true

//Example 2:
const books = ["Mort", "Sourcery", "Equal Rites"];
const series = books;
series.push("Guards! Guards!");
console.log(books); //> [ "Mort", "Sourcery", "Equal Rites", "Guards! Guards!" ]