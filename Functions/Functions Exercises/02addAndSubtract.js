function addAndSubtract(num1, num2, num3) {
    let sum = sumToNum(num1, num2);
    let subtract = subtractToNum(sum, num3);
    return subtract

    function sumToNum(num1, num2) {
        return num1 + num2;
    }
    function subtractToNum(num1, num2) {
        return num1 - num2
    }
}
// addAndSubtract (23, 6, 10);
// addAndSubtract (1, 17, 30);
// addAndSubtract (42, 58, 100);


console.log(addAndSubtract(23, 6, 10));