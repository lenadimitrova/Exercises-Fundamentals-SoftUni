function mirrorWords(input) {

    let message = input.shift();

    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;

    let matches = message.matchAll(pattern);
    let counter = 0;
    let result = [];

    for (const match of matches) {
        let firstWord = match.groups.word1;
        let secondWord = match.groups.word2;
        counter++

        let reversed = secondWord.split('').reverse().join('')

        if (firstWord === reversed) {
            result.push(`${firstWord} <=> ${secondWord}`);
        }
    }

    if (counter > 0) {
        console.log(`${counter} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (result.length !== 0) {
        console.log('The mirror words are:');
        console.log(result.join(', '));
    } else {
        console.log('No mirror words!');
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])
// console.log('---------------------------');

// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
// console.log('---------------------------');

// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])