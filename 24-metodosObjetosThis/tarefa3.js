/* Tarefa 3 - Encadeamento

"O retorno de cada chamada já chama a próxima chamada encadeada."*/

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function() { 
    console.log( this.step )
    return this
  }
}

ladder
.up()
.up()
.down()
.showStep()
.down()
.showStep()
