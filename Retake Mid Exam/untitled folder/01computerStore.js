function computerStore(input) {
    let totalPrice = 0;
    let command = input.shift();
    while (command !== 'special') {
        if (command === 'regular') {
            break;
        }
        let price = Number(command);
        if (price < 0) {
            console.log('Invalid price!');
            command = input.shift();
            continue;
        }
        totalPrice += price;
        command = input.shift();
    }
    if (totalPrice === 0) {
        return 'Invalid order!'
    } else {
        let tax = totalPrice * 0.20;
        let finalPrice = totalPrice * 1.2;
        if (command === 'special') {
            finalPrice *= 0.90;
        }
        return `Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPrice.toFixed(2)}$\nTaxes: ${tax.toFixed(2)}$\n-----------\nTotal price: ${finalPrice.toFixed(2)}$`
    }
}
console.log(computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])))