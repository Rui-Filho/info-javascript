/* Tarefa 3  */

let arr = ["a", "b"];

arr.push(function() {
  console.log( this )
})

arr[2]() // vai mostrar "a", "b", e a função.