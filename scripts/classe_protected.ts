class Domicilio {

    public cor: string;
    public endereco: object;

    constructor(cor: string, endereco:object) {

        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone(): string {

        return "Interfone tocado!";
    }

    protected atenderInterfone(mensagem: string): string { //mesmo estando na classe pai uma classe que extend tem acesso aos métodos protegidos da classe pai, algo que não funcionaria com privet;

        return mensagem;

    }
}

class Casa extends Domicilio {

    public entrarNaCasa() {

        return this.atenderInterfone("Oi, quem é?");
    }

}

const casaDoHomer = new Casa("Rosa", {cidade:"Springfield"});

console.log(casaDoHomer.entrarNaCasa());
