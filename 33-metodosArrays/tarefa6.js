/* Tarefa 6 */

function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }

    this.calculate = function(str) {

        let partes = str.split(" ")

        return this.methods[partes[1]](
            Number(partes[0]),
            Number(partes[2])
        )
    }
}


let calc = new Calculator()

console.log(calc.calculate("3 + 7"))
console.log(calc.calculate("35 - 10"))

calc.addMethod("*", (a, b) => a * b)
calc.addMethod("/", (a, b) => a / b)
calc.addMethod("**", (a, b) => a ** b)

console.log(calc.calculate("5 * 4"))
console.log(calc.calculate("20 / 5"))
console.log(calc.calculate("2 ** 3"))




/*                     Calculator
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
       methods       addMethod     calculate
          │             │             │
          ↓             ↓             ↓
   ┌─────────────┐   adiciona      recebe string
   │ "+" → soma  │   operações         │
   │ "-" → sub   │       │              ↓
   │ "*" → mult  │       └──────→    split()
   │ "/" → div   │                     │
   │ "**" → pot  │                     ↓
   └─────────────┘                descobre operador
                                         │
                                         ↓
                                  methods[operador]
                                         │
                                         ↓
                                   encontra função
                                         │
                                         ↓
                                  executa função
                                         │
                                         ↓
                                     resultado */