/*Qualidade ou estado de ser capaz de assumir diferentes formas;
- Quando uma classe filha cria um mesmo atributo ou método de sua classe pai, mas implementando
um novo comportamento ou lógica, sobrescrevendo-o;
Ex. Classe pessoa - 1 fala inglês, 2 fala português*/

class Empresa {
    prestarServico() {
        return "Empresa prestando serviço";
    } 
}

class Padaria extends Empresa {

    prestarServico() {
        return "Vendendo pão";
    }
}

class Mercearia extends Empresa {
    prestarServico(): string {
        return "Vendendo alimentos e bebidas";
    }
}

console.log(new Empresa().prestarServico());
console.log(new Padaria().prestarServico());
console.log(new Mercearia().prestarServico());