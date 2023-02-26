//exercício:
//1) Implemente a função, que retorna “Maior de
//idade caso a idade passada seja maior que 17
//ou “Menor de idade caso contrário.

function MaiorIdade(idade){

    if (idade > 17){
        return "Maior de idade";
    }
    else{
        return "Menor de idade";
    }
}

console.log(MaiorIdade(18)); // teste do exercício: Maior de Idade
console.log(MaiorIdade(17)); // teste do exercício: Menor de Idade