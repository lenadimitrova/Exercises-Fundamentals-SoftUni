function signCheck(num1, num2, num3) {
    let sum = num1 * num2 * num3;
    if (sum >= 0) {
        return "Positive"
    } else {
        return "Negative"
    }
}
console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));