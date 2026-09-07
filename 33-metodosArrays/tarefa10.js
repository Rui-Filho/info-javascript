/* tarefa 10*/

/* Algoritmo Fisher Yates  */

/* NECESSÁRIO REVISAR  */

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]]
    }

    return array;
}

let numeros = [1, 2, 3, 4, 5]

console.log(shuffle(numeros))

