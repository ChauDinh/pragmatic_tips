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