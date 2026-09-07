/* Cálculos imprecisos */


let numero = 0.1 + 0.2

console.log(numero.toFixed(20))

console.log(numero == 0.3)

console.log( 0.1 + 0.2 == 0.3 ); // false

let sum = 0.1 + 0.2;
console.log( +sum.toFixed(2) ); // 0.3 converter em número, acrescentar operador unário +