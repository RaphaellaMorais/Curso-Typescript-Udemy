import { Android, Email, SMS } from "./classes/MeiosDeNotificacao";


new Email().enviar({
    nome: "João",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});

new SMS().enviar({
    nome: "João",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});

new Android().enviar({
    nome: "João",
    email: "joao@hcode.com.br",
    telefone: "11912344321",
    idAndroid: "sdfgsdgdf"
});