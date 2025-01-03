let notas = [4, 4 , 6];
let i = 0;

function gets(){
    if(i < notas.length){
        const nota = notas[i];
        i++;
        return nota;
        }
    return null;
    };

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};