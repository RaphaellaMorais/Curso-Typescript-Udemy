/* interface ISoma {
    (num1:number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1:number, numero2:number): number => {
    return numero1 + numero2
}

//Eu testando
console.log(primeiraSoma(2,2)); */

interface ISoma {
    (num1:number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1:number, numero2:number): number => {
    return numero1 + numero2
}

interface Calculos {
    somar(a: number, b: number): number;
    subtrair(a: number, b:number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: Calculos;

function adicao(a:number, b:number){
    return a + b;
}

const subtrair = (n1:number, n2:number) => n1 - n2;

calculadora = {
    dividir: (numero1: number, numero2: number) => {
        return numero1 / numero2;
    },
    multiplicar: function (numero1: number, numero2: number) {
        return numero1 * numero2;
    },
    somar: adicao,
    subtrair //aqui não preciso colocar o nome, por serem os mesmo;
}

//Vimos aqui como implementar funcões de diferente formas;
//Os parâmetros que a gente informa lá dentro da interface, todas as opções, definem como vai ser a forma da nossa função;
//A ideia da interface é: Preciso de uma função que tenha um determinado nome, que espere esse determinado número de parâmetros,com esses valores e me retorne algo;
//O objetivo da interface é definir a forma de como vai ser as várias propriedades dentro dela, aqui aprendemos a fazer isso com funções;