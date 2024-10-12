function factorialDivision(num1, num2) {
    let result = 0
    for (let i = num1; i >= 1; i--) {
        let currentNum = i;
        for (let k = 1; k <= num1; k++){
            currentNum *= k
        }
        
    }
    console.log(currentNum);

}
factorialDivision(5, 2);