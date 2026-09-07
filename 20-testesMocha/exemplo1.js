/*Exemplo simples
Arquivo da função
src/soma.js*/

function soma(a, b){
    return a + b
}

module.exports = soma


/*Arquivo de teste
test/soma.test.js*/

const assert = require('assert')
const soma = require('../src/soma')


// Describe: Agrupa testes relacionados
describe('Função soma', function(){
    // it = Define um teste específico
    it('deve retornar 5 ao somar 2 + 3', function(){
        // assert.strictEqual = Verifica se os valores são iguais
        assert.strictEqual(soma(2,3), 5)

    })

})