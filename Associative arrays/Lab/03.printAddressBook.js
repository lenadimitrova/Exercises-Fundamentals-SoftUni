function printAddressBook(input) {

    let addressBook = {};

    for (const line of input) {
        let [name,address] = line.split(":");

        addressBook[name] = address;
    }
    let sortedBook = Object.entries(addressBook);
    sortedBook.sort((a,b) => a[0].localeCompare(b[0]));
    for (const [name, address] of sortedBook) {
        console.log(`${name} -> ${address}`);
    }
}
printAddressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])