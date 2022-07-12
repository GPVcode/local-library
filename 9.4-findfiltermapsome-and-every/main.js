const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

//find() method
let found = parks.find((park) => park.name === "Biscayne");
console.log(found);//> { name: "Biscayne", rating: 4.2 }

//filter() method
let result = parks.filter((park) => park.rating >= 4.5);
console.log(result); // [ { name: "Grand Canyon", rating: 5 }, { name: "Gateway Arch", rating: 4.5 } ]

//map() method -- use to create strings
const result = parks.map((park) => `${park.name}: ${park.rating}`);
console.log(result); // ["Biscayne: 4.2", "Grand Canyon: 5", "Gateway Arch: 4.5", "Indiana Dunes: 4.1"];

//some() method -- results true or false
const result = parks.some((park) => park.rating > 4);
console.log(result); //true

//every() method -- results true or false
const resutl = parks.some((park) => park.rating > 4.2 && park.rating < 4.6);
console.log(resutl); //false

Object.keys(parks).filter((name) => {
    const rating = parks[name];
    return rating >= 4.5;

}); // => ["Grand Canyon", "Gateway Arch"]

// All of these methods require that you return some value INSIDE the callback function.


//Assessment answers

function findParkByName(parks, name) {
    return parks.find((park) => {
      return park.name ===name;
    });
  }
  //   if (!parks) return null;
  //   let foundParks = parks.find((park) => park.name === name);
  //   return foundParks;
  
  // }
  
  function allParksAboveCertainSize(parks, minSize){
    return parks.every(park => {
      return park.areaInSquareKm > minSize;
    })
  }
  
  // {
  //   let foundParks = parks.every((park) => park.areaInSquareKm > minSize);
  //   return foundParks;
  // }
  
  
  
  //use map to return an array of strings
  function getBigParkNames(parks, minSize) {
    let foundParks = parks.filter((park) => park.areaInSquareKm > minSize).map((park) => park.name); //This is all 1 line
    return foundParks
  }
  
  function doesStateHaveOneBigPark(parks, minSize, state) {
    let foundParks = parks.filter((park) => park.areaInSquareKm >= minSize).some((park) => park.location.state === state);
    return foundParks;
  }