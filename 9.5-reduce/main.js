//Reduce() - used for accumulator patterns. Another way to express the accumulator pattern.
const area = [768, 1004.2, 433.1];
let result = areas.reduce((total, area) => total + area);
console.log(result); //>2205.3
//reduce method takes two arguments - a function and an optional starting value.

//show the syntax of having an initial value
const areas = [768, 1004.2, 433.1];
let initialValue = 200;
let result = areas.reduce((total, area) => total + area, initialValue);
console.log(result); //>2405.3 //first iteration starts at 200 and adds 768 on the second iteration(index[1])

const areas = [768, 1004.2, 433.1];
let initialValue = 200;
let result = areas.reduce((total, area, index) => {
    console.log(`index: ${index}`, `total: ${total}`, 
`area: ${area}`);
return total + area;
}, initialValue);
console.log(result); //> 2405.3

//Complex Usage
const parks = [
    { name: "Acadia", areaInSquareKm: 198.6 },
    { name: "Crater Lake", areaInSquareKm: 741.5 },
    { name: "Kenai Fjords", areaInSquareKm: 2710 },
    { name: "Zion", areaInSquareKm: 595.9 },
  ];

  //Accumulate array values into an object
  const parkToAreasObject = parks.reduce((result, park) =>{
    result[park.name] = park.areaInSquareKm;
    return result;
  }, {});
  //result:
  /*
  {
    Acadia: 198.6,
    'Crater Lake': 741.5,
    'Kenai Fjords': 2710,
    Zion: 595.9
  }
  */


  //Assessment

  const squareKmTotal = parks => parks.map(park => park.areaInSquareKm).reduce((acc, area) => acc + area);

const parkNameAndState = parks => { 
  return parks.reduce((acc, park) => { 
    acc[park.name] = park.location.state; 
    return acc;
  }, {}); 
};

const parkByState = parks => 
  parks.reduce((acc, park) => {
  let state = park.location.state;
  if (acc[state] == null) {
    acc[state] = [];
  } 
  acc[state].push(park);
  return acc;
}, {});