/* Improviso da tarefa 2  */

let nomes = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

let nomes2 = [
    "listen",
    "silent",
    "enlist",
    "hello",
    "world",
    "evil",
    "vile",
    "live",
    "veil",
    "stone",
    "notes",
    "tones"
];



function retornar(lista){

    let map = new Map()

    lista.forEach(item => {

        let id = item.toLowerCase().split("").sort().join("")

        if(!map.has(id)){
            map.set(id,item)
        }
        
    })

    return Array.from(map.values())

}

console.log(retornar(nomes))

console.log(retornar(nomes2))