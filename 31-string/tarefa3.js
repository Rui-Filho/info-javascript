/*   Tarefa 3*/


function truncate(str,maxLenght){

    if(str.length>maxLenght){
        return str.slice(0,maxLenght-1)+"…"
    }

    return str

}


console.log(truncate("0123456789", 5))

console.log(truncate("What I'd like to tell on this topic is:", 20))

console.log(truncate("Eu gosto de lamber champoulas raspadas", 20))