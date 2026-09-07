/* Object.assign 

método para clonar/copiar propriedades de outros objetos para um objeto alvo*/


let user = { name: "John" }

let permissions1 = { canView: true }
let permissions2 = { canEdit: true }


Object.assign(user, permissions1, permissions2);


console.log(user.name)
console.log(user.canView)
console.log(user.canEdit)
console.log(user)