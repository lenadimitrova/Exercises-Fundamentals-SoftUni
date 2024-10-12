function wordsTracker(input) {

    let matchedWords = {};

    let wordsToBeFound = input.shift().split(" ");

    for (const word of wordsToBeFound) {

        matchedWords[word] = 0;
    }
     
    for (const word of input) {
        if (matchedWords.hasOwnProperty(word))
            matchedWords[word]++
    }
    
    let sortedWords = Object.entries(matchedWords).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWords) {

        console.log(`${word} - ${count}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])