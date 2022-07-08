//NULL
//Valor nulo como seu nome já diz é a ausêcia de valor;
//Um dos locais onde a gente usa bastante o nulo é quando trabalhamos com o DOM.
//No node JS não temos acesso ao DOM mas quando trabalhamos na parte front-end com o TS, usamos bastante o DOM.
//Quando trabalhamos com o DOM nós trabalhamos com vários metodos que nos retornam elementos;

const meuElemento:HTMLHeadingElement | null = document.querySelector("h2");

let db: string | null = "mysql, 127.0.0.1, password";

db = null;

//Relembrando - o null é a ausencia de valor, diferente de vazio. 
//UNDEFINED
//Já o undefined é uma variável que ainda não teve seu valor definido, não é uma ausência de valor/nulo, 
//simplesmente ainda não falei nada sobre ela; 

//Exs:
//let minhaVariavel; // eu declarei a variável só *ainda* não defini o valor dela; 
//let minhaVariavel: undefined; // se eu declarar assim eu amarrei o meu valor, ela não deixa mudar o tipo.

let minhaVariavel: string | undefined;

if (new Date().getDate() === 7) {
    minhaVariavel = "Hoje é o dia 7";
}

console.log(minhaVariavel);


//Geralmente vc vai usar o null com o Union Types | junto com algum outro tipo;