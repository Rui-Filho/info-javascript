/* Strings são iteráveis   */

for (let char of "test") {
  // triggers 4 times: once for each character
  console.log( char ); // t, then e, then s, then t
}


let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, and then 😂
}





/* Para compreender mais profundamente  */

let str1 = "Hello";


let iterator = str1[Symbol.iterator]();

while (true) { //Enquanto for verdade

  let result = iterator.next() // peça o próximo elemento

  if (result.done) break; //se acabou pare

  console.log(result.value) // se não acabou, mostre o valor
}





/* Exemplo para testar mecanismo manual   */


let carro = ["uno","fusca","chevete","kombi"]

let iterator1 = carro[Symbol.iterator]();

while(true){

    let res = iterator1.next()

    if(res.done) break;

    console.log(res.value)
}
