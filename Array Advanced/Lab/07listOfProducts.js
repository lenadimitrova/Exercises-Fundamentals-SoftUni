function listOfProducts(array) {
    let productsAscending = array.sort();
    for (let i = 0; i < productsAscending.length; i++) {
        console.log(`${i + 1}.${productsAscending[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])