# Some tips for JavaScript developers in 2019

Note: `The project is my note about JS I collected on books and the internet.`

## What we will cover?

### 1. Async / await
```js
async function foo() {
 const result = await axios.get("https://dube.io/service/ping");
 const data = result.data;

 console.log("data", data);
 return data;
}

foo();
```

- Async(Asynchronous) is that when something is going on we don't want to wait until the thing is done to continue the program. This technique is usually used when we make requests to server/API, which can take a couple of seconds to get data back.

The code above is just an example. Check my [async/await](https://github.com/ChauDinh/async_await/blob/master/async_await.js) repository or [JavaScript.info](https://javascript.info/async-await) for more.

### 2. async control flow

#### for...of

```js
import axios from "axios";

let data = [
 { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }
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
```
#### Promise.all

What if we want to fetch all of the data in paralell? Since we can await all of Promises, simply use `Promise.all()`.

```js
import axios from "axios";

let data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

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
```
Note: `for...of` and `Promise.all` are introduced in ES6+, so make sure to transpile the code. 

### 3. Destructuring & default values

Let's concern the code in the previous section

```js
const result = axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`);

const data = result.data;
```
There is an easier way, also introduced with ES6, to do that. Actually we can use destructuring to just take one or some values from an object/array. 

```js
const { data } = await axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`);

// we can rename the variable
const { data: newData } = await axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`);
```
Moreover, we can give default values when destructuring. That mean you will never end up with `undefined` and you don't have to check the variables manually.

```js
const { id = 5 } = {}
console.log(id) // 5
```
We can use the tricks with function parameters.

```js
function calculate({ operands = [1, 2], type = "addition" } = {}) {
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

console.log(calculate()); // 3
console.log(calculate({ type: "division" })); // 0.5
console.log(calculate({ operands: [2, 3, 4], type: "multiplication" })) // 24
```
