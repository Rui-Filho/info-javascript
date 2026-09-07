/* SLICE */


let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

console.log(arr) // slice não altera o array original




/* CONCAT  */


let arr1 = [1, 2];

// create an array from: arr and [3,4]
console.log( arr1.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr1.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr1.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6





//Adiciona um elemento a um a.rray que já existe
let arr4 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr4.concat(arrayLike) ); // 1,2,[object Object]




let arr5 = [1, 2];

//Se houver um Symbol ele 

let arrayLike1 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr5.concat(arrayLike1) ); // 1,2,something,else




/* OUTTRO EXEMPLO usando concat  */

let N = [1,2]
let M = [3]
console.log(N.concat(M,4,5))
