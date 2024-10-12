function wordOccurences(input) {

    let wordsList = {};

    for (const word of input) {
        if (!wordsList[word]) {
            wordsList[word] = 0;
        }
        wordsList[word]++
    }
    let wordsEntries = Object.entries(wordsList).sort((a, b) => b[1] - a[1])
    for (const [word, count] of wordsEntries) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])