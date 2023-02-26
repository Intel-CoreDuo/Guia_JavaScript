//exercício
//3) Implemente a função, que soma dois
//números e retorna o texto A soma deu: x,
//sendo x o resultado da soma.

function Soma(x, y){
    let resultado = x + y;
    let mensagem = "A soma deu: "
    return mensagem + resultado;
}

console.log(Soma(4, 4)); //teste do exercício