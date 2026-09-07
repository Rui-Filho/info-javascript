/* TAREFA 5  */



let arr1 = ["HTML", "JavaScript", "CSS"]

let sorted = copySorted(arr1)

function copySorted(arr){

    let copy = arr.slice()

    copy.sort()

    return copy
    
}

console.log(arr1)

console.log(sorted)



