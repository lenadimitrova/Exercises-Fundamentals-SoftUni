function firstAndLastNum(array) {
    let firstElement = array.shift();

    let firstPart = array.slice(0, firstElement);
    let secondPart = array.slice(array.length - firstElement);
    console.log(firstPart.join(" "));
    console.log(secondPart.join(" "));
}
firstAndLastNum([2, 7, 8, 9])
firstAndLastNum([3, 6, 7, 8, 9])
