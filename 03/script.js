/*
  Capturar 2 numeros e fazer
  as operacoes matematicas
  de soma, substracao, multiplicacao, 
  divisao e resto de divisao

  E para cada operacao , mostrar um alerta
  com o resultado.
*/

let firstNumber = prompt('Digite o primeiro numero: ');
let secondNumber = prompt('Digite o segundo numero: ');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const rest = firstNumber % secondNumber;

alert('Soma: ' + sum);
alert('Subtracao: ' + sub);
alert('Multiplicacao: ' + mult);
alert('Divisao: ' + div);
alert('Resto de divisao: ' + rest);