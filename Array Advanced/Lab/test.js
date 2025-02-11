function arrayManipulations(input) {
    let arr = input.shift().split(" ").map(Number);
    let commands = input.slice();
    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(" ");
        let command = tokens[0];
        let parameters = tokens.slice(1).map(Number);
        switch (command) {
            case "Add": arr.push(parameters[0]); break;
            case "Remove": arr = arr.filter(x => x !== parameters[0]); break;;
            case "RemoveAt": arr.splice(parameters[0], 1); break;;
            case "Insert": arr.splice(parameters[1], 0, parameters[0]); break;;
        }
    } 
    console.log(arr.join(" "));   
}
arrayManipulations(  (['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']))