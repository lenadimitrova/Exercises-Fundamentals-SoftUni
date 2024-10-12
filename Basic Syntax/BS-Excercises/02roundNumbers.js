function roundNumbers(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    console.log(parseFloat(number.toFixed(precision)));
}
roundNumbers(3.1415926535897932384626433832795,2)
roundNumbers(10.5,3)