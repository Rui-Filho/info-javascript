/* Tarefa 2   */



function checkSpam(str){

    let newstr = str.toUpperCase()

    return newstr.includes("VIAGRA")||newstr.includes("XXXXX")   

}


console.log(checkSpam('buy ViAgRA now') )
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit") )