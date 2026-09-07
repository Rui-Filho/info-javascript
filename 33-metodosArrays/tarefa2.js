/* Tarefa 2    */


let arr1 = [5, 3, 8, 1]

console.log(filterRanger(arr1,1,4))


let arr2 = [5,8,4,6,3,-5,4,10,7,2]

console.log(filterRanger(arr2,3,5))

console.log(arr1)




function filterRanger(arr,a,b){

   let resultado = arr.filter(item => item>=a&&item<=b)

   return resultado
   

}
