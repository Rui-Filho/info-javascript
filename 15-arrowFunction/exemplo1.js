/* Arrow Functions   */




/* Função normal - Expressão de função  */
let soma = function(a,b){
    return a+b
}
console.log(soma(8,7))








/*Função seta é uma forma abreviada de criar funções. Chaves e o "return" são suprimidos  */

let somar2 = (a,b) => a+b

console.log(somar2(5,5))









/*Quando se tem apenas 1 argumento, os parênteses tb são suprimidos   */


let dobrar = m => m*2
console.log(dobrar(8))








/* Senão houver argumentos, os parênteses estarão vazios, mas devem estar presentes.  */

let sayHi = () => console.log("Hello!")

sayHi()