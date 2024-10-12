function sumDigits(num) {
    let sum = 0;
    let numAsString = num.toString();
    for (let i = 0; i < numAsString.length; i++) {
        let curChar = numAsString[i];
        sum += Number(curChar);
    }
    console.log(sum);
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)