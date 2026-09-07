/* slice   */

let carro = "Voyage"

console.log(carro.slice(0,2)) // extrai os índices dentro do intervalo de 0 a 2, mas excluindo o 2: "0=V, 1=o (2=y excluido)"

console.log(carro.slice(2)) // com apenas um argumento ele vái até o final da string

console.log(carro.slice(0))

console.log(carro.slice(-3,-1)) // ag - Com números negativos, a aprtir do final da string

/*  substring */ 
// quase mesma coisa que slice, a diferença é que o início pode ser maior do o fim, então ele inverte automaticamente.não suporta números negativos.

console.log(carro.substring(0,3))
console.log(carro.substring(3,0))

/* substr  - OBSOLETO - DEPRECATED*
primeiro argumento é a posição, o segundo é o número de carcterers para extrair*/

console.log(carro.substr(1,4))//oyag

