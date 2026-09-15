/* Tarefa 2 

FAZER IMPROVISO DESTA

*/


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]




function aclean(lista){

    let map = new Map()

    lista.forEach(item => {

        let assinatura = item.toLowerCase().split("").sort().join("")

        if(!map.has(assinatura)) {
            map.set(assinatura,item)
        }

    }) 
    
    return Array.from(map.values())

       

}

console.log( aclean(arr) )