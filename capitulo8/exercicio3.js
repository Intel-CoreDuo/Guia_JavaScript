//exercício:
//3)Implemente a função que recebe uma array de números positivos
//diferentes entre si e retorna o índice do maior número encontrado.

//Exemplo: se a array for [10,50,30], o maior número é o 50, então a
//função deve retornar o índice 1.

//Lembre-se que os índices das arrays começam em 0.

function MaiorNumeroPositivo(array){
    let maiorIndice = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > array[maiorIndice]){
            maiorIndice = i;
        }
    }
    return maiorIndice;
}

console.log(MaiorNumeroPositivo([10, 50, 30])); //teste do exercício