/* Tarefa 8  */

function formatDate(date){

    

    let instante = new Date().getTime()/1000

    let data = date.getTime()/1000

    let resultado = instante - data

    if(resultado<1){
        return "right now"
    }  else if(resultado<60) {
        return `${Math.floor(resultado)} sec. ago`
    } else if(resultado<3600){
        return `${Math.floor(resultado/60)} min. ago`
    } else{  
        
        let da = String(date.getDate()).padStart(2,"0")
        let mo = String(date.getMonth()+1).padStart(2,"0")
        let ye = date.getFullYear()%100
        let ho = String(date.getHours()).padStart(2,"0")
        let mi = String(date.getMinutes()).padStart(2, "0")

        return `${da}.${mo}.${ye} ${ho}:${mi}`       
        

    }

}



console.log( formatDate(new Date(new Date - 1)) )

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) )

// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );