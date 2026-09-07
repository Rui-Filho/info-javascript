/* Encadeamento opcional - exemplo prático 

Ao invés de retornar erro, ele retorna "undefined", e o código segue. O javascript pergunta, existe a propriedade "address dentro do objeto user?" */


let user = {}

console.log( user.address?.street)