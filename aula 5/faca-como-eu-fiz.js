const numeros = [43, 50, 65, 12];

const soma1 = numeros.reduce((acum, atual) => atual + acum, 0);

const soma2 = numeros.reduce(function(acum, atual){
    return atual + acum;
}, 0);

function operacaoNumerica(acum, atual){
    return atual + acum;
};
const soma3 = numeros.reduce(operacaoNumerica, 0);

console.log(soma1);
console.log(soma2);
console.log(soma3);