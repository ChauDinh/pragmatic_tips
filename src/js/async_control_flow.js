const axios = require("axios");

let data = [
 { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }
];

async function fetchData(dataSet) {
 for (entry of dataSet) {
  const result = await axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`);
  const newData = result.data;

  updateData(newData);

  console.log(data);
 }
}

function updateData(newData) {
 data = data.map(el => {
  if (el.id === newData.id) return newData
  return el;
 })
}

fetchData(data);