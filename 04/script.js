/* 
Solicitar o nome do aluno e as 3 notas
do bimestre calcular a media daquele aluno.

A media positiva devera ser maior que 6

Se o aluno passou no bimestre, dar os parabens

se o aluno nao passou no bimestre, motivar o aluno a dar seu melhor 
na prova de recuperacao.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

*/

let student = prompt('Digite o nome do aluno: ');

let n1 = prompt('Digite a N1: ');
let n2 = prompt('Digite a N2: ');
let n3 = prompt('Digite a N3: ');

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6;

average = average.toFixed(2);

if (result) {
  alert(`Parabens ${student}, voce passou de bimestre :), sua nota foi: ${average} `);
} else {
  alert(`${student}, de o melhor na prova de recuperacao para passar de bimestre :(, sua nota foi: ${average}`);
}