/* Tarefa 2  */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}




console.log(topSalary(salaries))





function topSalary(lista){



    let maiorSalario = 0

    let nomeMaiorSalario = ""   
    
    if(Object.keys(lista).length===0) return null


    for(let[nome,salario] of Object.entries(lista)){
        

        if(salario>maiorSalario){

            maiorSalario = salario
            nomeMaiorSalario = nome
        }

    }

    return nomeMaiorSalario
}