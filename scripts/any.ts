//let valor; o valor é any mesmo sem declarar; 
//Variável do tipo any, aceita qualquer valor, posso trocar o valor = true; que vai aceitar;
let valor: any; 
 
valor = "João";
valor = 1000;
valor = true;

console.log(typeof valor);

console.log("====================")

let despesaFixa: any;
let despesaVariavel: number;

despesaFixa = "150";
despesaVariavel = 320;

console.log(despesaFixa + despesaVariavel);


//Com o any vc volta a insegurança do JS

let itens: any[] =[];