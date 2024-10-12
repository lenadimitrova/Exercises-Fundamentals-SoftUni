function stringSubstring(word, text) {

    let wordArr = text.toLowerCase().split(" ");

    for (const el of wordArr) {
        if (el === word) {
            return console.log(el);
        }
    }
    console.log(`${word} not found!`);

}
stringSubstring('javascript', 'JavaScript is the best programming language')