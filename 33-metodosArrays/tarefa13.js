/* Tarefa 13   */

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users)

console.log(usersById)

function groupById(arr){

    return arr.reduce((ac,item)=> {

        ac[item.id] = item

        return ac 

    },{})


}
