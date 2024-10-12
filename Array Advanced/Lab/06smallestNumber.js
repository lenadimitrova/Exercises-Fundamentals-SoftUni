function smallestNumber(array) {
    let orderedArray = array.sort((a, b) => a - b)
    let theSmallestNum = orderedArray.slice(0, 2);
    console.log(theSmallestNum.join(" "));
}
smallestNumber([30, 15, 50, 5])