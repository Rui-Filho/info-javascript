/*   forEach */

/*["Bilbo", "Gandalf", "Nazgul"].forEach(console.log)*/


["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`)
})





/* indexOf & includes */

let arr = [1, 0, false];

console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1

console.log( arr.includes(1) ); // true





/* lastIndexOf  */

let fruits = ['Apple', 'Orange', 'Apple']

console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)







/* Includes lida melhor com NaN   */

const arr2 = [NaN];
console.log( arr2.indexOf(NaN) ); // -1 (wrong, should be 0)
console.log( arr2.includes(NaN) );// true (correct)








let frutas = ["maçã", "banana", "laranja", "banana"];

console.log(frutas.indexOf("banana", 2)); // 3


let numeros = [10, 20, 30, 20, 40];

console.log(numeros.indexOf(20));      // 1
console.log(numeros.lastIndexOf(20));  // 3
console.log(numeros.includes(20));    // true
console.log(numeros.includes(50));    // false
