/* Clonagem, mesclagem de objects usando for...in  

Para clonar um objeto em outra vaŕiavel e tornalo independete usando loopign For e o operador "IN"*/


let user = {
  name: "John",
  age: 30,
};

let clone = {}


for (let key in user) {
  clone[key] = user[key];
}


clone.name = "Pete"

console.log( user.name )

console.log(clone.name)