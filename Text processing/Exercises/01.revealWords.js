function revealWords(words, text) {

    let wordsToBeFound = words.split(", ");
    let newText = text.split(" ");

    for (const word of wordsToBeFound) {
        for (let i = 0; i < newText.length; i++) {
            if(newText[i].includes("*") && newText[i].length === word.length) {
                newText[i] = word
            }
            
        }
        
    }
    console.log(newText.join(" "));
}
revealWords('great', 'softuni is ***** place for learning new programming languages')


//solve with more functional coding

function revealWordsFunctional(words, text) {

    text = ` ${text} `;

    let wordsArr = words.split(", ");
    wordsArr.forEach(word => {
        let match = ` ${"*".repeat(word.length)} `;
        text = text.replace(match, ` ${word} `);
    });
    console.log(text.trim());
}
revealWordsFunctional('great', 'softuni is ***** place for learning new programming languages')