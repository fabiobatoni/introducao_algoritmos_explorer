/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [x]  A soma dos dois números;
- [x]  A subtração dos dois números;
- [x]  A multiplicação dos dois números;
- [x]  A divisão dos dois números;
- [x]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [x]  Verifique se a soma dos dois números é par (ou ímpar);
- [x]  Verifique se os dois números inseridos são iguais (ou diferentes).*/

let numberOne = Number(prompt('Digite o primeiro numero'))
let numberTwo = Number(prompt('Digite o segundo numero'))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${rest}`)

if(sum % 2 == 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é impar: ${sum}`)
}

if(numberOne === numberTwo) {
  alert(`Os dois numeros digitados sao iguais: ${numberOne} e ${numberTwo}`)
} else { 
  alert(`Os dois numeros digitados sao diferentes: ${numberOne} e ${numberTwo}`)
}

