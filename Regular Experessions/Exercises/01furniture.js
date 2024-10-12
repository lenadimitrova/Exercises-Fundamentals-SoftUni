function furniture(data) {
    let totalPrice = 0;
    console.log('Bought furniture:');
    for (const line of data) {
        if (line === "Purchase") {
            break;
        }
        let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;

        let matches = line.matchAll(pattern);
        for (const match of matches) {
            console.log(match.groups.furniture);

            let productPrice = match.groups.price;
            let productQuantity = match.groups.quantity;

            totalPrice += productPrice * productQuantity
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])