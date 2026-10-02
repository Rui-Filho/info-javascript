/* Desestruturação de objetos  */

let clubes = {
  Gremio: "3 Libertadores",
  Inter: "2 libertadores)",
  Juventude: "Sem libertadores"
};

let {Gremio, Inter, Juventude} = clubes;

console.log(Gremio)
console.log(Inter)
console.log(Juventude)


/* A ordem não importa*/

let {Camiseta1,Camiseta3,Camiseta2} = {Camiseta1:"Azul", Camiseta2:"amarela", Camiseta3:"Vermelha"}

console.log(Camiseta2)



/* Se quisermos atribuir uma propriedade a uma variável com outro nome, por exemplo, atribuir options.widtho valor à variável chamada `my` w, podemos definir o nome da variável usando dois pontos:  */ 

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200