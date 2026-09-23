/*   Caso de uso Armazenamento de daod*/

let visitsCountMap = new Map();

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let john = { name: "John" };

countUser(john)
