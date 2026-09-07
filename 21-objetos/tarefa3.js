/* tarefa 3 soma de propriedades */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let soma = 0

for(let salarie in salaries){
    soma += salaries[salarie]
}

console.log(soma)