/* Tarefa 2  */

let date = new Date(2012, 0, 3); 


function getWeekDay(data){

    let diaSemana = data.getDay()

    switch(diaSemana) {
        case 0:
            return "SU"
            

        case 1:
            return "MO"
            


        case 2:
            return "TU"
            


        case 3:
            return "WE"
        


        case 4:
            return "TH"



        case 5:
            return "FR"
            

        case 6:
            return "SA"
            


        default:
            return "Opção inválida"

    
    }
    
}





console.log( getWeekDay(date) )
