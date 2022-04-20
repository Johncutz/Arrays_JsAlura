const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10;
};

const arraySomada1 = arrayNums.map(multiplicaPorDez)

const arraySomada2 = arrayNums.map(num => num * 10)

console.log(arraySomada1);
console.log(arraySomada2);