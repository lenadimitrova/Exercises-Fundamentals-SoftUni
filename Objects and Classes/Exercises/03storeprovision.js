function storeProvision(stock, orderedProducts) {

    const finalProductList = {};

    for (let i = 0; i < stock.length; i += 2) {
        const product = stock[i];
        finalProductList[product] = Number(stock[i + 1]);
    }
    for (let i = 0; i < orderedProducts.length; i += 2) {
        const product = orderedProducts[i];
        if (!finalProductList.hasOwnProperty(product)) {
            finalProductList[product] = 0;
        }
        finalProductList[product] += Number(orderedProducts[i + 1]);
    }
    for (const key in finalProductList) {
        console.log(`${key} -> ${finalProductList[key]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])