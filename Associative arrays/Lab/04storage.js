function storage(input) {

    let productsList = {};

    for (const line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity)

        if (productsList[product]) {
            quantity += productsList[product]
        }
        productsList[product] = quantity;

    }
    for (const product in productsList) {
        console.log(`${product} -> ${productsList[product]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])