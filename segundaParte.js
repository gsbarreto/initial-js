// //Operadores Aritmeticos
console.log("Soma >>>", 5 + 5);
console.log("Subtração >>>", 5 - 5);
console.log("Divisão >>>", 5 / 5);
console.log("Multiplicação >>>", 5 * 5);

// Ref: https://www.w3schools.com/js/js_operators.asp

//Operadores condicionais

//IF
// OBS: Comparação de strings sempre com "==="
// Comparadores - &&(AND), ||(OR) e !(NOT)
// Comparações - >, <, ==, >=, <=
// REF: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
const valor = "3";
if (valor === 6) {
    console.log("Este é 6");
} else if (valor === 3) {
    console.log("Este é 3");
} else {
    console.log("Não encontrado");
}

const carro = "Civic";
const ano = 2008;
if (carro === 'Civic' && ano === 2008) {
    console.log("Este é meu futuro carro.");
}

//Ternário

const torceParaOGoias = true;
const idade = 11;
const torcedor = torceParaOGoias ? 'É um torcedor esmeraldino!':'Não é um to dor esmeraldino!';

//SWITCH
const nome = 'Mauro';
switch (nome) {
    case 'Mauro':
        console.log("Achei o Mauro");
        break;
    case 'Daniel':
        console.log("Achei o Daniel");
        break;
    case 'Marco Tulio':
        console.log("Achei o Marco Tulio");
        break;
    default:
        console.log("Não encontrei");
}