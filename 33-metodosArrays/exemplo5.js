/* Filter  */

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length)// 2

console.log(someUsers)



/*  Lógica do filter */

let usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Pedro" },
    { id: 3, nome: "Maria" }
];

let resultado = [];

for (let usuario of usuarios) {

    if (usuario.id < 3) {
        resultado.push(usuario);
    }

}

console.log(resultado)



/* Outros exemplos  */

let numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares);


/*Exemplos que eu criei para exercitar */


let frutas = ["morango", "banana","manga"]

let banana = frutas.filter(qualquer => qualquer=="banana")

console.log(banana)


let numeros1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let impares = numeros1.filter(numero => numero%2!==0)

console.log(impares)