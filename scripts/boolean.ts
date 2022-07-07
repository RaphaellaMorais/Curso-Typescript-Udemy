let admin: boolean = true;


admin = Boolean(0); 

console.log(admin);

console.log("=====================")

let senha = "1234";
let senhaSegura: boolean;

senhaSegura = senha.length > 8;

console.log(senhaSegura);






















//admin = true;
//admin = 1; //o TS não aceita, a gente subtende q 1 é um valor verdadeiro.

//para converter podemos fazer o seguinte: admin = Boolean("1"); 

//0 | null | undefined #retornaria false