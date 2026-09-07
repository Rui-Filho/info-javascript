/*Tipo de símbolo - (Type Symbo)    */




let id = Symbol()

let id2 = Symbol("id")

let id3 = Symbol("id")


console.log(id)

console.log(id2.description)

console.log(id2==id3) /* false Por que: Mesmo tendo a descrição "id".

Porque a descrição é apenas um rótulo para ajudar o programador.*/

console.log(id3.toString())

