const aluno = require('./aluno')

let aluno1 = new aluno('Allan', 1, [10, 8, 7, 7])
let aluno2 = new aluno('João', 15, [1, 1, 1, 1])
let aluno3 = new aluno('Maria', 2, [7, 8, 7, 7])
let aluno4 = new aluno('Pedro', 1, [10, 10, 10, 10])
let estudantes = [aluno1, aluno2, aluno3, aluno4]

/*console.log(aluno4.calcMedia());
console.log(aluno4);*/


module.exports = estudantes;