

function embaralhar(lista){

    for(let indice = lista.length - 1; indice > 0; indice--){

        let sorteio = Math.floor(Math.random() * (indice + 1)); //este detalhe é importante o ";" pra não bugar a próxima linha

        [lista[indice],lista[sorteio]] = [lista[sorteio],lista[indice]]

    }

    return lista
}

let numeros = [1,2,3,4,5,6,7,8,9]

console.log(embaralhar(numeros))