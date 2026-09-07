/* Tarefa 1  */

function ucFirst(str){

    if(!str){
        return "Preencha com um nome válido!"
    }
    
    return str[0].toUpperCase()+str.slice(1)
}


console.log(ucFirst("isabel"))

console.log(ucFirst("ricardo"))

console.log(ucFirst("rui"))

console.log(ucFirst("eduardo"))

console.log(ucFirst(""))


