/*função de parâmetro inteligente   */


// Podemos passar parâmetros como um objeto, e a função os desestrutura imediatamente em variáveis:


let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};


function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {

  console.log( `${title} ${width} ${height}` )
  console.log( items )
  
}

showMenu(options)







/* Também podemos usar desestruturação mais complexa com objetos aninhados e mapeamentos de dois pontos:*/



let options1 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  console.log( `${title} ${w} ${h}` ); // My Menu 100 200
  console.log( item1 ); // Item1
  console.log( item2 ); // Item2
}

showMenu(options1)




/* Podemos corrigir isso definindo {} o valor padrão para todo o objeto de parâmetros:  */

function showMenu1({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log( `${title} ${width} ${height}` );
}

showMenu1(); // Menu 100 200