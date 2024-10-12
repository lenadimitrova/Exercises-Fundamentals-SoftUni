function softuniBarIncome(data) {
    let totalIncome = 0;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|&%.]*<(?<product>\w+)>[^|&%.]*\|(?<count>\d+)\|[^0-9\|&%.]*(?<price>[0-9|\.]+)\$/g;

    for (const line of data) {
        if (line === 'end of shift') {
            console.log(`Total income: ${totalIncome.toFixed(2)}`);
            break;
        }

        let matches = line.matchAll(pattern);

        for (const match of matches) {
            let productPrice = match.groups.price;
            let productCount = match.groups.count;
            totalPrice = productCount * productPrice;
            totalIncome += totalPrice

            console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }
}
softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])

// softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'])