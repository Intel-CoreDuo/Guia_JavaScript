//exercício:
//2)2) Implemente a função, que retorna
//“Aprovado” caso a nota passada seja, “Prova
//Final caso seja maior ou igual a 5 porém
//menor que 7 ou “Reprovado” caso contrário.

function situacaoAcademica(nota){
    if (nota >= 7){
        return "Aprovado";
    }
    else if (nota >= 5){
        return "Prova Final";
    }
    else {
        return "Reprovado";
    }
}

console.log(situacaoAcademica(7)); //teste do exercício: Aprovado
console.log(situacaoAcademica(5)); //teste do exercício: Prova final
console.log(situacaoAcademica(0)); //teste do exercício: Reprovado