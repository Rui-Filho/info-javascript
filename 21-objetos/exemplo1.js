/* Exemplo 1   */

let user = {
    name: "Jhon",
    age: 30,
    "like birds":true
}

console.log(user.name)

console.log(user.age)

user.isAdmim = true

console.log(user)

delete user.age
console.log(user)

let user2 = {}

user2["like birds"]=false

console.log(user2["like birds"])

