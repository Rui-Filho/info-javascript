/* Tarefa 12   */

function unique(arr) {

     return arr.filter( (item,index)=> {

        return index===arr.indexOf(item)     

               
    })


  
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

console.log( unique(strings) )