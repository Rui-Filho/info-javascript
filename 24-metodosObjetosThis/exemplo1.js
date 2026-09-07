/* Métodos de objetos 

Aqui, usamos uma expressão de função para criar uma função e atribuí-la à propriedade user.sayHido objeto.

Então podemos chamá-lo de user.sayHi(). O usuário agora pode falar!

Uma função que é uma propriedade de um objeto é chamada de seu método .

Então, aqui temos um método sayHido objeto user.

*/


let usuario = {
  nome: "Rui",
  idade: 42
}

usuario.dizerOi = function() {
  console.log("Oiii Gramputa!")
}

usuario.dizerOi()

