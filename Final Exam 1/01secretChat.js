function secretChat(input) {

    let secretMessage = input.shift();

    for (const line of input) {

        let tokens = line.split(':|:');
        let command = tokens[0];
        let parameters = tokens.slice(1);

        switch (command) {
            case 'ChangeAll': {
                let substring = parameters[0];
                let replacement = parameters[1];
                while (secretMessage.includes(substring)) {
                    secretMessage = secretMessage.replace(substring, replacement);
                }
                console.log(secretMessage);
                break;
            }
            case 'Reverse': {
                let string = parameters[0];
                if (secretMessage.includes(string)) {
                    secretMessage = secretMessage.replace(string, '')
                    let reversedString = string.split('').reverse().join('');
                    secretMessage += reversedString;
                    console.log(secretMessage);
                } else {
                    console.log('error');
                }
                break;
            }
            case 'InsertSpace': {
                let index = parameters[0];
                let leftSide = secretMessage.substring(0, index);
                let rightSide = secretMessage.substring(index);
                secretMessage = leftSide + ' ' + rightSide;
                console.log(secretMessage);
                break;
            }
            case 'Reveal': {
                console.log(`You have a new text message: ${secretMessage}`);
                return
            }
        }
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])