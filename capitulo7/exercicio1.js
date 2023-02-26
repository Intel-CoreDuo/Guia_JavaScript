//exercício:
//1)Utilizando loops, implemente a função que
//recebe um texto e um número de repetições.
//Ela deve retornar uma string com o texto
//repetido n vezes, sendo n o número de
//repetições.

function textoRepetido(texto, repeticoes){
    let frase = "";
    for (let i = 0; i < repeticoes; i++){
        frase += texto + " ";
    }
    return frase;
}

console.log(textoRepetido("Viva Cristo Rei", 10)); //teste do exercício