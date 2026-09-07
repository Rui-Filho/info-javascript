/*Tarefa 1 */


function camelize(str){

    let array = str.split("-")


    let resultado = array.map((item,indice) => {
        if(indice===0) return item
        if(indice>0) return item[0].toUpperCase()+item.slice(1)
    })   

    return resultado.join("")    

}


console.log(camelize("background-color"))

console.log(camelize("list-style-image"))

console.log(camelize("-webkit-transition"))





camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';