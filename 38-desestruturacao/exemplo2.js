/* funciona com iteráveis   */

let [a, b, c] = "abc"

console.log(a)

console.log(b)

console.log(c)




/* Atribua a qualquer item do lado esquerdo.  */
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith
console.log(user);//{ name: 'John', surname: 'Smith' }
