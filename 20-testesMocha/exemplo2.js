/* Exemplo mais realista*/





function éPar(numero){
    return numero % 2 === 0
}



describe('Função éPar', function(){

    it('deve retornar true para números pares', function(){

        assert.strictEqual(éPar(4), true)

    })

    it('deve retornar false para números ímpares', function(){

        assert.strictEqual(éPar(5), false)

    })

})