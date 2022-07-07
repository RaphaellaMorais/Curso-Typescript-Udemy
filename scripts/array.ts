const filmesCategorias: (string | number)[] = ["Comédia", "Drama", "Romance", "Aventura"];


const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {

    filmesAnos.push(ano);
}

console.log(filmesAnos);




const senhaUpa: number []= [1, 2, 3, 4];
console.log(senhaUpa);

console.log("=====================");



//Objetivo seria gerar senha poara posto de atendimento publico que só atende 30 pessoas por dia; 

const senhaSalgadinho : (number | string) [] = []
//declarei uma variavel para uma array e determeniei que nesse array poderá ter os dois tipos de elementos;
//inicializei vazio. 

for (let usuario = 1; usuario <= 30; usuario++) { //dentro do for determinei uma variável para atribuição de valor inicial;
    //dei uma condição que determina que o laço de repetição só vai rodar até o valor atenda a condição que é determinada que valor usuário seja menor ou igual a 30;

    senhaSalgadinho.push("ss-"+ usuario);
    //pegando a variável principal e atrabuimos o método push que insere elementos dentro de um array;
    //no parametro do método push pegamos dois tipos e concatenamos para serem inseridos no array; 
}

console.log(senhaSalgadinho); // comando para imprimir a variável no console;








let lista: (number | string) [] = [];

for (let aluno = 1; aluno <= 40; aluno++) {
    
    lista.push("aluno" + aluno);
}

console.log(lista);



















//filmesCategorias.push("Rom");
//console.log(filmesCategorias);


//Outra forma de declarar array/Declarando uma classe array:
//Esse tipo de declaração <> ainda vai ser dada posteriormente;













//filmesCategorias.push(123456); #ele coloca mas avisa que ta errado;
//as ideias acima são as mesmas só formas diferentes de declarar array;