/* SEgundo Improviso do algorítimo de KADANE  */ 

function kadane(matriz){

    let somaParcial = 0

    let maiorSoma = 0

    for(let numero of matriz){ 

        somaParcial += numero

        maiorSoma = Math.max(somaParcial,maiorSoma)

        if(somaParcial<0) somaParcial=0

    }

    return maiorSoma
}




console.log(kadane([1,5,8,4,3,2,7,8,5,2,6,4,-10,-50,2,1]))

console.log(kadane([-1,-2,-3]))

console.log(kadane([-3,5,2,-4,7,-9,21,-8,-1,5,4]))

console.log(kadane([-50,-5,47,5,9,-4,7,-2]))

console.log(kadane([1,5,8,4,3,2,]))

console.log(kadane([1,-1,-1,-1,-5,8,4]))