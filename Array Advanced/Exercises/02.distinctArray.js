function distinctArray(array) {
    let uniqueArray = [];
    for (let el of array) {
        if (uniqueArray.indexOf(el) === -1) {
            uniqueArray.push(el)
        }
    }
    console.log(uniqueArray.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

// taking unique values with methos "set"

function distinctArray(array) {
    let uniqueNumbers = new Set(array);
    console.log([...uniqueNumbers]);     // --> деструктуриране на масив
}
distinctArray([1, 2, 3, 4]);

// solve the problem with includes() method:

//1. Create new array where to collect the unique numbers
//2. Iterrate  througth the existing elements from the given as a parameter array
//3. Check if the new created array consist the current el from the array with includes()
//4. If the el is not iin the array use push() method to add it

function distinctArray(array) {
    let uniqueArray = [];
    for (let el of array) {
        if (!uniqueArray.includes(el)) {
            uniqueArray.push(el)   
        }
    }
    console.log(uniqueArray);
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

