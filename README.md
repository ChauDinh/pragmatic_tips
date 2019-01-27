# Some tips for JavaScript developers in 2019

## What we will cover?

###1. Async / await
```js
async function foo() {
 const result = await axios.get("https://dube.io/service/ping");
 const data = result.data;

 console.log("data", data);
 return data;
}

foo();
```