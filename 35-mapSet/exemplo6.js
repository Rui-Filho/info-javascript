/* SET  */

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}


let set1 = new Set();

set1.add("Rui");
set1.add("João");
set1.add("Maria");
set1.add("Rui");
set1.add("Maria");

console.log(set1)

console.log(set1.size)


/* EXEMPLO IMPORTANTE */


let numeros = [1, 2, 3, 2, 1, 4, 3];

let unicos = new Set(numeros);

console.log(Array.from(unicos))

