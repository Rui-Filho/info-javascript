/* Tarefa 1  */

let user = {
  name: "John Smith",
  age: 35
}

let userText = JSON.stringify(user)

console.log(userText)

let userObj = JSON.parse(userText)

console.log(userObj)