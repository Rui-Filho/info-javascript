/*  Object.assign = Clonagem de objeto simples - Copiando as propriedades de um objeto para um objeto vazio, usando o método dentro de uma variável.   */


let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user)

console.log(clone.name)
console.log(clone.age)


/* Se a propriedade existir, será sobrescrita   */

let user1 = { name: "John" }

Object.assign(user1, { name: "Pete" })

console.log(user1.name)