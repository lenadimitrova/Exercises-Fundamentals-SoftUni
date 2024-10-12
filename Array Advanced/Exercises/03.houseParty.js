function houseParty(input) {
    let guestList = [];
    // iteration througth the array to take all the elements in it 
    for (let el of input) {
        // taking the names of the people by spliting(split(" ")) the array
        let command = el.split(" ");
        let name = command[0];
        if (command.length === 3) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (guestList.includes(name)) {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])