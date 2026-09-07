/* Componentes internos: Um array, estruturalmente, é um objeto, então é copiado por referência   */

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( fruits ); // Banana, Pear - 2 items now



let frutas = ["Maçã", "Banana"];

console.log(typeof frutas)

