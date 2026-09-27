/* Tarefa 1  */

let salaries = {

  "John": 100,
  "Pete": 300,
  "Mary": 250  
  
}

console.log( sumSalaries(salaries) ) //650

function sumSalaries(obj){    

    let newArr = Object.values(obj)

    let soma = 0

    for(let valor of newArr){
        soma += valor
    }

    return soma
    
}