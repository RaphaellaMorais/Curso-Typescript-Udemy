/*Herança permite que uma classe herde recursos de outra classe;
A classe que irá compartilhar as informações é chamada de "classe pai";
A classe que irá herdar as informações é chamada de classe filha;
*/

class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;

    constructor(
        nome: string, 
        nascimento: Date, 
        email: string, 
        empresa:string
    ) {

        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;

    }


}

const clienteJoao = new Cliente(
    "João", 
    new Date("2000-01-01"), 
    "joao@hcode.com.br", 
    "Hcode"
);

console.log(clienteJoao);