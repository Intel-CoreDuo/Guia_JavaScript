//exercício:
//4) Implemente a função que vai retornar qual o dia da semana vai
//ser a partir de um dia passado como string e de uma quantidade de
//dias a ser avançado. Para isso, a função deve receber uma string e
//um número como parâmetros e retornar uma string.

//Obs: os dias devem ser retornados no seguinte formato

//“Segunda-feira, Terca-feira, Quarta-feira, Quinta-feira, Sexta-feira,
//Sabado, Domingo”

//Se for passado “Segunda-feira” e 5: a função deve retornar

//“Sabado”, pois avançar 5 dias a partir da segunda-feira cai no
//sábado.

//Se for passado “Segunda-feira” e 8, a função deve retornar “Terca-
//feira”, pois avançar 8 dias a partir da segunda-feira cai na terça-
//feira da semana seguinte.

function QueDiaEHoje(Dia, avancarDias){
    const DiasDaSemana = ["Domingo", "Segunda-feira", "Terca-feira", 
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];
    let novoDia;

    for (let i = 1; i <= 7; i++){
        if (Dia == DiasDaSemana[i]){
            novoDia = (i + avancarDias) % 7;
        }
    }

    return DiasDaSemana[novoDia];
}

console.log(QueDiaEHoje("Segunda-feira", 5));//teste do exercício: Sábado
console.log(QueDiaEHoje("Segunda-feira", 8));//teste do exercício: Terça-feira