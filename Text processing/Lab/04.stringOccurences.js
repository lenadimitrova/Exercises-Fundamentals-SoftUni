function stringOccurences(text, wordToBeFound) {

    let words = text.split(" ");

    let counter = 0;
    for (const word of words) {
        if (word === wordToBeFound) {
            counter++
        }
    }
    console.log(counter);
}
stringOccurences('This is a word and it also is a sentence', 'is')