//Preciso rever não entendi !

/*


interface IEmailV2 {
    nome: string;
    email: string;
}

interface INotificacaoV2 {
    enviar(usuario: MeuUsuarioV2): boolean;
}

interface MeuUsuarioV2 {
    nome: string;
    email: string;
    telefone: string;
    idAndroid?:string;
}


abstract class NotificacaoV2 {
    
    abstract enviar(): boolean;
}

class EmailV2 extends NotificacaoV2 implements INotificacaoV2, IEmailV2 {
    nome: string;
    email: string;

    constructor(usuario: MeuUsuarioV2) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar(): boolean {
       console.log(`Enviando e-mail para o usuario ${this.email} ...`);
       return true;
    }
}

class SMSV2 extends NotificacaoV2 {

    enviar(): boolean {
       console.log(`Enviando SMS para o usuario ${usuario.telefone} ...`);
       return true;
    }
}

class AndroidV2 extends NotificacaoV2 {
    enviar(): boolean{
        console.log(`Enviando mensagem para o usuário no Android ${usuario.idAndroid}`);
        return true;
    }
}

new EmailV2().enviar({
    nome: "João",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});

new SMSV2().enviar({
    nome: "João",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});

*/