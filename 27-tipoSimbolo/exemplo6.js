
/* Object.keys(user) também os ignora. Isso faz parte do princípio geral de "ocultar propriedades simbólicas". Se outro script ou biblioteca iterar sobre nosso objeto, não acessará inesperadamente uma propriedade simbólica.

Em contraste, Object.assign copia tanto as propriedades de string quanto as de símbolo:   */



let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

console.log( clone[id] ); // 123