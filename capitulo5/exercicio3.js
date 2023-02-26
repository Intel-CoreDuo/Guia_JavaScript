//exercício:
//3)Implemente a função, que recebe 3 notas e
//retorna os booleanos ou, indicando se a média
//simples entre as 3 notas (somar e dividir por 3)
//é maior ou igual a 7.

function VerificarAprovacao(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3;
    return media >= 7;
}

console.log(VerificarAprovacao(8, 7, 9)); //teste do exercício: true
console.log(VerificarAprovacao(5, 4, 7)); //teste dp exercício: false
