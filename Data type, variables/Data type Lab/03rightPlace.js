function rightPlace(word, charToReplace, result) {
    let res = word.replace("_", charToReplace)
    let output = res === result ? "Matched" : "Not Matched"
    console.log(output);
}
    rightPlace('Str_ng', 'I', 'Strong');