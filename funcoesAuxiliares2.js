let num = [4, 3, 6, 10, 20, 7, 9, 50, 1];
let i = 0;

function gets(){
    if(i < num.length){
        const numero = num[i];
        i++;
        return numero;
        }
    return null;
    };

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};