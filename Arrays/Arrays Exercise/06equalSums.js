function equalSums(arr) {
    foundIndex = "no";
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let l = 0; l < i; l++) {
            sumLeft += arr[l];
        }
        for (let r = i + 1; r < arrLength; r++) {
            sumRight += arr[r];
        }
        if(sumLeft === sumRight) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])