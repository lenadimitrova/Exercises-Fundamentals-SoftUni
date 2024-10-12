function simpleCalculatior (num1, num2, operator) {
    let result; 
    switch (operator) {
        case "multiply": result = num1 * num2; break;
        case "divide": result = num1 / num2; break;
        case "add": result = num1 + num2; break;
        case "subtract": result = num1 - num2; break;
    }
    console.log(result);
}
simpleCalculatior(5, 5, 'multiply')
simpleCalculatior(40, 8, 'divide')
simpleCalculatior(12, 19, 'add')
simpleCalculatior(50, 13, 'subtract')

// function simpleCalculatior(num1, num2, operator) {
//     let result;
//     let multiply = (num1, num2) => num1 * num2
//     let divide = (num1, num2) => num1 / num2
//     let add = (num1, num2) => num1 + num2
//     let subtract = (num1, num2) => num1 - num2

//     switch (operator) {
//         case "multiply":result = multiply(num1, num2); break;
//         case "divide": result = divide(num1, num2); break;
//         case "add": result = add(num1, num2); break;
//         case "subtract": result = subtract(num1, num2); break;
//     }
//     console.log(result);
// }
// simpleCalculatior(5, 5, 'multiply')
// simpleCalculatior(40, 8, 'divide')
// simpleCalculatior(12, 19, 'add')
// simpleCalculatior(50, 13, 'subtract')