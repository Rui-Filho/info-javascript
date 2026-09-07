/* Loop usando for..in para objetos: Significa "Para cada item deste objeto, execute o seguinte código"   */

let usuario = {
  nome: "Rui",
  idade: 30,
  ehAdm: true
};

for (let chave in usuario) {
  
  console.log( chave,usuario[chave] )
  
}