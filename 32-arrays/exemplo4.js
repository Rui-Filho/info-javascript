/*   Métodos pop,push,shift, unShift*/



// pop - remove do final
let fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.pop() ); // remove "Pear" and alert it

console.log( fruits ); // Apple, Orange




// push() adiciona nop final
let fruits1 = ["Apple", "Orange"];

fruits1.push("Uva");

console.log( fruits1 )



// shift - extrai do primeiro
let fruits2 = ["Apple", "Orange", "Pear"];

console.log( fruits2.shift() ); // remove Apple and alert it

console.log( fruits2 ); // Orange, Pear



//unshift - adiciona no primeiro

let fruits3 = ["Orange", "Pear"];

fruits3.unshift('Apple');

console.log( fruits3 ); // Apple, Orange, Pear




/* Os métodos push e unshift permitem adicionar vários elementos de uma só vez:*/

let fruits4 = ["Apple"];

fruits4.push("Orange", "Peach");
fruits4.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits4 )
