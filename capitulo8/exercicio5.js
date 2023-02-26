//exercício:
//5) Implemente a função que recebe 3 números como parâmetros.
//Os dois primeiros delimitam um intervalo. A função deve retornar
//um array contendo os menores números pares dentro do intervalo.
//A quantidade de elementos nesse array deve ser igual ao 3o
//parâmetro passado

//Obs:

//O 1o parâmetro sempre será menor que o 2o parâmetro

//No intervalo passado sempre haverá números pares suficientes
//para a quantidade passada

//A função deve retornar os menores números pares possíveis
//dentro do intervalo

//Exemplo: se for passado os valores “2”, “10”, “3”, a função deve
//retornar o array [4,6,8]

//Exemplo: se for passado os valores “2”, “10”, “2”, a função deve
//retornar o array [4,6]

function MenoresPares(primeiro, ultimo, quantidade){
    const array = [];
    const arrayPares = [];

    for (let i = primeiro + 1; i < ultimo; i++){
        if (i % 2 == 0){
            array.push(i);
        }
    }
    
    for (i = 0; i < quantidade; i++){
        arrayPares.push(array[i]);
    }
    return arrayPares;
}

console.log(MenoresPares(2, 10, 3));
console.log(MenoresPares(2, 10, 2));