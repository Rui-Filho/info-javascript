/* Loop com entries  */

let user = {
  name: "John",
  age: 30
}

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`)
}





/* O código similar para  Map é mais simples, pois é iterável:  */

let user1 = new Map()
user1.set("name", "John")
user1.set("age", "30")


for (let [key, value] of user1) {
  console.log(`${key}:${value}`)
}





/* Truque de troca de variáveis  */

let guest = "Jane";
let admin = "Pete";


[guest, admin] = [admin, guest]

console.log(`${guest} ${admin}`)



/* Improviso  */


let Rui = "Grêmio";
let Adriano = "Inter";

[Rui,Adriano] = [Adriano,Rui]

console.log(Rui)
console.log(Adriano)





