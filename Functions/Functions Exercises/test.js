function factorial(n1, n2) {
  let factorialOne = calcFactorial(n1);
  let factorialTwo = calcFactorial(n2);

  console.log((factorialOne / factorialTwo).toFixed(2));

  function calcFactorial(num) {
    let res = 1;
    for (let i = num; i > 1; i -= 2) {
      res *= i * (i - 1)
    }
    return res
  }
}
factorial(5, 2);
