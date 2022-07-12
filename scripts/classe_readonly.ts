class Usuario {

    readonly id: string = "123456abcd";
    nome: string = "João";
    private senha: string = "123456";
    readonly dataCadastro: Date = new Date("2021-01-01");
}

const usuario = new Usuario();

//usuario.id = "123"; // não deixa alterar o id por causa do readonly que só permite leitura; Mas ainda assim permite executar;

console.log(usuario.id);

/*Qual a diferença do readonly e privete com um eu vejo a informação, já com o privete não consigo nem mesmo visualizar */