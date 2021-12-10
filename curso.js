const aluno = require('./aluno');
const estudantes = require('./estudantes')

/*Micro desafio - Passo 3*/
const curso = {
    nomeCurso: 'DH - Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: estudantes,

/*Micro desafio - Passo 4*/   
adicionarAluno(aluno){
    this.listaEstudantes.push(aluno)
    },

/*Micro desafio - Passo 5*/
aprovacao(aluno) 
{
    if (aluno.calcMedia() >= 
    this.notaAprovacao && 
    aluno.faltas < this.faltasMaximas) 
    {
    return true;
    } 
    else if (
    aluno.faltas === this.faltasMaximas && 
    aluno.calcMedia()>(this.notaAprovacao+(this.notaAprovacao*0.1))) 
    {
    return true;
    } 
    else {
    return false;
    };
    },
}

/*curso.adicionarAluno('Bruno', 1, [10, 10, 10, 10])
console.log(curso.listaEstudantes);*/
