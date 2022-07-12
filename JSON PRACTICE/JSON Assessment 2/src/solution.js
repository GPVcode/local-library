/*
  The `faker` package has already been installed. 
  
  Require the `faker` package at the top of this file. Make sure to assign it to a variable named `faker`.
  
  Use the `faker` package inside of the `plantGenerator()` function.
  
  For the `name` property, return a string value using any method from `faker` that you want. 
  
  For the `color` property, return a string value using one of the available color methods from `faker`.

  `plantGenerator` should return a different `name` and `color` combination each time it is called.
  
  Finally, export `plantGenerator` as a function.
*/
let faker = require("faker"); //require faker package and assign it to variabel named faker
function plantGenerator() {  //this is our plantGenerator function
  return { 
    name: faker.hacker.abbreviation(),  //for the 'name' property, return a string value using any method from 'faker' that you want
    color: faker.internet.color(), //for the 'color' property, return a string value using one of the available color methods from 'faker'
  }; 
}

module.exports = plantGenerator; //export our function named 'plantGenerator as a function.
