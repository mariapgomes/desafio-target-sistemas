// Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?
//----------------------------------------------------------------------

// RESPOSTA: A variável SOMA terá o mesmo valor da variável K porque as duas iniciam com valor zero, então nesse caso o valor da variável SOMA será 1
//----------------------------------------------------------------------

///////////////////////////////////////////////

// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
//----------------------------------------------------------------------

function verificaFibonacci(numero) {
  let anterior = 0;
  let atual = 1;
  let proximo = anterior + atual;

  for (let i = 0; proximo <= numero; i++) {
    if (proximo === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }

    anterior = atual;
    atual = proximo;
    proximo = anterior + atual;
  }

  return `${numero} não pertence à sequência de Fibonacci.`;
}

console.log(verificaFibonacci(13));

////////////////////////////////////////////////

// Descubra a lógica e complete o próximo elemento:
//----------------------------------------------------------------------

// a) 1, 3, 5, 7, _9_ | Sempre soma 2
//----------------------------------------------------------------------

// b) 2, 4, 8, 16, 32, 64, _128_ | Sempre soma o último número com ele mesmo.
//----------------------------------------------------------------------

// c) 0, 1, 4, 9, 16, 25, 36, _49_ | Sempre soma o último número com o próximo número ímpar.
//----------------------------------------------------------------------

// d) 4, 16, 36, 64, _100_ | Primeiro soma o último número com 8 (4+8=12), depois voltar a somar o último número com o valor encontrado na soma anterior (4+12=16). Em seguida o resultado da primeira conta é somado com 8 (12+8=20)e esse valor é somado ao último número (20+16=36).
//----------------------------------------------------------------------

// e) 1, 1, 2, 3, 5, 8, _13_ | Sempre soma o último número com seu antecessor.
//----------------------------------------------------------------------

// f) 2,10, 12, 16, 17, 18, 19, _20_ | Sempre soma ao último número começando por 8, depois 2, depois a metade de 8(4) e a metade de 2(1), segue somando os últimos números com a metade de 1.

////////////////////////////////////////////////

// Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.
//----------------------------------------------------------------------

//RESPOSTA: Os dois estarão na mesma distância, porque no momento que eles se cruzam eles estão exatamente no mesmo ponto.
//----------------------------------------------------------------------

//COMO CHEGUEI NESSA RESPOSTA: Mesmo o carro sendo mais rápido e o caminhão tendo contra tempos, o que define a resposta seria o fato de os veículos estarem em sentidos opostos, e a pergunta se referir ao momento em que eles se cruzam e não antes e nem depois disso.