function mergeArrays(arr1, arr2) {
    newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let firstValue = arr1[i];
        let secondValue = arr2[i];
        if (i % 2 === 0) {
            firstValue = Number(firstValue)
            secondValue = Number(secondValue)
        }
        let result = firstValue + secondValue
        newArray.push(result)

    }
    console.log(newArray.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])