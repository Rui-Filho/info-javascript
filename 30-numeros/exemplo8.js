// parseInt e parseFloat - Extrai apenas números inteiros ou com ponto flutuante



let numero = parseInt("100px")
console.log(numero)//100

let numero2 = parseFloat("12.5mg")
console.log(numero2)//12.5


console.log(parseInt("12.8")) // 12

console.log(parseFloat("12.8.7")) //12.8

console.log(parseInt("A12")) //NaN


// parseInt usando parâmetro

let numeroBinario = parseInt("1101",2) //13
console.log(numeroBinario)

console.log(parseInt("22FFXX", 16))

