/* Tarefa 4  */


let date = new Date(2015, 0, 2)

function getDateAgo(data,dia){

    let copiaData = new Date(data)

    copiaData.setDate(copiaData.getDate()-dia)

    

    return copiaData.getDate()
}






console.log(getDateAgo(date, 1));   // 1 — 1 de janeiro de 2015
console.log(getDateAgo(date, 2));   // 31 — 31 de dezembro de 2014
console.log(getDateAgo(date, 365)); // 2 — 2 de janeiro de 2014

console.log(date)

