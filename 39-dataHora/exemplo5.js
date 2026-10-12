/* Definindo componentes de data  */

let today = new Date();

console.log(today)

today.setHours(0);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp.

console.log(today)