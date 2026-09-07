/* Terfa 2: Conferir se um objeto está vazio ou não.    */

let agenda = {
    
}

console.log(ehVazio(agenda))

agenda.nome = "Rui"

console.log(ehVazio(agenda))

function ehVazio(obj){

    for(let item in obj){        
            return false
        } 

    return true

        

    }   

    



