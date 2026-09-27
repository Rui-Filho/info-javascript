/* Exemplo 2

Usando em sequeência Object.entries e objectformEntries, 



*/

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
}

let doublePrices = Object.fromEntries(
  
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
)

console.log(doublePrices.meat)

console.log(doublePrices)