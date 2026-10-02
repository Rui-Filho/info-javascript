/* Valores padrão
Se o array for menor que a lista de variáveis ​​à esquerda, não haverá erros. Valores ausentes são considerados indefinidos.    */

let [nome,sobreNome] = []

console.log(nome)

console.log(sobreNome)



/* Se quisermos um valor "padrão" para substituir o valor ausente, podemos fornecê-lo usando =: */

let [nome1="Rui", nome2="Reinehr"] = ["Paulo"]

console.log(nome1)
console.log(nome2)



/*O valor padrão é utilizado quando o valor é undefined.  */

let [a = 10] = [5]
console.log(a)




/* Os valores padrão podem ser expressões mais complexas ou até mesmo chamadas de função. Eles são avaliados somente se nenhum valor for fornecido.

Por exemplo, aqui usamos a promptfunção para dois valores padrão:  */ 


// runs only prompt for surname
let [name3 = prompt('name?'), surname3 = prompt('surname?')] = ["Julius"];

console.log(name3);    // Julius (from array)
console.log(surname3); // whatever prompt gets

