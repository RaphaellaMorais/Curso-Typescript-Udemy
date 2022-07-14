//Um conjunto de instruções que executa uma tarefa ou calcula um valor.

import  mostrarMensagem  from "./funcoes/mostraMensagem";


console.log(mostrarMensagem("Hcode"));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({url: "https://hcode.com.br"}));


const show = (codigo:number): number | Date | object => {
    return new Date();
}