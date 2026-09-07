/* Testes isFinite e isNaN   */

console.log(
    isNaN(3),
    isNaN(NaN),
    isNaN("Rui"),
    isNaN(Infinity)

)

console.log(
    isFinite(3),
    isFinite(NaN),
    isFinite("Vagina"),
    isFinite(0.8),
    isFinite(Infinity)
    
)

console.log(
    Number.isFinite(123),
    Number.isFinite(Infinity),
    Number.isFinite(2/0),
    2/0
)

console.log(
    Number.isNaN(123),
    Number.isNaN(Infinity),
    Number.isNaN(2/0)
)

console.log(Object.is(NaN, NaN))





