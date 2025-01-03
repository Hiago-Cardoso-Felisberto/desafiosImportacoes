const {gets, print} = require("./funcoesAuxiliares3");

const salario = gets();
const beneficio = gets();

function calcular(salario, beneficio){
    let imp = 0;
    switch(true){
        case salario == 0.00 && salario <= 1100.00 :
            imp = salario * 0.05;
            break;
        
        case salario >= 1100.01 && salario <= 2500.00 :
            imp = salario * 0.10;
            break;

        case salario > 2500.00 :
            imp = salario * 0.15;
            break;
    }
    let salLiquido = salario + beneficio - imp;

    print(salLiquido);
}

calcular(salario, beneficio);