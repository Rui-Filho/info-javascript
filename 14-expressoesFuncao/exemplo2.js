/* Copiando uma função para uma variável    */


function soma(a, b) {
  return a + b;
}

let calcular = soma;

console.log( calcular(2, 3) )

console.log(soma(1,2))