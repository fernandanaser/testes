//fazer require da classe Cliente
const Cliente = require('../../models/cliente')

describe('Clientes', ()=> { //função clientes, testes serão feitos
    beforeEach(() => { //configurações, executado antes dos its

    })

    //cada seção it é uma seção de teste que vai rodar no sistema

    it('Valida propriedades de um cliente', () => { //
        let cliente = Cliente.primeiro(); // vai retornar primeiro dado do banco de dados, dentro de cliente
        expect(cliente.id).not.toBeUndefined(); // id não pode ser indefinido
        expect(cliente.nome).not.toBeUndefined(); // nome ''
        expect(cliente.telefone).not.toBeUndefined(); // telefone ''
    });

    it('Retorna todos', () => { //
        let clientes = Cliente.todos(); // vai retornar através de uma classe chamada clientes, um método estático chamado todos, 
        expect(clientes.length).toEqual(10) // que vai retornar uma lista de 10 itens (espera que a quantidade venha igual a 10)
    });

    //validar se o nome do usuário está upercase
    it('Nome do cliente Upercase', () => { //
        let cliente = Cliente.primeiro(); // busca o primeiro cliente, instância cliente,
        cliente.nome = "danilo" 
        expect(cliente.nomeUpercase()).toEqual("DANILO") // criado o método nomeUpercase, deve retornar o nome em maiúsculo
    });

})