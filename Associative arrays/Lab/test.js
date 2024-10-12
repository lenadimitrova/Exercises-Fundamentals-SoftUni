function printAddressBook(input) {

    let addressBook = {};

    for (const line of input) {
        let [name,address] = line.split(":");

        addressBook[name] = address;
    }
    for (const [name, address] of Object.entries(addressBook).sort((a,b) => a[0].localeCompare(b[0]))) {
        console.log(`${name} -> ${address}`);
    }
}
printAddressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])