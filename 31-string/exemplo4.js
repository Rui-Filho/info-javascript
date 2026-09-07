
/* Métodos para alterar letras em minúsculas ou maiúsculas  */

let nome = "Rui"

console.log(nome.toUpperCase())

console.log(nome.toLowerCase())

console.log(nome[0].toLowerCase())



/*   indexOf   */

let frase = "Buceta Molhada"
console.log(frase.indexOf("Molhada")) 


let animal = "Vaca"
console.log(animal.indexOf("Tatu")) // -1 Não encontrou

console.log(frase.indexOf("molhada")) // -1 case sensitive


// Segundo ou outro parâmetro

let fruta = "banana"
console.log(fruta.indexOf("a"))
console.log(fruta.indexOf("a",2))// ignora antes da posição indicada
console.log(fruta.indexOf("a",4))

console.log(fruta.lastIndexOf("a")) // procura da direita pra esquerda, inverso

console.log(fruta.includes("banana")) // mais moderno e intuitivo, veremos mais adiante.