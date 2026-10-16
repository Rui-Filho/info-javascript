/* Tarefa 7  */


function getSecondsToTomorrow(){

    let i = new Date()

    const resultado = 86400-(i.getHours()*3600+i.getMinutes()*60+i.getSeconds())

    return resultado
}




console.log(getSecondsToTomorrow())