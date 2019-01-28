const axios = require("axios");

let data = [
 { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
];

async function fetchData(dataSet) {
 const pokemonPromises = dataSet.map(entry => {
  return axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`);
 })

 const results = await Promise.all(pokemonPromises);

 results.forEach(result => {
  updateData(result.data);
 })

 console.log(data);
}

function updateData(newData) {
 data = data.map(e => {
  if (e.id === newData.id) return newData
  return e;
 })
}

fetchData(data);