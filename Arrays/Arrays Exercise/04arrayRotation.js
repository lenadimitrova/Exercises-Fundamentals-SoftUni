function arrayRotation(arr, rotations) {
    buffArray = [];
    for (let i = 0; i < rotations; i++) {
        let currentElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArray.push(arr[j]);
        }
        buffArray.push(currentElement);
        arr = buffArray
        buffArray = [];
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);