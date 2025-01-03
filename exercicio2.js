const {gets, print} = require("./funcoesAuxiliares2");

let i = 0; 
let maiorNum = Number.NEGATIVE_INFINITY;
let menorNum = Number.POSITIVE_INFINITY; 

while (true) { 
    const input = gets(); 
    if (input === null) { 
        break; 
    }
    
    const numero = parseInt(input, 10);

    if (numero % 2 === 0) { 
        if (numero > maiorNum) { 
            maiorNum = numero; 
        } 
    } 
    else { 
        if (numero < menorNum) { 
            menorNum = numero; 
        } 
    } 
    i++;
}

print(`O maior número é: ${maiorNum}, e o menor número  é: ${menorNum}`);
