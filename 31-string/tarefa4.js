/*   tarefa 4*/

function extractCurrencyValue(str){

    if(str.slice(0,2)!=isFinite){
        return +str.slice(2)
    }
    return +str.slice(1)

}

console.log(extractCurrencyValue("$5100"))

console.log(extractCurrencyValue("R$5100"))

console.log(extractCurrencyValue("$&800"))