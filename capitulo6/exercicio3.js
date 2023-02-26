//exercício:
//3)Implemente a função, que recebe 3 números e
//retorna Têm negativo caso pelo menos 1 deles
//seja menor que 0. Caso contrário, ela deve
//retornar Tudo positivo.

function Negativo(num1, num2, num3){
    if (num1 < 0 || num2 < 0 || num3 < 0){
        return "Têm negativo";
    }
    else{
        return "Tudo positivo";
    }
}

console.log(Negativo(-1, 2, 3));//teste do exercício: Têm negativo
console.log(Negativo(-1, -2, -3));//teste do exercício: Têm negativo
console.log(Negativo(1, 2, 3));//teste do exercício: Tudo positivo