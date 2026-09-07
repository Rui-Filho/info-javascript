/*  Matrizes multidimensionais
Arrys dentro de um Array.*/


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[0][1] )





//Tem seu prorio método toString

let arr = [1, 2, 3];

console.log( arr ); // 1,2,3

console.log( String(arr) === '1,2,3' ); // true

console.log(String(arr))



//demais exemplos: operados binário concatena como string
console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"
console.log([1]+[1])//11


//Não se compara arrays com "==",pois sõ por referência, então cada objeto/array difere do outro, mesmo que os valores sejam iguais. Serão iguais se caso duas variásveis forem atribuidas aos mesmo array.


let array = [1,2]
let array2 = [1,2]
console.log(array==array2) //false

let array3 = [1,2,3]
let array4 = array3
console.log(array3==array4) // true