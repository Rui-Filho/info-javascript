/* weakMap  */

let john = { name: "John" };

let map = new Map();

map.set(john, "...")

john = null;

console.log(map.keys())


/* Mesmo Jhon recendo vazio, o map continua mantendo acesso ao mesmo objeto, e portanto consegue extrair as chaves   */


/* WeakMap    */

let john1 = { name: "John" };

let weakMap = new WeakMap();

weakMap.set(john1, "...")

john1 = null

console.log(weakMap.keys())


