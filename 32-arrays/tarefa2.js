/* tarefa 2 */

let estilos = ["Jazz","Blues"]
estilos.push("Rock")
estilos[Math.floor((estilos.length-1)/2)]="Classics"
console.log(estilos.shift())
estilos.unshift("Rap", "Reggae")

console.log(estilos)