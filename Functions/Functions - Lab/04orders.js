function orders(product, quantity) {
    let coffeePrice = 1.5;
    let waterPrice = 1;
    let cokePrice = 1.4;
    let snaksPrice = 2;
    let sum = 0;
    switch (product) {
        case "coffee": sum = coffeePrice * quantity; break;
        case "water": sum = waterPrice * quantity; break;
        case "coke": sum = cokePrice * quantity; break;
        case "snacks": sum = snaksPrice * quantity; break;
    }
    console.log(sum.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);