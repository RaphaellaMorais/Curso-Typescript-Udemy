/* interface ICurso {
    titulo: string;
    descricao?: string;
    preco:number;
    cargaHoraria:number;
    classificacao: number;
}

const curso: ICurso = {
    titulo: "TypeScript",
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
}

curso.titulo = "PHP 8";

console.log(curso); */

// Consegui alterar o titulo, não consigo mudar o nome da variável porq ela é uma constante;
//Eu não mudei o valor da constante, continua sendo um objeto, não atribui um novo objeto, não mudei de objeto para outra coisa;
//Continua sendo um objeto, continua respeitando a regra da minha interface, titulo espera uma string e respeitamos;
// Mas em nenhum momento eu disse que essa string é uma constante;
//SE EU NÃO QUERO PERMITIR ALTERAÇÕES DENTRO DE UMA PROPRIEDADE DA MINHA INTERFACE, EU CONSIGO FAZER ISSO,
//NÃO COM CONST PORQ É PARA VARIÁVEIS, MAS CONSIGO COM A PALAVRA RESERVADA DO TS O "readonly".

/*A ideia do readonly é que vc vai adicionar esse identificador no inicio da ---propriedade---
ex. readonly titulo : string; */

interface ICurso {
    readonly titulo: string;
    descricao?: string;
    readonly preco:number;
    cargaHoraria:number;
    classificacao: number;
}

const curso: ICurso = {
    titulo: "TypeScript",
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
}

//curso.titulo = "PHP 8";
//curso.preco = 6000;

console.log(curso);

//Mesmo que eu alterasse de const para let não iria aceitar, pois é a regra da interface q a gente ta seguindo;