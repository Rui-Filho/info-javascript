/* Tarefa 11   */


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) )

function getAverageAge(array){
    return array.reduce((ac,item)=> ac + item.age,0)/array.length

}