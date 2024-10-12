function modernTime(text) {

    let wordsArr = text.split(" ");

    for (const word of wordsArr) {
        let isValid = word.startsWith("#") && word.length > 1
        if (isValid) {
            let isLetter = true;
            let wordCopy = ""
            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                if (char.charAt() < 97 || char.charAt() > 122) {
                    isLetter = false
                    break;
                } else {
                    wordCopy += word[i]
                }
            }
            if (isLetter) {
                console.log(wordCopy);
            }
        }
    }
}
modernTime('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log("------------------------------------");
modernTime('The symbol # is known #variously in English-speaking #regions as the #number sign')