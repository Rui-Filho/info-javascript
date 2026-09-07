/*   length propriedade */


console.log("My\n".length)

let nome = "Roberto"
console.log(nome.length)


/*  Acessando caracteres */

console.log(nome[0],
    nome[1],
    nome[2],
    nome.at(-1),
    nome.at(0)
)



/* iterar usando for...of   */

for(char of nome){
    console.log(char)
}


/*  As cadeias de caracteres são imutáveis*/

let str = 'Hi';

str[0] = 'h' // error
console.log( str[0] ) // doesn't work