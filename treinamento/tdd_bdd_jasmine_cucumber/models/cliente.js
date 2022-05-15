// exportando a classe Cliente criada, que tem um método estático que retorna várias instâncias do objeto

module.exports = class Cliente {
    // id = 0
    // nome = ""
    // telefone = "" // declaração de propriedades, também pode ser feita por construtor:

    constructor() {
        this.id = 0;
        this.nome = ""
        this.telefone = ""
    }

    //implementação do método nomeUpercase
    nomeUpercase(){
        return this.nome.toUpperCase(); //mostrar nome no maiúsculo
    }

    //funções estáticas
    //retornar um único objeto
    static primeiro() {
        return new Cliente() //a instância de Cliente é retornada no método primeiro
    }

    static todos() {
        return [
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
        ]
    }
}