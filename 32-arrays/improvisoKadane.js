/*  Algoritmo de Kadane*/


function gerarMaiorSoma(matriz){

    let maiorSoma = 0

    let somaAtual = 0

    for(let numero of matriz){

        somaAtual += numero

        maiorSoma = Math.max(maiorSoma,somaAtual)

        if(somaAtual<0){
            somaAtual = 0
        }


    }

    return maiorSoma

}

console.log(gerarMaiorSoma([-1,5,1,2,-3,7,-8,-1]))//12

console.log(gerarMaiorSoma([1,5,8,-8,-2,5,20,4,-7,5,9,9,-2]))

console.log(gerarMaiorSoma([-2,-7,-2]))

console.log(gerarMaiorSoma([-1,-5,5,7,-2]))


