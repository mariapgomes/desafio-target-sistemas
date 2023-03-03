// Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?
// Resposta: A variável SOMA terá o mesmo valor da variável K porque as duas iniciam com valor zero, então nesse caso o valor da variável SOMA será 1

///////////////////////////////////////////////

// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

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