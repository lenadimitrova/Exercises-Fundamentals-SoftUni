function negativeOrPositiveNumbers(array) {
    let newArray = [];
    for (let element of array) {
        let num = Number(element)
        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num)
        }
    }
    for (let num of newArray) {
        console.log(num);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])