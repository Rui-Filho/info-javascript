/* REduce   */

/* Exemplo simples   */

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15



/* Array is Array   */

console.log(Array.isArray({})) // false

console.log(Array.isArray([])) // true




console.log(typeof ({}))

console.log(typeof ([]))