const {gets, print} = require("./funcoesAuxiliares1");

let notas = [];
let i = 0; 
let soma = 0; 

while (true) { 
    const nota = gets(); 
    if (nota === null) { 
        break; 
    } 
    notas[i] = nota; 
    i++; 
}

for (let j = 0; j < notas.length; j++) { 
    soma += notas[j]; 
} 

let media = soma / notas.length; 

if (media < 5){
    print(`Media ${media.toFixed(2)}, portanto reprovado`);
}
    else if (media >= 5 && media <7){
        print(`Media ${media.toFixed(2)}, portanto recuperação`);
    }
        else{
            print(`Media ${media.toFixed(2)}, portanto aprovado!`);
        }