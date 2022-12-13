/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

const students = [
  {
    name: 'Fabio',
    n1: 10,
    n2: 7
  },
  {
    name: 'Renata',
    n1: 8,
    n2: 7
  },
  {
    name: 'Olivia',
    n1: 5,
    n2: 4
  },
  {
    name: 'Leticia',
    n1: 3,
    n2: 3
  },
];

function note(n1, n2) {
  return ((n1 + n2) / 2).toFixed(2)
}

function printStudentNote(student) {

  if(note(student.n1, student.n2) > 7) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${note(student.n1, student.n2)}
    Parabéns, ${student.name}, você passou no concurso !
    `
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é: ${note(student.n1, student.n2)}
    Que pena, ${student.name}, não foi dessa vez.
    `
  }
}

for (let student of students) {
  let studentMessage = printStudentNote(student)
  alert(studentMessage)
}