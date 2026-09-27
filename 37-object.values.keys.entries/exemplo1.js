/* Object.values / keys / entries    */

let user = {
  name: "John",
  age: 30
};


for (let key of Object.keys(user)) {
  console.log(key)
}

for (let value of Object.values(user)) {
  console.log(value)
}

for (let entrie of Object.entries(user)) {
  console.log(entrie)
}

const novoArray = Object.keys(user).push("Email")

console.log(novoArray)



