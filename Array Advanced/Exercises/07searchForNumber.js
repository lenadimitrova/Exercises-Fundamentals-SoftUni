function searchForNumber(arr1, arr2) {
    let takeElements = arr2.shift();
    let deleteElements = arr2.shift();
    let searchElements = arr2.shift();

    let modifiedArray = arr1.slice(0, takeElements)
    modifiedArray.splice(0, deleteElements);

    let counter = 0;

    for (let numbers of modifiedArray) {
        if (numbers === searchElements) {
            counter++
        }
    }
    console.log(`Number ${searchElements} occurs ${counter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])