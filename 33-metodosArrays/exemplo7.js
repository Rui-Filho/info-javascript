/* Split and Join   */

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}



/* Segundo argumento para split  */

let arr1 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr1); // Bilbo, Gandalf


let str = "test";

console.log( str.split('') ); // t,e,s,





/*  join  */

let arr6 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str5 = arr6.join(';'); // glue the array into a string using ;

console.log( str5 ); // Bilbo;Gandalf;Nazgul
