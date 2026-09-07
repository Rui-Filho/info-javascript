/* Tarefa 1 (PEGADINHA = O RESULTADO É UM ERRO, POIS O THIS NÃO SE REFERE A NENHUM OBJETO, E A CHAMADA DA FUNÇÃO TB NÃO)  */

function makeUser() {
  return {
    name: "John",
    ref: this,
  }
}

let user = makeUser()

console.log( user.ref.name ) 