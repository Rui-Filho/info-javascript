/*Tarefa 5 */

function getLastDayOfMonth(year, month){

    let date = new Date(year,month+1,0)

    return date.getDate()




}

console.log(getLastDayOfMonth(2012, 1))

console.log(getLastDayOfMonth(2018,5))

console.log(getLastDayOfMonth(2019,1))