/* Rest  */

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1)
console.log(name2)


/* Usando Rest  */

let [name3, name4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];



console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2





/*  Podemos usar qualquer outro nome de variável no lugar de rest, apenas certifique-se de que ele tenha três pontos antes e seja o último na atribuição de desestruturação. */



let [carro1,carro2,...outrosCarros] = ["Uno", "Onix", "Opala","Palio","Sentra"]

console.log(carro1)

console.log(outrosCarros)

console.log(outrosCarros[1])