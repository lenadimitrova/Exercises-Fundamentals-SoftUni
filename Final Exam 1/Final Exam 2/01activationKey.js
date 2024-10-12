function activationKey(input) {

    let activationKey = input.shift();

    for (const line of input) {
        let tokens = line.split('>>>');
        let command = tokens[0];
        let parameters = tokens.slice(1);

        if (command === 'Generate') {
            console.log(`Your activation key is: ${activationKey}`);
        }

        switch (command) {
            case 'Slice': {
                let startIdex = parameters[0];
                let endIndex = parameters[1];
                let leftSide = activationKey.substring(0, startIdex);
                let rightSide = activationKey.substring(endIndex);
                activationKey = leftSide + rightSide
                console.log(activationKey);
                break;
            }
            case 'Flip': {
                let casing = parameters[0];
                let startIdex = parameters[1];
                let endIndex = parameters[2];
                let partToBeReplaced = activationKey.substring(startIdex, endIndex);
                if (casing === 'Upper') {
                    let newPart = partToBeReplaced.toUpperCase()
                    activationKey = activationKey.replace(partToBeReplaced, newPart)
                } else {
                    let newPart = partToBeReplaced.toLowerCase();
                    activationKey = activationKey.replace(partToBeReplaced, newPart)
                }
                console.log(activationKey);
                break;
            }
            case 'Contains': {
                let substring = parameters[0];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
                console.log(activationKey);
            }
        }
    }
}
activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])