//Objetos
//Má pratica (Muito usado)
const pessoa = {
  nome: "Marco",
  sobrenome: "Tulio",
  idade: 27,
  cidade: "Uberlândia",
};

console.log("Antes >>>", pessoa);

pessoa.carro = 'Civic';

console.log("Depois >>>", pessoa);

//Boa Pratica (Vai por esse caminho)
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Marco', 27);

console.log(pessoa1)