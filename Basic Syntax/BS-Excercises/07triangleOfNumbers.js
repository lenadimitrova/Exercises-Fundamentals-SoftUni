function triangleOfNumbers(n) {
    for (let row = 1; row <= n; row++) {
        let buffNum = ""
        for (let col = 0; col < row; col++) {
            buffNum += row + " "
        }
        console.log(buffNum);
    }
}
triangleOfNumbers(3)