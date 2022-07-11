interface IProduto {
    nome: string;
    preco: number;
    descricao?: string; // quando a gente quer definir alguma propriedade ou parâmetro como opcional usamos "?" depois do nome da propriedade ou função;
    dataValidade: Date; //Date é uma classe nativa do JS;
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 2000,
    //descricao: "Meu notebook superpotente",
    dataValidade: new Date(2022, 11, 1)
}
