// Print infomações na saida
console.log("Hello world!");
// Ponto e virgula ao final da instrução é opcional.

//Comentários
// 1ª //
/* 2ª */

//Variáveis e Tipos
/*
    Boolean - (True, False)
    Number - (1, 1.0245, 123454648974) - Sem diferença de float e int
    String - "Casa", 'Carro' e `Moto` - Aspas simples, duplas ou acesso ``
    Objeto - {}
    Array - []
    Null - null
    Undefined - undefined
*/
// Para saber um tipo de variavel podemos utilizar a função typeof()
console.log(typeof(15.24))

//Definir variaveis
// 1ª modo
var nome = "Gabriel";
console.log("Meu nome é "+nome+"!");
// 2ª modo
const sobrenome = "Barreto";

let idade = 25;
idade = 26;
console.log("Minha idade é "+idade+".");

let primo = 123;
console.log("Antes >>>", typeof(primo))
primo = 'Luigi';
console.log("Depois >>>", typeof(primo))
console.log("Meu primo é: "+primo);
