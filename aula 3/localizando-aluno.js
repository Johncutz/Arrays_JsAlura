// DESAFIO - Procurando na Lista

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é: ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não esta cadastrado";
    }
}

console.log(exibeNomeNota("Juliana"));
console.log(exibeNomeNota("Nemo"));


// includes => booleano
// indexOf => numero do indice 