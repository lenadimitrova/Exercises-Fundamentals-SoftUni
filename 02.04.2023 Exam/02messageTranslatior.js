function messageTranslatior(input) {
    let pattern = /!(?<command>[A-Z][a-z]{3,})!:(?<message>\[[A-Za-z{8,}\]]*\])/g;

    let stringCount = input.shift();
    let translatedMessage = {};


    for (let i = 0; i < stringCount; i++) {
        let matches = input[i].matchAll(pattern);

        if (input[i].match(pattern)) {
            for (const match of matches) {

                let send = match.groups.command
                let message = match.groups.message
                let result = [];
                for (let i = 1; i < message.length - 1; i++) {
                    let charAsNumber = message[i].charCodeAt();
                    result.push(charAsNumber);
                }
                console.log(`${send}: ${result.join(' ')}`);
            }
        } else {
            console.log('The message is invalid');
        }
    }
}
// messageTranslatior((["2",
//     "!Send!:[IvanisHere]",
//     "*Time@:[Itis5amAlready"]))

messageTranslatior((["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]))