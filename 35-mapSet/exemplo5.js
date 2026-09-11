/* Object.formEntries()  */


let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange); // 2

console.log(prices)



/* Podemos usar Object.fromEntriespara obter um objeto simples de Map.  */

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

console.log(map)

let obj = Object.fromEntries(map); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj.orange); // 2

console.log(obj)