let ano: number;
let ano2: number;

ano = 2021;

// EX: ano2="2010"; # ele não vai somar, vai concatenar, se eu deixar como string;
// EX: ano2 = Number("4000"); #Assim ele aceita porq ta transformando em number;
//EX: ano2= +"4000"; #Outra alternativa para converter em number;
//EX: ano2= parseInt("4000"); #Para converter para número inteiro;
//EX: ano2= parseFloat("4000.65"); #Para converter para Float;

ano2=2010;

console.log(ano + ano2);

const numeroGigante: bigint = 50n; //#ex. ES2020, explo q exibiu erro porq o ES estava antigo. 

//tsc --watch #deixa o compilador assistindo a minha pasta | está compilando automáticamente;