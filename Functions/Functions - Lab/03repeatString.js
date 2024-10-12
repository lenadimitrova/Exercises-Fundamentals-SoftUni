function repeatString(text, repeat) {
    let printText = ""
    for (let i = 0; i < repeat; i++) {
        printText += text
    }
    return printText
    // console.log(printText);
}
console.log(repeatString("abc", 3));