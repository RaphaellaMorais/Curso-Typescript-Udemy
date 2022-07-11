"use strict";
class Cadastro {
    nome;
    nascimento;
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    email;
    empresa;
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const clienteJoao = new Cliente("João", new Date("2000-01-01"), "joao@hcode.com.br", "Hcode");
console.log(clienteJoao);
class Filme {
    nome;
    ano;
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
class Romance extends Filme {
    roteirista;
    produtora;
    constructor(nome, ano, roteirista, produtora) {
        super(nome, ano);
        this.roteirista = roteirista;
        this.produtora = produtora;
    }
}
const filmeProduzido = new Romance("Um lugar bem longe daqui", new Date("2022-07-15"), "Petra Costa", "Universal Pictures");
console.log(filmeProduzido);
//# sourceMappingURL=classe_heranca.js.map