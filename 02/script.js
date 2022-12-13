/* 
  Solicite 2 numeros, faca a soma deles
  e apresente o resultado final ao usuario
*/

alert("Iremos somar 2 numeros");

let numberOne = prompt('Digite o primeiro numero: ');
let numberTwo = prompt('Digite o segundo numero: ');

// typeof numberOne

let result = Number(numberOne) + Number(numberTwo);

alert('O resultado e: ' + result);