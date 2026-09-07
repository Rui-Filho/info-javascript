/* Tarefa 1  

"Uma função construtora chamada com new retorna automaticamente this. A única exceção é quando ela retorna explicitamente um objetoespecífico e diferente, como em return obj; nesse caso, esse objeto substitui o this como valor retornado."*/

let obj = {}

function A() { 
    return obj

}
function B() {
    return obj
}

let a = new A()
let b = new B()

console.log( a == b )