
/*
funções de seta multilinha
As funções de seta que vimos até agora eram muito simples. Elas recebiam argumentos do lado esquerdo de uma expressão =>, avaliavam-na e retornavam a expressão do lado direito.

Às vezes precisamos de uma função mais complexa, com múltiplas expressões e instruções. Nesse caso, podemos envolvê-las em chaves. A principal diferença é que as chaves exigem um return dentro delas para retornar um valor (assim como uma função comum).

Assim:

*/

let soma = (a, b) => {  
  let result = a + b
  return result 
}

console.log( soma(1, 2) )