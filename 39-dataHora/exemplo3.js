/* new Date(year, month, date, hours, minutes, seconds, ms)*/


let date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log( date ); // 1.01.2011, 02:03:04.567

let ex1 = new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
let ex2 = new Date(2011, 0, 1); // the same, hours etc are 0 by default

console.log(ex1)
console.log(ex2)