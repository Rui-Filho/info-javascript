/* Declarando a função primeiro   */


let usuario = {
  nome: "Rui",
  idade: 42
}

function dizerOi(){
    console.log("Oi!!!")
}

usuario.dizerOi = dizerOi

usuario.dizerOi()
