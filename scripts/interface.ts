// Interface é uma estrutura que nos permite definir a forma de objetos;
// Ela pode definir o tipo de propriedades, os parâmetros esperados por funções e o tipo do retorno dessas funções;
// não temos dentro do JS puro, o TS nos da esse recurso;
// Uma interface é como um contrato, ou acordo, que fazemos com o código;
// Precisamos seguir as regras definidas para que o código funcione;
// Uma interface cria um padrão, e nos obriga a segui-lo;

/* let endereco: {
    logradouro: string,
    numero: number,
    bairro: string,
    cidade: string
};

endereco = {
    logradouro: "Av.Paulista",
    numero: 1000,
    bairro: "Bela Cintra",
    cidade: "São Paulo"
}; */


//Ex. de como não vai ser aceito, pois não seguiu as regras acima:
//endereco = {
//   rua: "Av. Paulista",
//   nro: 1000
//};

// OS EXEMPLOS ACIMA AINDA NÃO É UMA INTERFACE, VAMOS VER: 
// A variável acima "endereco" é um objeto aberto, o tipo dele é apenas a {} e as informaçãos q foram passadas;
// Se vc precisar usar isso em mais de um lugar no seu código, 
//é ainda que entra a Interface, dar possibilidade de reutilizar com maior segurança;

interface IEndereco {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

let endereco: IEndereco;

endereco = {
    logradouro: "Av.Paulista",
    numero: 1000,
    bairro: "Bela Cintra",
    cidade: "São Paulo"
}; 

//É uma boa prática usar interfaces para criar a tipagem de dados da nossa aplicação;