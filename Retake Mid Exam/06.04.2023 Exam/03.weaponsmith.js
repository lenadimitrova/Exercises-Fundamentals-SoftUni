function weaponsmith(input) {
    let stringArr = input.shift().split('|');

    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Done') {
            break;
        }
        switch (command) {
            case 'Add':
                let particle = tokens[1];
                let indexToAdd = Number(tokens[2]);
                if (indexToAdd >= 0 || indexToAdd < stringArr.length - 1) {
                    stringArr.splice(indexToAdd, 0, particle)
                    break;
                }
            case 'Remove':
                let indexToRemove = tokens[1]
                if (indexToRemove >= 0 || indexToRemove < stringArr.length - 1) {
                    stringArr.splice(indexToRemove, 1);
                    break;
                }
            case 'Check':
                for (let i = 0; i < stringArr.length; i++) {
                    if (i % 2 === 0) {
                        stringArr.push[stringArr[i]]
                        console.log(stringArr.join(' '));
                        break;
                    }
                }
            
                }
        }
    }
    console.log(`You crafted ${stringArr.join('')}!`);

weaponsmith((["pa|Do|ha|mm|er",
    "Remove 0",
    "Add om 1",
    "Check Even",
    "Done"]))