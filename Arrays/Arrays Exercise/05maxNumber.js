function maxNumber(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isBigger = true;
        for (let k = i + 1; k < arr.length; k++) {
            if (currentNum <= arr[k]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            result.push(arr[i])
        }
    }
    console.log(result.join(" "));
}
maxNumber([1, 4, 3, 2])