//Operadores de Loop
//FOR e Array
console.log("Eu sei contar até ...")
for(let i=0; i<10; i++){
    console.log(i);
}

const quemEstaAssistindo = ["Mauro", "Daniel", "Marco"];
// Push insere ao final do array
// Pop retira do final do array
quemEstaAssistindo.push('Luigi');
console.log("Quem está assistindo")
for(let i=0; i < quemEstaAssistindo.length; i++){
    console.log(quemEstaAssistindo[i]);
}

//Funcional - com callback
quemEstaAssistindo.forEach(function (nome){
    console.log(nome)
})

//WHILE
let i = 10;
console.log("Contagem regressiva.");
while(i > 0){
    console.log(i);
    i--;
}


// EXEMPLO DE CALLBACK
function printaNome(nome, index) {
  console.log(nome + " " + index);
}

function forEach(arr = [], callback = () => {}) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

forEach(quemEstaAssistindo, printaNome);
