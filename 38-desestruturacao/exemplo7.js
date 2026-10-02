/* Destruturação de objetos Parte 2 */


let options = {
  title: "Menu"
}

//Valores padrão em destruturação de objetos

let {width = 100, height = 200, title} = options

console.log(title)
console.log(width)
console.log(height)




/* Pode se funções como valor padrão 

let options1 = {
  title1: "Menu"
};

let {width1 = prompt("width?"), title1 = prompt("title?")} = options1;

console.log(title1);  // Menu
console.log(width1);  // (whatever the result of prompt is)*/



/* Também podemos combinar os dois pontos e a igualdade:  */


let carros = {
    fusca:"Azul",
    uno: "branco",
    palio:"vermelho",
}


let {fusca:Belina="Preto", uno:Brasilia="Vermelho", sentra:s="preto", onix:Jipe="Rosa"} = carros

console.log(Belina)
console.log(Brasilia)
console.log(s)
console.log(Jipe)







/* Se tivermos um objeto complexo com muitas propriedades, podemos extrair apenas o que precisamos:

  */


let options5 = {
  title5: "Menu",
  width5: 100,
  height5: 200
};

// only extract title as a variable
let { title5 } = options5;

console.log(title5); // Menu
















