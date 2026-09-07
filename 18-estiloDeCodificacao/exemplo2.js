


function potencia(x,n) {

    if(n < 0){
        console.log("Números negativo não suportado")
    } else {
        let resultado = 1

        for (let i = 0; i < n; i++){
            resultado *= x
        }

        return resultado
    }

    

}


console.log(potencia(10,2))






function potenciaMelho(x,n){
    if(n < 0){
        console.log("Número negativo não suportado")
        return
    }

    let resultado = 1

    for (let i = 0; i < n; i++){
        resultado *= x
    }

    return resultado

}


console.log(potenciaMelho(10,-5))