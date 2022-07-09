//Interface não só tem suas proprias regras, seu contrato, mas ela também pode aproveitar as regras de um contrato de uma outra interface;
//E quem for fazer o uso dessa interface vai ter q respeitar todas as regras a dela e tbm de quem ela herdou/extendeu.

//Ex. quando duas interfaces compartilham das mesmas informações e talvez a gente precisasse repetir a mesma informações em mais de um lugar;
//É um cado de reaproveitamento de código;
interface Modelo {
    id: number;
    created_at:number;
    updated_at:number;
}

interface IPessoa extends Modelo{
    nome: string;
    idade?: number;
}


interface Usuario extends IPessoa {
    email: string;
    senha: string; 
}

// Estamos estendendo a forma e não os valores;
// Interface Usuario vai ter todas, pois estendeu de Pessoa que por vez estende de Modelo;

const joao: Usuario = {
    email: "joao@hcode.com.br",
    id: 1,
    nome: "João Rangel",
    senha: "123456",
    created_at: new Date().getTime(),
    updated_at: new Date().getTime()
}


// Nem tudo é p imprimir no console, no caso do exemplo acima é para mostrar q o TS não está dando erro;
