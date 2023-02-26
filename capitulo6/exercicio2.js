//exercício:
//2)Implemente a função, que recebe uma nota e
//um número de faltas e retorna “Aprovado” caso
//a média seja maior ou igual a 7 e o número
//de faltas menor que 10, ou “Reprovado” caso
//contrário.

function Nota_Faltas(nota, faltas){
    if (nota >= 7 && faltas < 10){
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}

console.log(Nota_Faltas(7, 9)); //teste do exercício: Aprovado
console.log(Nota_Faltas(8, 10)); //teste do exercício: Reprovado
console.log(Nota_Faltas(6, 0)); //teste do exercício: Reprovado
console.log(Nota_Faltas(2, 20)); //teste do exercício: Reprovado