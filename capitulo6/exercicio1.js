//exercício:
//1) Implemente a função, que recebe um preço e
//um booleano indicando se já está com desconto
//ou não. Se o preço for maior que 100 e não
//estiver com desconto, a função deve retornar
//“Quero pechinchar”. Caso contrário, deve retornar
//“Negócio fechado”.

function Verificarpreco(Preco, desconto){
    if (Preco > 100 && !desconto){
        return "Quero pechinchar";
    }
    else{
        return "Negócio fechado";
    }
}

console.log(Verificarpreco(100, true)); //teste do exercício: Negócio fehado
console.log(Verificarpreco(100, false));//teste do exercício: Negócio fechado
console.log(Verificarpreco(101, true));//teste do exercício: Negócio fechado
console.log(Verificarpreco(101, false));//teste do exercício: Quero pechinchar