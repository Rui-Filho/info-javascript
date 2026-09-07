/* Map  */

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)

console.log(lengths)




/* Retona um novo valor ao inves de um item - TRANSFORMA UM ARRAY */ 

let numeros = [1,2,3,4,5,6,7,8,9].map( item => item*2)

console.log(numeros)


/* sort()  */

function compareNumeric(a, b) {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b) return -1
}

let arr5 = [ 1, 2, 15 ]

arr5.sort(compareNumeric)

console.log(arr5)  // 1, 2, 15




/* Função mais curta usando sort  / Arrow function  */

let numeros2 = [1,8,9,7,-6,1,-4,-1,10,74,1,8]

let ordenados = numeros2.sort((a,b) => a-b)

console.log(ordenados)


/* reverse  */

let numeros7 = [1,2,3,4,5,6,7,8]

console.log(numeros7.reverse())

