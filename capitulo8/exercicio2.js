//exercício:
//2)Implemente função que recebe uma array e retorna a soma de
//todos os seus números multiplicados por 2.

function arrayDobrado(array){
    let resultado = 0;
    for (let i = 0; i < array.length; i++){
         resultado += array[i];
    }
    return resultado * 2;
}

console.log(arrayDobrado([1, 2, 7, 9])); //teste do exercício: 38