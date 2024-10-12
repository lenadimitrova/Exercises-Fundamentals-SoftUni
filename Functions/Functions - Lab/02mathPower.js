function mathPower(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    console.log(result);
}
mathPower(2, 8)
mathPower(3, 4)

// function solve(number, power) {
// let result = Math.pow(number, power);
// console.log(result);
// }
// solve(2,8)