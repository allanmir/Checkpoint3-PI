/*Micro desafio - Passo 1*/
function aluno(nome, qtdFaltas, notas) 
{
this.nome = nome,
this.qtdFaltas = qtdFaltas,
this.notas = notas,

/*Micro desafio - Passo 2*/
this.calcMedia = function calcMedia() {
    let vlrMedia = 0;
    for (let i = 0; i < this.notas.length; i++) {
         vlrMedia += this.notas[i];        
    }
    return (vlrMedia/this.notas.length)
    };
    this.faltas = function faltas() 
    {
    return this.faltas++
    }
};

module.exports = aluno;