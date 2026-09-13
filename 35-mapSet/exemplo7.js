/* Iteração sobre set   */


let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});



/*  Meu exemplo: */

let carros = new Set()

carros.add("Fusca")

carros.add("Uno")

carros.add("Savero")

carros.forEach(carro => {
    console.log(carro)
})