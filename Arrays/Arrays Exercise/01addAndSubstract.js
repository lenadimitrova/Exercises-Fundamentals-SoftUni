function addAndSubstract(arr) {
    let newArr = [];
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        oldSum += currentNum
        if (currentNum % 2 === 0) {
            currentNum += i
        } else {
            currentNum -= i
        }
        newArr[i] = currentNum; // newArr.push(i);
        newSum += currentNum;
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35])