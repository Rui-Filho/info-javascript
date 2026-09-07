/*  find / findIndex / findLastInex */

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name) // John



let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
console.log(users1.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
console.log(users1.findLastIndex(user => user.name == 'John')); // 3



/* Outros exemplos */

let carro = [
    {id:1, carro:"fusca"},
    {id:2, carro:"uno"},
    {id:3, carro:"fusca"},
]

console.log(carro.find(item => item.id==1))

console.log(carro.findIndex(item => item.carro=="fusca" ))

console.log(carro.findLastIndex(item => item.carro=="fusca"))

