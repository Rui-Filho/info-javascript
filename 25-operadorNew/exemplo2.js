/*Exemplo 2 de função construtora */

function Calculadora(a, b){

    this.numero1 = a;

    this.numero2 = b;

}


let calc1 = new Calculadora(3,2)

let calc2 = new Calculadora(20,4)

console.log(calc1,calc2)