

let arr = [5, 3, 8, 1]

filterRangeInPlace(arr, 1, 4)

let arr1 = [10,5,7,88,5,66,3,4,8,9,44,5,22,66,7,9,15,18,13,39]

filterRangeInPlace(arr1,10,40)

console.log(arr)

console.log(arr1)



function filterRangeInPlace(arr,a,b){

    for(let i=0; i < arr.length; i++){

        if(arr[i]<a||arr[i]>b){

            arr.splice(i,1)
            i--

        }
    }

}