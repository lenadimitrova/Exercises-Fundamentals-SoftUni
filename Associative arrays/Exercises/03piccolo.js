function piccolo(input) {

    let allCars = {};

    for (const line of input) {
        let tokens = line.split(", ")
        let direction = tokens[0];
        let carNumber = tokens[1];


        if (direction === "IN") {
            allCars[carNumber] = direction;

        } else if (direction === "OUT") {
            delete allCars[carNumber]
        }
    }

    let soretedEntries = Object.entries(allCars).sort((a, b) => a[0].localeCompare(b[0]));

    if (soretedEntries.length === 0) {
        console.log('Parking Lot is Empty');
    }
    soretedEntries.forEach((carNumber) => console.log(carNumber[0]));
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA'])