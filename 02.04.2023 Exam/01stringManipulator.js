function stringManipulator(input) {

    let message = input.shift();

    for (const line of input) {
        let commandsArr = line.split(' ');
        let command = commandsArr[0];
        let parameters = commandsArr.slice(1);

        if (command === 'End') {
            break;
        }

        switch (command) {
            case 'Translate':
                let char = parameters[0];
                let replacement = parameters[1];
                while (message.includes(char)) {
                    message = message.replace(char, replacement);
                }
                console.log(message);
                break;
            case 'Includes':
                let substring = parameters[0];
                if (message.includes(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                let startSubstring = parameters[0];
                if (message.startsWith(startSubstring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                message = message.toLowerCase()
                console.log(message);
                break;
            case 'FindIndex':
                let lastIndex = parameters[0];
                let indexOfmessage = message.lastIndexOf(lastIndex)
                console.log(indexOfmessage);
                break;
            case 'Remove':
                let startIndex = parameters[0];
                let count = parameters[1];
                let messageToBeRemoved = message.substring(startIndex, startIndex + count);
                message = message.replace(messageToBeRemoved, '')
                console.log(message);
                break;
        }
    }
}
// stringManipulator((["//Thi5 I5 MY 5trING!//",
//     "Translate 5 s",
//     "Includes string",
//     "Start //This",
//     "Lowercase",
//     "FindIndex i",
//     "Remove 0 10",
//     "End"]))

stringManipulator((["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"]))