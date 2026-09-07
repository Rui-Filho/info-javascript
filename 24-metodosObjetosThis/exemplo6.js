
/* Arrow Function não possui this próprio.

Ela usa o this da função onde foi criada.

O this da arrow é exatamente o mesmo da função sayHi().

*/
let user = {

    name: "John",

    sayHi() {

        const arrow = () => {
            console.log(this.name)
        };

        arrow()

    }

}


user.sayHi()