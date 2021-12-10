const _ = require('lodash')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function main() {
    readline.question('Введите несколько чисел через пробел и нажмите Enter: ', numbers => {
        console.log("Сумма этих чисел равна:", _.sum(numbers.split(" ").map(n => { return +n })))
        readline.close();
    });
}

main()