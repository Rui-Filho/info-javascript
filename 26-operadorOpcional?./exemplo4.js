/*   Acessando propriedades com colchetes (com o operador opcional)

E pode deletar também utilizando este operador.*/


let key = "firstName"

let user1 = {
  firstName: "John"
}

let user2 = null;

console.log( user1?.[key] ) // John
console.log( user2?.[key] )  // undefined

delete user1?.firstName

console.log( user1?.[key] ) // undefined

