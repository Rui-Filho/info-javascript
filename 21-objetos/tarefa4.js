/* Tarefa 4

Multiplique os valores numéricos das propriedades por 2.
importância: 3
Crie uma função multiplyNumeric(obj)que multiplique todos os valores de propriedades numéricas objpor 2.

Por exemplo:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Observe que multiplyNumericnão precisa retornar nada. Deve modificar o objeto diretamente.

PS: Use typeofpara verificar se há algum número aqui.*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

multipliNumeric(menu)

console.log(menu)

function multipliNumeric(obj){

    for(let item in obj){
       if(typeof obj[item] == 'number'){
        obj[item] *= 2
       }
    }

   

}















