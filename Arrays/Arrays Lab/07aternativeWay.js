function solve(arr, arr2) {
    let sum = 0;
    let notEqualIndex = 0;
    let isTrue = false;
    for (let i = 0; i < arr.length; i++) {
        let num1 = Number(arr[i]);
        let num2 = Number(arr2[i]);
        if (num1 === num2) {
            sum += num1;
            continue;
 
        } else {
            notEqualIndex = i;
            console.log(`Arrays are not identical. Found difference at ${notEqualIndex} index`);
            isTrue = true;
            break;
        }
 
    }
    if (!isTrue) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
 
 
}
solve(['10','20','30'], ['10','20','30'])
