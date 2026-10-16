/* Tarefa 6  */

/* Quantos segundos tem o dia de hoje?  */




function getSecondsToday(){

    let instante = new Date()

    let horaParasegundos = instante.getHours()*3600

    let minutoParaSegundos = instante.getMinutes()*60

    let segundos = instante.getSeconds()

    const resultado = horaParasegundos+minutoParaSegundos+segundos


    return resultado
}




console.log(getSecondsToday())