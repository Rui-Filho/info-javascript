/* Clonagem aninhada, clonagem profunda   */


let usuario = {
  nome: "Rui",
  medidas: {
    altura: 182,
    largura: 50
  }
}

console.log( usuario)

let clone = Object.assign({},usuario)

clone.medidas.altura=170

console.log(clone)

console.log(usuario)

let clone2 = structuredClone(usuario)

clone2.medidas.altura= 160

console.log(clone2)

