const axios = require("axios");

let data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

async function fetchData(dataSet) {
 for (entry of dataSet) {
  const { data: newData } = await axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`);
  updateData(newData);

  console.log(data);
 }
}

function updateData(newData) {
 data = data.map(e => {
  if (e.id === newData.id) return newData
  return e;
 })
}

fetchData(data);

// Calculation

function calculate({ operands= [1, 2], type= "addition" } = {}) {
 return operands.reduce((acc, val) => {
  switch(type) {
   case "addition":
    return acc + val
   case "subtraction":
    return acc - val
   case "multiplication":
    return acc * val
   case "division":
    return acc / val
  }
 }, ["addition", "subtraction"].includes(type) ? 0 : 1)
}

console.log(calculate());
console.log(calculate({ type: "division" }));
console.log(calculate({ operands: [2, 3, 4], type: "multiplication" }));

// Counting instances of values in an object
// let names = ["Alice", "Peter", "Bob", "Tiff", "Peter", "Bob", "Bruce", "Alice", "Leslie", "Leslie"];

// let countNames = names.reduce((allNames, name) => {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }

//   return allNames;
// }, {});

// console.log(countNames);

// // Grouping object by a property

// let people = [
//   { name: "Alice", age: 21 },
//   { name: "Max", age: 20 },
//   { name: "Jane", age: 20 }
// ];

// function groupBy(objectArray, property) {
//   return objectArray.reduce((acc, obj) => {
//     let key = obj[property];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

// console.log(groupBy(people, "age"));