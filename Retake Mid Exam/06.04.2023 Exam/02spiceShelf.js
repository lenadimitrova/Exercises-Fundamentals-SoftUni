function spiceShelf(input) {
    let shelf = input.shift().split(' ');

    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'AddSpice':
                let spice = tokens[1]
                if (!shelf.includes(spice)) {
                    shelf.push(spice)
                    break;
                }
            case 'AddManySpices':
                let index = tokens[1];
                let spicesToBeAdd = tokens[2].split('|');
                shelf.splice.apply(shelf, [2, 0].concat(spicesToBeAdd));
                break;
            case 'SwapSpices':
                let elOne = tokens[1];
                let elTwo = tokens[2];
               [shelf[elOne], shelf[elTwo]] = [shelf[elTwo], shelf[elOne]]
                break;
            case 'ThrowAwaySpices':
                let startIndex = tokens[1];
                let spicesToBeRemoved = tokens[2];
                shelf.splice(startIndex, spicesToBeRemoved);
                break;
            case 'Arrange':
                shelf.sort((a,b) => a - b)
        }

    }
     console.log(shelf);
}
spiceShelf((['coriander, cloves, paprika, allspice, turmeric, anise, cumin',
    'AddSpice nutmeg',
    'ThrowAwaySpices cloves 3',
    'AddManySpices 3 cayenne|cardamom|mace',
    'done']))