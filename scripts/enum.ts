enum Permission {
    ADMIN,
    USER,
    READONLY
}

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);



//no enum eu estou agrupando, estou dizendo que toddos esses dados compoe um grupo de informações. 


//tbm pode fazer assim:
//enum Permission {
//    ADMIN,
//   USER,
//   READONLY
//}

//não existe no JavaScript mas foi adicionado ao TS com o intuito de fornecer nomes mais amigáveis a conjuntos de valores numéricos.

//EU TESTANDO:

enum diasSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

console.log(diasSemana);
console.log(diasSemana.Domingo);

