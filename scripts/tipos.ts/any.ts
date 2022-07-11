//let valor; o valor é any mesmo sem declarar; 
//Variável do tipo any, aceita qualquer valor, posso trocar o valor = true; que vai aceitar;
let valor: any; 
 
valor = "João";
valor = 1000;
//valor = true;

console.log(typeof valor); //typeof me diz o tipo do valor q está sendo atribuitdo;

console.log("=========================================================")

let despesaFixa: any;
let despesaVariavel: number;

despesaFixa = "150";  //ele vai concatenar nesse caso porq a variável despesaFixa é uma string;
despesaVariavel = 320;

console.log(despesaFixa + despesaVariavel);


//O problema é que com o any vc volta a insegurança do JS, já que ele não vai restringir o dado a um tipo;



// EU TESTANDO:

let itens: any[] =[];

for (let compra = 1; compra <= 10; compra++) {
    
    itens.push("item - " + compra);
}

console.log(itens);


//---------------------------------------

let roupa = "blusa";
let quantidade = 0;


let iten: any[] =[];

for (quantidade; quantidade <= 10; quantidade++) {
    
    iten.push(roupa + quantidade);
}

console.log(iten);