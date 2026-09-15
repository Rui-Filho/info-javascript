/* Tarefa 1    */


function unique(arr) {

    let newArr = new Set(arr)

    return Array.from(newArr)

  
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) )