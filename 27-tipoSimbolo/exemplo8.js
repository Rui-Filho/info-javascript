

/* Symbol.keyFor()     */

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log( Symbol.keyFor(sym) )

console.log( Symbol.keyFor(sym2) )


let globalSymbol = Symbol.for("name")

let localSymbol = Symbol("name")

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

console.log( localSymbol.description ); // name