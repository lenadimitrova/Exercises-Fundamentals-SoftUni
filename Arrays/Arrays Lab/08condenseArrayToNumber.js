function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let firstElement = arr[i];
            let secondElement = arr[i + 1];

            newArr.push(firstElement + secondElement);
        }
        arr = newArr
    }
    console.log(arr[0]);
}
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])