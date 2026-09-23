/*   Tarefa 1*/

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
]



let weakMap = new WeakMap()

function read(message) {    
    weakMap.set(message, true);
}

function isRead(message){
   return weakMap.has(message)
}

read(messages[0])

read(messages[2])





console.log(isRead(messages[0])); // true
console.log(isRead(messages[1])); // false
console.log(isRead(messages[2]))