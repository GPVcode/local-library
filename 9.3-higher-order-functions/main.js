//forEach() method
let parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];
  
  /** Uncomment each section one at a time to run and test out the code snippets separately **/
  
  /** SECTION 1: USING A REGULAR FOR LOOP **/
  
  for (let i = 0; i < parks.length; i++) {
    console.log(parks[i].name);
}
  
  /** SECTION 2: USING logPark() **/
  
 const logPark = (park) => console.log(park.name);
 for (let i = 0; i < parks.length; i++) {
    logPark(parks[i]);
}
  
  /** SECTION 3: USING forEach() **/
  //forEach() method lets you call function paramter without for loop -- think about the items themselves, instead of counting indexes
  
parks.forEach((park) => console.log(park.name)); //written using an anonymous
    // OR
parks.forEach(logPark); //logPark is a callback function which is essentially a function passed into another function as an argument


//Assessment:

function printNames(names){
    names.forEach((name) => console.log(name));
      }
    
    function logTreeType(trees) {
      trees.forEach((tree) => console.log(tree.type));
    }
    
    function totalPoints(points) {
      // your solution here
      let sum = 0;
      points.forEach((point) => sum += point) //no need to use dot method to retrieve value from key
      return sum;
    };
    
    function buildSentence(words) {
      sentence = "";
      words.forEach((word) => sentence += word + " ")
      return sentence;
    }

    //This example makes use of template literals
    function buildSentence(words) {
      let sentence = "";
      words.forEach((word) => {
        sentence += `${word} `;
      });
      return sentence;
    }
   
    
    function logPercentages(decimals) {
      decimals.forEach((decimal) => console.log(decimal*100 + "%"))
    }
    //This example makes use of template literals
    function logPercentages(decimals) {
    decimals.forEach((decimal) => {
      console.log(`${decimal * 100}%`);
    });
}
    
    module.exports = {
      printNames,
      logTreeType,
      totalPoints,
      buildSentence,
      logPercentages,
    };
    

  
   