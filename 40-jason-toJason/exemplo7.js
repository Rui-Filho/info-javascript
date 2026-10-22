/* JSON.parse

Transformando as strings(que foram convertidas de objetos para string) em objeto*/ 

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[1] ); // 1



/* Paras objetos aninhados  */

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log( user.friends[1] ); // 1