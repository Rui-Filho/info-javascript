/*   Tarefa 2*/

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
]

let weakMap = new WeakMap()

function read(message) {    
    weakMap.set(message, new Date());
}

function isRead(message){
   return weakMap.has(message)
}

function date(message){

    return weakMap.get(message)

}

read(messages[0])

read(messages[2])



console.log(isRead(messages[0]))

console.log(isRead(messages[1]))

console.log(isRead(messages[2]))

console.log(date(messages[0]))
