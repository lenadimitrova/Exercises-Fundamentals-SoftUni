function reverseAnArray(number, arr) {
    let newArray = []
    for (let i = 0; i < number; i++) {
        newArray[number - 1 - i] = arr[i]
    }
    console.log(newArray.join(" "));
}
reverseAnArray(3, [10, 20, 30, 40, 50])

// function reverse(n, arr) {
//     newArr = [];
//     for (let i = n - 1; i >= 0; i--) {
//         element = arr[i];
//         newArr.push(element)

//     }
//     console.log(newArr.join(' '));
// }
// reverse(3, [10, 20, 30, 40, 50])