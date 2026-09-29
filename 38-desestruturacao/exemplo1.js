/* Exemplo de desestruturação */


/* desetruturação de arrays  */

let arr = ["John", "Smith"]

// destructuring assignment

// sets firstName = arr[0]

// and surname = arr[1]

let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith





/* Utilizando tb com split   */

let [firstName1, surname1] = "Rui Reinehr".split(' ')
console.log(firstName1)
console.log(surname1)


/* Ignora os elementos separados por vírgula  */
// second element is not needed
let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( title ); // Consul