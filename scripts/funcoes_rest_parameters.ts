/* function somarRenda(mes1: number, mes2: number, mes3:number) :number {

    return mes1 + mes2 + mes3;
}

console.log(somarRenda(250, 780, 695)); */


//Usando o rest parameters "..." (operador de espalhamento);
//O TS/JS vai entender que cada um dos parâmetros que eu passar vai ser adicionado no meu array chamado meses;
/*O método reduce()executa uma função redutora (fornecida por você) 
para cada elemento do array, resultando em um único valor de retorno */


 
function somarRenda(...meses: number[]): number {

    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}

console.log(somarRenda(250, 780, 695, 2000, 6500)); 



