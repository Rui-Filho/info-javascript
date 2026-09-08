/* Array like - Array.from   */

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};



let array = Array.from(arrayLike)

console.log(array.pop())