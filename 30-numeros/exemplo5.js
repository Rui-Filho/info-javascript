/* arredondamento  */ 

let numero = 3.3

let numeroNegativo = -2.2

console.log(Math.floor(numero)) // para baixo

console.log(Math.floor(numeroNegativo)) // para baixo - PEGADINHA

console.log(Math.ceil(numero))// arredonda pra cima

console.log(Math.ceil(numeroNegativo))

console.log(Math.round(numero)) // arredondamento tradicional

console.log(Math.round(numeroNegativo))


//Arredondamento de números decimeis - 

//método 1

let num2 = 1.23456

console.log(Math.round(num2 * 100)/100)

//método 2

console.log(num2.toFixed(20))