

/* Para economizar em comentários, melhor mesmo dividir em funções: desmembrar uma função muito grande em duas, torna o código mais legível; masi fácil de entender e mais organizado.   */


const resultado = mostrarPrimos(10)

console.log(resultado)

function mostrarPrimos(n){

    const primos = []

    for (let i = 2; i <= n; i++){

        if(éPrimo(i)) primos.push(i)

    } 
    return primos
}


function éPrimo(n){
    for (let i = 2; i < n; i++){

        if(n % i ===0)return false
    
    }

    return true
}










/*function mostrarPrimos(n){

            
            
            for (let i = 2; i < n; i++){
                // chekar se é número primo
                for (let j = 2; j < i; j++){
                    if(i % j == 0) continue
                }

                console.log(i)
            }

    
        }



        console.log(mostrarPrimos(8))*/